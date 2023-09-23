import { writable } from "svelte/store";
export const fetching = writable<boolean | null>(null);
