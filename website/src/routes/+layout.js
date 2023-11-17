import { browser } from "$app/environment";

export const prerender = true;
// export const trailingSlash = "always"; 

export async function load({ url }) {
  return {
    isHome: url.pathname === "/",
  };
}
