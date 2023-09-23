import { load_Courses, type Courses$result } from "$houdini";
import { error } from "@sveltejs/kit";
import { dataList } from "$lib/store/data";
import { fetching } from "$lib/store/loader";
import type { OnErrorEvent, PageLoad } from "./$houdini";

export const load: PageLoad = async (event) => {
  const { Courses } = await load_Courses({ event });

  Courses.subscribe((courses) => {
    fetching.set(courses.fetching);
    console.log(courses);
    if (courses.data) {
      const { coursesCollection } = courses.data as Courses$result;
      dataList.set(coursesCollection);
    }
  });
  return { Courses };
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
