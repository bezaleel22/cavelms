// See https://kit.svelte.dev/docs/types#app
import type { PrismaClient, Role, Setting, User } from "@prisma/client";
import { getRoutes, appRoutes } from "$lib/store/routes";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      authUser: (User & { role: Role | null }) | null;
      routes: any;
      settings: Setting[];
    }
    // interface PageData {}
    // interface Platform {}
  }
  var db: PrismaClient;

  type KeyValue = { [k: string]: string };
  type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
  };
}
export {};
