import { RoleType } from "$houdini";
import { writable } from "svelte/store";

export const routes = writable<any[]>();

export const RBAC = (opts: { routId: string; role: string; path: string }) => {
  const id = opts.routId;
  let appRoutes: any = [
    {
      name: "Account",
      visible: true,
      roles: [RoleType.PROSPECTIVE, RoleType.SUPERUSER],
      links: [
        {
          name: "My Courses",
          badge: undefined,
          url: "/account/courses",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
        {
          name: "Profile",
          badge: undefined,
          url: "/account/profile",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
        {
          name: "Activity",
          badge: undefined,
          url: "/account/activity",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
        {
          name: "Documents",
          badge: undefined,
          url: "/account/documents",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
        {
          name: "Registration",
          badge: undefined,
          url: "/account/registration",
          roles: [RoleType.PROSPECTIVE, RoleType.SUPERUSER],
          visible: true,
        },
        {
          name: "Settings",
          badge: undefined,
          url: "/account/preference",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
      ],
    },

    {
      name: "Course Management",
      visible: true,
      roles: [RoleType.SUPERUSER],
      links: [
        {
          name: "Course List",
          badge: undefined,
          url: "/programs",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
        {
          name: "Overview",
          badge: undefined,
          url: `/programs/${id}/overview`,
          roles: [RoleType.SUPERUSER],
          visible: !!id,
        },
        {
          name: "Videos",
          badge: undefined,
          url: `/programs/${id}/videos`,
          roles: [RoleType.SUPERUSER],
          visible: !!id,
        },
        {
          name: "Quizes",
          badge: undefined,
          url: `/programs/${id}/quizzes`,
          roles: [RoleType.SUPERUSER],
          visible: !!id,
        },
        {
          name: "Exercise",
          badge: undefined,
          url: `/programs/${id}/exercise`,
          roles: [RoleType.SUPERUSER],
          visible: !!id,
        },
        {
          name: "Activities ",
          badge: undefined,
          url: `/programs/${id}/activities`,
          roles: [RoleType.SUPERUSER],
        },
        {
          name: "Documents",
          badge: undefined,
          url: `/programs/${id}/documents`,
          roles: [RoleType.SUPERUSER],
          visible: !!id,
        },
      ],
    },

    {
      name: "Users",
      roles: [RoleType.SUPERUSER],
      links: [
        {
          name: "User List",
          badge: undefined,
          url: "/users",
          visible: true,
          roles: [RoleType.SUPERUSER],
        },
      ],
    },

    {
      name: "Acces Control",
      roles: [RoleType.SUPERUSER],
      links: [
        {
          name: "Roles",
          badge: undefined,
          url: "/users/roles",
          visible: true,
          roles: [RoleType.SUPERUSER],
        },
        {
          name: "Permission",
          badge: undefined,
          url: "/users/permission",
          visible: true,
          roles: [RoleType.SUPERUSER],
        },
      ],
    },
  ];

  appRoutes = appRoutes
    .filter((route: any) => route.roles?.includes(opts.role as never))
    .map((route: any) => {
      route.links = route.links.filter((link: any) => link.roles.includes(opts.role as never));
      return route;
    });

  const granted = !!appRoutes
    .filter((route: any) => route.roles?.includes(opts.role as never))
    .find((route: any) => {
      const links = route.links
        .filter((link: any) => link.roles.includes(opts.role as never))
        .find((link: any) => link.url === opts.path);
      return links;
    });

  return { granted, routes: appRoutes };
};

type KeyArray = { [k: string]: any[] };

export const computeMenus = (modules: any) => {
  let menus: KeyArray = {};
  let temp: string[] = [];
  Object.keys(modules)
    .filter((path) => path.split("/").includes("+page.svelte"))
    .reduce((prev, cur) => {
      let pathname = cur.split(")").pop() as string;
      pathname = pathname.replace("+page.svelte", "").replace(/\/+$/, "");
      let key = pathname?.split("/")[1];
      if (prev == key) {
        temp.push(pathname as never);
        const links = temp
          .filter((a) => a.split("/").includes(key as string))
          .map((link) => {
            return { url: link };
          });
        menus[key] = links;
      }
      return key;
    }, "");

  const m = Object.values(menus).map((link) => {
    return { name: "", links: link };
  });

  return { m };
};
