import type { Courses$result, User$result, Users$result } from "$houdini";
import type { Role, User } from "@prisma/client";
import type { RequestEvent } from "@sveltejs/kit";
import { writable } from "svelte/store";



export const dataStore = writable<any>();
