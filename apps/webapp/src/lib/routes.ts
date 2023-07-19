export const routes = [
  {
    name: "Account",
    links: [
      {
        name: "Profile",
        badge: undefined,
        url: "/account",
        roles: [],
      },
    ],
  },

  {
    name: "Courses",
    links: [
      {
        name: "My Courses",
        badge: undefined,
        url: "/courses",
        roles: [],
      },
    ],
  },

  {
    name: "Users",
    links: [
      {
        name: "Users",
        badge: undefined,
        url: "/users",
      },
      {
        name: "Roles",
        badge: undefined,
        url: "/users/roles",
      },
      {
        name: "Permission",
        badge: undefined,
        url: "/users/permission",
      },
    ],
  },
];
