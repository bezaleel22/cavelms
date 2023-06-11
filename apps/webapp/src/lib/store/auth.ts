import { writable } from "svelte/store";

const Authentication = () => {
  const { subscribe, set, update } = writable<AuthUser>({ isFetching: false });
  let authUser: AuthUser;
  const fetchFn = async (path: string, body?: object) => {
    try {
      const url = `http://localhost:8000/auth${path}`;
      update((prev) => ({ ...prev, isFetching: true }));
      const result = await fetch(url, {
        method: "POST",
        credentials: "include",
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
    refresh: async () => await fetchFn("/refresh_token"),
    signin: async (body: object) => await fetchFn("/signin", body),
    signup: async (body: object) => await fetchFn("/signup", body),
    signout: async (body: object) => await fetchFn("/signout", body),
    verifyEmail: async (body: object) => await fetchFn("/verify_email", body),
    changePassword: async (body: object) => await fetchFn("/change_password", body),
    resetPassword: async (body: object) => await fetchFn("/reset_password", body),
    subscribe,
    update,
  };
};

export const auth = Authentication();
