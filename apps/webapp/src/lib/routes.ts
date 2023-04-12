export const routes = [
  {
    name: "Account Management",
    links: [
      // {
      //   name: "Profile",
      //   badge: undefined,
      //   url: "/account/profile",
      //   roles: [],
      // },
      {
        name: "Potfolio",
        badge: undefined,
        url: "/account/potfolio",
        roles: [],
      },
    ],
  },

  {
    name: "Course Management",
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
    name: "User Management",
    links: [
      {
        name: "Students",
        badge: undefined,
        url: "/users/students",
      },
      {
        name: "Faculty",
        badge: undefined,
        url: "/users/faculty",
      },
      {
        name: "Prospectives",
        badge: undefined,
        url: "/users/prospectives",
      },
    ],
  },
  {
    name: "Settings",
    links: [
      {
        name: "School Settings",
        badge: undefined,
        url: "/settings",
      },
      {
        name: "Permission",
        badge: undefined,
        url: "/settings",
      },
    ],
  },
];
