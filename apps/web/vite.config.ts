import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  plugins: [
    sveltekit(),
    UnoCSS({
      presets: [
        presetIcons({
          /* options */
        }),
      ],
    }),
  ],
});
