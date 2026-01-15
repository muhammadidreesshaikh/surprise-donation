// routes/components.js

// routes/icons.js

import Home from "../app/home/index";

// Student route icons (only 6 icons available)

// import studentDashboardActiveIcon from "../assets/icons/dashboard-active.svg";
// import studentDashboardInactiveIcon from "../assets/icons/dashboard-inactive.svg";

const AUTH_ROUTES = [
  {
    id: 1,
    component: null,
    path: "login",
    children: [
      {
        index: true, // 👈 default page
        component: null,
      },
      {
        path: "student",
        component: null,
      },
      {
        path: "parent",
        component: null, // when ready
      },
    ],
  },
  {
    id: 3,
    component: null,
    exact: "exact",
    path: "forgot-password",
  }
];

const STUDENT_ROUTES = [
  {
    id: 1,
    component: <Home />,
    exact: "exact",
    path: "/",
  }
];

export { AUTH_ROUTES, STUDENT_ROUTES };