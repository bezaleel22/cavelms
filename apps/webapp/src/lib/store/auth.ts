import type { Auth$result } from "$houdini";
import type { RequestEvent } from "@sveltejs/kit";
import { writable } from "svelte/store";

export const user = writable<Auth$result>();
