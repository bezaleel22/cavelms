import type { RequestEvent } from "@sveltejs/kit";
import { writable } from "svelte/store";

const Authentication = () => {
  const { subscribe, set, update } = writable<AuthUser>({ isFetching: false });
  let authUser: AuthUser;
  const fetchFn = async (path: string, event: RequestEvent, body?: object) => {
    try {
      const url = `http://localhost:8000/auth${path}`;

      update((prev) => ({ ...prev, isFetching: true }));

      const result = await event.fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!result.ok) throw new Error(result.statusText);

      authUser = (await result.json()) as AuthUser;
      update((prev) => ({ ...prev, ...authUser, isFetching: false }));
      return authUser;
    } catch (error: any) {
      console.log({ error: error.message });
      return null;
    }
  };

  return {
    refresh: async (event: RequestEvent) => await fetchFn("/refresh_token", event),
    signin: async (event: RequestEvent, body: object) => await fetchFn("/signin", event, body),
    signup: async (event: RequestEvent, body: object) => await fetchFn("/signup", event, body),
    signout: async (event: RequestEvent, body: object) => await fetchFn("/signout", event, body),

    verifyEmail: async (event: RequestEvent, body: object) =>
      await fetchFn("/verify_email", event, body),
    
    changePassword: async (event: RequestEvent, body: object) =>
      await fetchFn("/change_password", event, body),
    
    resetPassword: async (event: RequestEvent, body: object) =>
      await fetchFn("/reset_password", event, body),
    
    subscribe,
    update,
  };
};

export const auth = Authentication();
