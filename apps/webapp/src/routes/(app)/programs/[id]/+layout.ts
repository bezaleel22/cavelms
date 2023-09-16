import { load_Course, type Course$result } from "$houdini";
import { dataStore } from "$lib/store/query";
import { error } from "@sveltejs/kit";
import { get } from "svelte/store";
import type { OnErrorEvent, LayoutLoad } from "./$houdini";

export const load: LayoutLoad = async (event) => {
  const { id } = event.params;
  const { Course } = await load_Course({ event, variables: { id } });
  const { data } = get(Course);
  const { node } = data as Course$result;

  dataStore.set(node);
  return { Course };
};

export const _houdini_onError = (e: OnErrorEvent) => {
  throw error(e.error.status, e.error.body.message);
};
