export class RenderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RenderError";
  }
}

export interface Data {
  [key: string]: string | number | Array<string | number | Data> | Data;
}

export interface Options {
  keyFallback?: string;
  throwOnKeyNotfound?: boolean;
  cache?: boolean;
}

const isObject = (value: any): value is Data => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

const getValue = (data: Data, key: string, keyFallback?: string): any => {
  const keys = key.split(".");
  let value: any = data;

  for (const k of keys) {
    if (!isObject(value) || !value.hasOwnProperty(k)) {
      return keyFallback !== undefined ? keyFallback : undefined;
    }
    value = value[k];
  }

  return value;
};

const parse = (fileContent: string, filePath: string, data: Data, options: Options) => {
  const parsedFile = fileContent.replace(
    /\{\{(>?)(.*?)\}\}/g,
    (_, isComponent: string, reference: string) => {
      reference = reference.trim();

      if (isComponent) {
        // For the browser, the component loading should be handled separately (e.g., using fetch).
        throw new RenderError("Component references are not supported in the browser.");
      }

      const value = getValue(data, reference, options.keyFallback);

      if (value === undefined && options.throwOnKeyNotfound) {
        throw new RenderError(`Key "${reference}" was not found at "${filePath}"`);
      }

      return String(value);
    }
  );
  return parsedFile;
};

const cache = new Map<string, string>();

const defaultOptions = {
  keyFallback: "",
  throwOnKeyNotfound: false,
  cache: false,
};

const fetchFile = async (entryPoint: string): Promise<string> => {
  const response = await fetch(entryPoint);
  if (!response.ok) {
    throw new RenderError(`Error loading URL "${entryPoint}"`);
  }
  return await response.text();
};

const isRelativeUrlWithPath = (url: string): boolean => {
  return /^\/[^/]/.test(url);
};

export async function renderTemplate(
  entryPoint: string | URL,
  data: Data,
  options: Options = defaultOptions
): Promise<string> {
  if (
    typeof entryPoint === "string" &&
    (entryPoint.startsWith("http://") || entryPoint.startsWith("https://"))
  ) {
    const response = await fetchFile(entryPoint);
    return parse(response, entryPoint, data, options);
  }

  if (typeof entryPoint === "string" && isRelativeUrlWithPath(entryPoint)) {
    // Treat it as a relative URL with only a pathname
    const response = await fetchFile(entryPoint);
    return parse(response, entryPoint, data, options);
  }

  if (!(entryPoint instanceof URL) && typeof entryPoint !== "string") {
    throw new RenderError("Entry point must be a string or URL");
  }

  if (data.constructor !== Object) {
    throw new RenderError("Data must be an object");
  }

  if (options.constructor !== Object) {
    throw new RenderError("Options must be an object or undefined");
  }

  options = {
    ...defaultOptions,
    ...options,
  };

  // If the entryPoint is a URL, fetch the content using the Fetch API
  if (entryPoint instanceof URL) {
    const response = await fetchFile(entryPoint.toString());
    return parse(response, entryPoint.toString(), data, options);
  }

  // If not a URL, treat it as an HTML string
  return parse(entryPoint, "HTML String", data, options);
}

export const renderText = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null);
  let text = "";

  while (walker.nextNode()) {
    const node = walker.currentNode;
    text += node.textContent || "";
  }

  // Remove leading and trailing whitespace
  text = text.trim();

  // Remove multiple consecutive spaces
  text = text.replace(/\s{2,}/g, " ");

  return text;

};
