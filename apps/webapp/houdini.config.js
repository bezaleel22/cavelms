/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "http://localhost:3001/rpc/graphql",
    headers: {
      Authentication(env) {
        return `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYmV6bmV0IiwiZW1haWwiOiJiZXpuZXQyMkBnbWFpbC5jb20iLCJpYXQiOjE2OTIwMzgwMzAsImV4cCI6MTY5OTgxNDAzMH0.xFzezuIJaG1wvHc61K176kTWg-1rRsLXb5WOnyupy-w`;
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
