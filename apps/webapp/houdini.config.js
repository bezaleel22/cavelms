/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  // watchSchema: {
  //   url: "http://localhost:8000/api/query",
  // },
  plugins: {
    "houdini-svelte": {},
  },
  scalars: {
    Int64: {
      type: "number",
    },
    Time: {
      type: "string",
    },
    Upload: {
      type: "File",
    },
    Any: {
      type: "any",
    },
  },
};

export default config
