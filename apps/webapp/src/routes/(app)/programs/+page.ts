import { load_Programs, type Programs$result } from "$houdini";
import { error } from "@sveltejs/kit";
import type { OnErrorEvent, PageLoad } from "./$houdini";
import { dataList } from "$lib/store/data";
import { fetching } from "$lib/store/loader";

export const load: PageLoad = async (event) => {
  const { Programs } = await load_Programs({ event });

  Programs.subscribe((programs) => {
    fetching.set(programs.fetching);
    console.log(programs);
    if (programs.data) {
      const { coursesCollection } = programs.data as Programs$result;
      dataList.set(coursesCollection);
    }
  });
  return { Courses: Programs };
};

// export function _houdini_beforeLoad({ data }: BeforeLoadEvent) {
//   console.log("BeforeLoadEvent");
//   fetching.set(true);
//   return {
//     data: "coursesCollection",
//   };
// }

// export function _houdini_afterLoad({ data }: AfterLoadEvent) {
//   console.log("AfterLoadEvent");
//   console.log(data);
//   const { coursesCollection } = data.Courses as Courses$result;
//   dataList.set(coursesCollection);
//   fetching.set(false);
//   return {
//     data: "coursesCollection",
//   };
// }

export const _houdini_onError = (e: OnErrorEvent) => {
  throw error(e.error.status, e.error.body.message);
};
