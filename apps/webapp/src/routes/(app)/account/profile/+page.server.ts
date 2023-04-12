import { CreateActivityStore, CreateUserStore, UpdateActivityStore, UpdateUserStore, type UpdateActivityInput, type UpdateUser$input } from '$houdini';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    personal:async ({request}) => {
        const data = Object.fromEntries(await request.formData())

        console.log(data)
        return
    },

    spiritual:async ({request}) => {
        console.log(Object.fromEntries(await request.formData()));
        return
    },
    health:async ({request}) => {
        console.log(Object.fromEntries(await request.formData()));
        return
    }

}