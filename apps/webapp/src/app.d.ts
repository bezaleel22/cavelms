// See https://kit.svelte.dev/docs/types#app

import type { User, User$input, User$result } from "$houdini";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      auth: AuthUser | null;
    }

    // interface PageData {}
    // interface Platform {}
  }

  interface AuthUser {
    id?: string;
    fullName?: string;
    email?: string;
    role?: string;
    username?: string;
    isVerified?: boolean;
    progress?: number;
    accessToken?: string;
    refreshToken?: string;
    tokenExpiredAt?: number;
    loggedIn?: boolean;
    isAuthenticated?: boolean;
    isFetching?: boolean;
  }
}

export {};
