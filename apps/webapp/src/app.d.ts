// See https://kit.svelte.dev/docs/types#app
import type { PrismaClient } from "@prisma/client";
import type { Auth$result } from "$houdini";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      authUser: Auth$result | null;
    }
    // interface PageData {}
    // interface Platform {}
  }
  var db: PrismaClient;
}
export {};
