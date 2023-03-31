// find binary search in javascript

/**
 * Queryfy.
 *
 * Prep javascript objects for interpolation within graphql queries.
 *
 * @param {mixed} obj
 * @return template string.
 */
export const queryfy = (obj: object | number | []) => {
    // Make sure we don't alter integers.
    if (typeof obj === 'number') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const props = obj.map(value => `${queryfy(value)}`).join(',');
        return `[${props}]`;
    }

    if (typeof obj === 'object') {
        const props = Object.keys(obj)
            .map(key => `${key}:${queryfy(obj[key])}`)
            .join(',');
        return `{${props}}`;
    }

    return JSON.stringify(obj);
};

/**
 * Gets the first name, technically gets all words leading up to the last
 * Example: "Blake Robertson" --> "Blake"
 * Example: "Blake Andrew Robertson" --> "Blake Andrew"
 * Example: "Blake" --> "Blake"
 * @param str
 * @returns {*}
 */
export const getFirstName = function (str) {
    var arr = str.split(' ');
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.slice(0, -1).join(' '); // returns "Paul Steve"
}

/**
 * Gets the last name (e.g. the last word in the supplied string)
 * Example: "Blake Robertson" --> "Robertson"
 * Example: "Blake Andrew Robertson" --> "Robertson"
 * Example: "Blake" --> "<None>"
 * @param str
 * @param {string} [ifNone] optional default value if there is not last name, defaults to "<None>"
 * @returns {string}
 */
export const getLastName = function (str: string, ifNone: string = '') {
    var arr = str.split(' ');
    if (arr.length === 1) {
        return ifNone || "<None>";
    }
    return arr.slice(-1).join(' ');
}

export const formatDate = (dateString: any) => {
    let yourDate = new Date(dateString);
    yourDate.toISOString().split("T")[0];
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
    return yourDate.toISOString().split("T")[0];
}

