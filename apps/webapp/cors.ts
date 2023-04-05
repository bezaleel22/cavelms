import corsAnywhere from "cors-anywhere";

export function corsAnywherePlugin() {
  const server = corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
  });

  server.listen(8888, () => {
    console.log("CORS server running on port 8888");
  });

  return {
    name: "cors-anywhere-plugin",
  };
}
