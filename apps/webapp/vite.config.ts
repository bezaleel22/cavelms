import { sveltekit } from "@sveltejs/kit/vite";
import houdini from "houdini/vite";
import { defineConfig } from "vite";
import { corsAnywherePlugin } from "./cors";
import presetIcons from "@unocss/preset-icons";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    houdini(),
    corsAnywherePlugin(),
    sveltekit(),
    UnoCSS({
      presets: [
        presetIcons({
          /* options */
        }),
      ],
    }),
  ],
  server: {},
});
