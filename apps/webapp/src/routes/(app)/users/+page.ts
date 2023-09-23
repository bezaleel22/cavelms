import type { Users$result } from "$houdini";
import { dataList } from "$lib/store/data";
import { fetching } from "$lib/store/loader";
import { error } from "@sveltejs/kit";
import type { AfterLoadEvent, BeforeLoadEvent, OnErrorEvent, PageLoad } from "./$houdini";

export function _houdini_beforeLoad({ data }: BeforeLoadEvent) {
  fetching.set(true);
  return {
    d: "coursesCollection",
  };
}

export function _houdini_afterLoad({ data }: AfterLoadEvent) {
  console.log(data);
  const { usersCollection } = data.Users as Users$result;
  dataList.set(usersCollection);
  fetching.set(false);
  return {
    usersCollection,
  };
}

export const _houdini_onError = (e: OnErrorEvent) => {
  throw error(e.error.status, e.error.body.message);
};