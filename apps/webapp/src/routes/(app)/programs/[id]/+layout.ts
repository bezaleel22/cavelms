import { load_Course, type Course$result } from "$houdini";
import { dataStore } from "$lib/store/data";
import { fetching } from "$lib/store/loader";
import { error } from "@sveltejs/kit";
import type { LayoutLoad, OnErrorEvent } from "./$houdini";

export const load: LayoutLoad = async (event) => {
  const { id } = event.params;
  const { Course } = await load_Course({ event, variables: { id } });
  Course.subscribe((course) => {
    fetching.set(course.fetching);
    if (course.data) {
      const { node } = course.data as Course$result;
      dataStore.set(node);
    }
  });
  return { Course };
};

// export function _houdini_beforeLoad({ data }: BeforeLoadEvent) {
//   console.log("BeforeLoadEvent");
//   fetching.set(true);
//   return {
//     d: "coursesCollection",
//   };
// }

// export function _houdini_afterLoad({ data }: AfterLoadEvent) {
//   console.log("AfterLoadEvent");
//   console.log(data);
//   const { node } = data.Course as Course$result;
//   dataStore.set(node);
//   fetching.set(false);
//   return {
//     node,
//   };
// }

export const _houdini_onError = (e: OnErrorEvent) => {
  throw error(e.error.status, e.error.body.message);
};
