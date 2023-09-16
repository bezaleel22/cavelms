import type { Course$result, Courses$result, User$result, Users$result } from "$houdini";
import type { Role, User } from "@prisma/client";
import type { RequestEvent } from "@sveltejs/kit";
import { writable } from "svelte/store";

export const dataStore = writable<Mutable<User$result["node"] | Course$result["node"]>>();
export const dataList =
  writable<Mutable<Courses$result["coursesCollection"] | Users$result["usersCollection"]>>();
