const ESCAPING_SEQUENZES = [
  // Strings
  { start: '"', end: '"' },
  { start: "'", end: "'" },
  { start: "`", end: "`" },
  // RegeEx
  { start: "/", end: "/", startPrefix: /(^|[[{:;,])\s?$/ },
]

const JSON_CLOSING_CHARS = /^[)\]}'\s]+/
const INITIAL_PLAYER_RESPONSE = /\bytInitialPlayerResponse\s*=\s*\{/i

export class Utils {
  
  static getStringBetweenStrings(data: string, start_string: string, end_string: string) {
    const regex = new RegExp(
      `${this.escapeStringRegexp(start_string)}(.*?)${this.escapeStringRegexp(end_string)}`,
      "s"
    )
    
    const match = data.match(regex)
    return match ? match[1] : undefined
  }

  static escapeStringRegexp(input: string): string {
    return input.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
  }

  static between = (haystack, left, right) => {
    let pos
    if (left instanceof RegExp) {
      const match = haystack.match(left)
      if (!match) {
        return ""
      }
      pos = match.index + match[0].length
    } else {
      pos = haystack.indexOf(left)
      if (pos === -1) {
        return ""
      }
      pos += left.length
    }
    haystack = haystack.slice(pos)
    pos = haystack.indexOf(right)
    if (pos === -1) {
      return ""
    }
    haystack = haystack.slice(0, pos)
    return haystack
  }

  static parseJSON = (source, varName, json) => {
    if (!json || typeof json === "object") {
      return json
    } else {
      try {
        json = json.replace(JSON_CLOSING_CHARS, "")
        return JSON.parse(json)
      } catch (err: any) {
        throw Error(`Error parsing ${varName} in ${source}: ${err.message}`)
      }
    }
  }

  static cutAfterJS = (mixedJson) => {
    // Define the general open and closing tag
    let open, close
    if (mixedJson[0] === "[") {
      open = "["
      close = "]"
    } else if (mixedJson[0] === "{") {
      open = "{"
      close = "}"
    }

    if (!open) {
      ;("Can't cut unsupported JSON (need to begin with [ or { ) but got:")
      throw new Error(` ${mixedJson[0]}`)
    }

    // States if the loop is currently inside an escaped js object
    let isEscapedObject: any = null

    // States if the current character is treated as escaped or not
    let isEscaped = false

    // Current open brackets to be closed
    let counter = 0

    let i
    // Go through all characters from the start
    for (i = 0; i < mixedJson.length; i++) {
      // End of current escaped object
      if (!isEscaped && isEscapedObject !== null && mixedJson[i] === isEscapedObject.end) {
        isEscapedObject = null
        continue
        // Might be the start of a new escaped object
      } else if (!isEscaped && isEscapedObject === null) {
        for (const escaped of ESCAPING_SEQUENZES) {
          if (mixedJson[i] !== escaped.start) continue
          // Test startPrefix against last 10 characters
          if (!escaped.startPrefix || mixedJson.substring(i - 10, i).match(escaped.startPrefix)) {
            isEscapedObject = escaped
            break
          }
        }
        // Continue if we found a new escaped object
        if (isEscapedObject !== null) {
          continue
        }
      }

      // Toggle the isEscaped boolean for every backslash
      // Reset for every regular character
      isEscaped = mixedJson[i] === "\\" && !isEscaped

      if (isEscapedObject !== null) continue

      if (mixedJson[i] === open) {
        counter++
      } else if (mixedJson[i] === close) {
        counter--
      }

      // All brackets have been closed, thus end of JSON is reached
      if (counter === 0) {
        // Return the cut JSON
        return mixedJson.substring(0, i + 1)
      }
    }

    // We ran through the whole string and ended up with an unclosed bracket
    throw Error("Can't cut unsupported JSON (no matching closing bracket found)")
  }
}
