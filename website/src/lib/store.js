import { browser } from "$app/environment";
import { writable } from "svelte/store";

const mobile = browser
  ? Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1
  : null;

export const isMobile = writable(mobile);
export const loading = writable(true);
