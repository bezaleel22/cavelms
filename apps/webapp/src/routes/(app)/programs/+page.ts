import { load_Courses, type Courses$result } from "$houdini";
import { get } from "svelte/store";
import type { AfterLoadEvent, OnErrorEvent, PageLoad } from "./$houdini";
import { dataList, dataStore } from "$lib/store/query";
import { error, redirect } from "@sveltejs/kit";

export const load: PageLoad = async (event) => {
  const { Courses } = await load_Courses({ event });
  const { data } = get(Courses);
  const { coursesCollection } = data as Courses$result;
  
  dataList.set(coursesCollection);
  return { Courses };
};

export function _houdini_afterLoad({ data }: AfterLoadEvent) {
  return {
    message: "Hello I'm",
  };
}

export const _houdini_onError = (e: OnErrorEvent) => {
  throw error(e.error.status, e.error.body.message);
};
