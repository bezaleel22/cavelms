import type { User$result, Users$result } from "$houdini";
import type { Role, User } from "@prisma/client";
import type { RequestEvent } from "@sveltejs/kit";
import { writable } from "svelte/store";

type QueryResults = Mutable<Users$result["usersCollection"]>;

export const dataStore = writable<QueryResults>();
