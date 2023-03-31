/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

interface AuthUser {
  id?: string;
  fullName?: string;
  email?: string;
  role?: string;
  username?: string;
  isVerified?: boolean;
  progress?: number;
  token?: string;
  tokenExpiredAt?: number;
  loggedIn?: boolean;
  isAuthenticated?: boolean;
  isFetching?: boolean;
}

declare namespace App {
  // interface Error {}
  interface Locals {
    user: AuthUser | null;
  }
  // interface PageData {}
  // interface Platform {}
}
