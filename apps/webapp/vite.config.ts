import { sveltekit } from "@sveltejs/kit/vite";
import houdini from "houdini/vite";
import { defineConfig } from "vite";
import { corsAnywherePlugin } from "./cors";

export default defineConfig({
  plugins: [houdini(), corsAnywherePlugin(), sveltekit()],
  server: {},
});
