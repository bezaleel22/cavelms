import { _ } from "./store"
import messages from "$lib/lang/en.json"

const MESSAGE_FILE_URL_TEMPLATE = "./lang/{locale}.json"
let cachedLocale

async function setLocale({ withLocale: _locale } = { withLocale: "en" }) {
  cachedLocale = _locale
}

export { setLocale }
