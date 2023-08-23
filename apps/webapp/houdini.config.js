/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "http://localhost:3001/rpc/graphql",
    headers: {
      Authentication(env) {
        return env.AUTH_SECRET;
      },
    },
  },
  plugins: {
    "houdini-svelte": {},
  },
  scalars: {
    Int64: {
      type: "number",
    },
    Datetime: {
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
