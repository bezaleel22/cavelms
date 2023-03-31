import { writable } from "svelte/store";
import messages from "$lib/lang/en.json";

export const userData = writable({ user: {}, users: [] });
export const _ = writable(messages);