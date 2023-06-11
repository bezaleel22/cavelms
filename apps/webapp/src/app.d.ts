// See https://kit.svelte.dev/docs/types#app

import type { AuthUser } from "$lib/store/authentication";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: AuthUser
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
