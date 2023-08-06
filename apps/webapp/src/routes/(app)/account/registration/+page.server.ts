import {
  MediaStore,
  QualificationStore,
  RefereeStore,
  UpdateUserStore,
  type CreateFileInput,
  type CreatMediaInput,
  type NewQualification,
  type NewReferee,
} from "$houdini";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { mkdirSync, writeFileSync } from "fs";

export const load = (async ({ locals }) => {
  if (!locals?.authUser?.auth?.isAuthenticated) {
    throw redirect(302, "/login");
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  register: async (event) => {
    const userId = event.locals?.authUser?.auth?.id as string;
    const formdata = await event.request.formData();
    const data = Object.fromEntries(formdata);
    const { $storable, $qualification, $document, $ref1, $ref2 } = JSON.parse(
      data.jsonData as string
    );
    const photo = formdata.get("photo") as File;
    const doc = formdata.get("doc") as File;

    try {
      if (photo.size) {
        const ab = await photo.arrayBuffer();
        const dir = `static/uploads`;
        mkdirSync(dir, { recursive: true });
        writeFileSync(`${dir}/${photo.name}`, Buffer.from(ab));
        $storable.avatarUrl = `/${dir}/${photo.name}`;
      }

      if (doc.size) {
        const ab = await doc.arrayBuffer();
        const dir = `static/uploads`;
        mkdirSync(dir, { recursive: true });
        writeFileSync(`${dir}/${doc.name}`, Buffer.from(ab));

        const mediaInput = {
          userId,
          category: "REGISTER",
          title: $document.title,
          description: $document.description,
          file: {
            name: doc.name,
            mimeType: doc.type,
            size: doc.size,
            url: `/${dir}/${doc.name}`,
          },
          mediaType: "OTHERS",
        } as CreatMediaInput;

        const media = new MediaStore();
        const { errors } = await media.mutate({ input: mediaInput }, { event });
        if (errors?.length) return fail(400, { errors });
      }

      const user = new UpdateUserStore();
      let response = await user.mutate({ input: { ...$storable }, userId }, { event });
      if (response.errors?.length) return fail(400, { errors: response.errors });

      let input = $ref1 as NewReferee;
      const referee = new RefereeStore();
      let resp = await referee.mutate({ input, userId }, { event });
      if (resp.errors?.length) return fail(400, { errors: resp.errors });

      input = $ref2 as NewReferee;
      resp = await referee.mutate({ input, userId }, { event });
      if (resp.errors?.length) return fail(400, { errors: resp.errors });

      let qualify = $qualification as NewQualification;
      const qulification = new QualificationStore();
      const { data, errors } = await qulification.mutate({ input: qualify, userId }, { event });
      if (errors?.length) return fail(400, { errors });

      return { data };
    } catch (error: any) {
      return fail(400, { error: error.message });
    }
  },

  qulification: async (event) => {
    const userId = event.locals?.authUser?.auth?.id as string;
    const input = Object.fromEntries(await event.request.formData()) as NewQualification;
    try {
      const qulification = new QualificationStore();
      const { data, errors } = await qulification.mutate({ input, userId }, { event });
      if (errors?.length) return fail(400, { errors });

      return { data };
    } catch (error: any) {
      return fail(400, { error: error.message });
    }
  },

  document: async (event) => {
    const formdata = await event.request.formData();
    const { category, title } = Object.fromEntries(formdata);
    const userId = event.locals?.authUser?.auth?.id;
    const fileData = formdata.get("file") as File;

    try {
      const ab = await fileData.arrayBuffer();

      const { name, type, size } = fileData;
      const dir = `static/uploads`;
      mkdirSync(dir, { recursive: true });
      writeFileSync(`${dir}/${name}`, Buffer.from(ab));

      const file: CreateFileInput = { name, mimeType: type, size, url: `/${dir}/${name}` };
      const input = { category, userId, title, file, mediaType: "OTHERS" } as CreatMediaInput;
      const media = new MediaStore();
      const { data, errors } = await media.mutate({ input }, { event });
      if (errors?.length) return fail(400, { errors });

      return { ...data?.createMedia };
    } catch (error: any) {
      return fail(400, { error: error.message });
    }
  },
};
