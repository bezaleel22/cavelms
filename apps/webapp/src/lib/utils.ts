import type { RequestEvent } from "../routes/$types";

export const handleLoginRedirect = (
  event: RequestEvent,
  message: string = "You must be logged in to access this page"
) => {
  const redirectTo = event.url.searchParams.get("redirectTo");
  if (redirectTo) return `/${redirectTo.slice(1)}`;

  const fromUrl = event.url.pathname + event.url.search;
  return `/login?redirectTo=${fromUrl}&message=${message}`;
};

/**
 * Gets the first name, technically gets all words leading up to the last
 * Example: "Blake Robertson" --> "Blake"
 * Example: "Blake Andrew Robertson" --> "Blake Andrew"
 * Example: "Blake" --> "Blake"
 * @param str
 * @returns {*}
 */
export const getFirstName = (str: string): string => {
  var arr = str.split(" ");
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.slice(0, -1).join(" "); // returns "Paul Steve"
};

/**
 * Gets the last name (e.g. the last word in the supplied string)
 * Example: "Blake Robertson" --> "Robertson"
 * Example: "Blake Andrew Robertson" --> "Robertson"
 * Example: "Blake" --> "<None>"
 * @param str
 * @param {string} [ifNone] optional default value if there is not last name, defaults to "<None>"
 * @returns {string}
 */
export const getLastName = (str: string, ifNone?: string): string => {
  var arr = str.split(" ");
  if (arr.length === 1) {
    return ifNone || "<None>";
  }
  return arr.slice(-1).join(" ");
};

export const parseName = (input: string) => {
  let fullName = input || "";
  let result: any = {};

  if (fullName.length > 0) {
    var nameTokens =
      fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];

    if (nameTokens.length > 3) {
      result.name = nameTokens.slice(0, 2).join(" ");
    } else {
      result.name = nameTokens.slice(0, 1).join(" ");
    }

    if (nameTokens.length > 2) {
      result.lastName = nameTokens.slice(-2, -1).join(" ");
      result.secondLastName = nameTokens.slice(-1).join(" ");
    } else {
      result.lastName = nameTokens.slice(-1).join(" ");
      result.secondLastName = "";
    }
  }

  return result;
};

export const splitName = (name = "") => {
  const [firstName, ...lastName] = name.split(" ").filter(Boolean);
  return {
    firstName: firstName,
    lastName: lastName.join(" "),
  };
};
