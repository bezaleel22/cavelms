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
          name: "Overview",
          badge: undefined,
          url: "/account/overview",
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
          name: "Courses",
          badge: undefined,
          url: "/account/courses",
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
          url: "/account/settings",
          roles: [RoleType.SUPERUSER],
          visible: true,
        },
      ],
    },

    {
      name: "Programs",
      visible: true,
      roles: [RoleType.SUPERUSER],
      links: [
        {
          name: "Program List",
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
          name: "Assignments",
          badge: undefined,
          url: `/programs/${id}/assignments`,
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
          url: "/users/permission",
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
