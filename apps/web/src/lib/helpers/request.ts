import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { print } from "graphql";
import gql from "graphql-tag";
import { get } from "svelte/store";
import { goto } from "$app/navigation";

interface UserStore {
  user: any;
  users: [];
}

const baseURL = import.meta.env.PROD
  ? "https://api.adullam.ng/query"
  : "http://localhost:8000/api/query";
// console.log(baseURL)
export const axiosPublic = axios.create({
  // baseURL: 'http://localhost:8000/query',
  baseURL: baseURL,
  timeout: 60000,
  withCredentials: true,
});

const instance = axios.create({
  // baseURL: 'http://localhost:8000/query',
  baseURL: baseURL,
  timeout: 60000,
  withCredentials: true,
});

// instance.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     const { cred } = get(auth);
//     // console.log(cred);

//     if (!cred?token) throw new Error("No Authorization token");

//     config.headers = config.headers ?? {};
//     config.headers.Authorization =
//       config.headers.Authorization ?? `Bearer ${cred.token}`;

//     return config;
//   },
//   (error: any) => {console.log(error)}
// );

// instance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     const err = response?.data?.data?.errors;

//     if (err && err?.message == "Token is expired") {
//       console.log(err?.message);
//     }

//     return response;
//   },
//   (error: any) => {console.log(error)}
// );

export const upload = async (path: string, formData: any) => {
  try {
    const resp = await instance.post("", formData);
    if (!resp) return;
    const err = resp?.data?.errors;

    if (err) {
      console.error(err);
      return;
    }
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const request = async (
  path: string,
  query: string,
  variables: object
) => {
  try {
    const resp = await instance.post("", {
      query: query,
      variables: variables,
    });
    if (!resp) return;

    const data = resp?.data?.data;
    const err = resp?.data?.errors;

    if (err) {
      console.error(err);
      return;
    }

    if (path === "user" || path === "users") {
      // console.log(path)
      userData.set({ [path]: data[path] } as UserStore);
      return resp.data;
    }
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const publicRequest = async (query: string, variables: object) => {
  try {
    const resp = await axiosPublic.post("", {
      query: query,
      variables: variables,
    });
    const data = resp.data?.data;
    const err = resp.data?.errors;

    if (data?.refresh) {
      auth.set({ loggedIn: true, cred: data?.refresh });
    }

    if (data?.signIn) {
      auth.set({ loggedIn: true, cred: data?.signIn });
      return resp.data;
    }

    if (data?.logOut) {
      auth.set({ loggedIn: data?.logOut?.loggedIn, cred: {} });
      goto("/login", { replaceState: true });
    }

    if (data?.verifyEmail) {
      auth.set({ loggedIn: true, cred: data?.verifyEmail });
      return resp.data;
    }

    if (err && err[0].message === "http: named cookie not present") {
      goto("/login", { replaceState: true });
    }

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};
