import type { Role, User } from "@prisma/client";
import type { RequestEvent } from "@sveltejs/kit";
import { writable } from "svelte/store";

export const user = writable<(User & { role: Role | null }) | null>();
