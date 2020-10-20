import AcademiesOverview from "views/AcademiesOverview"
import AcademiesPlayersList from "views/AcademiesPlayersList";

export default [
  {
    path: "/overview",
    name: "Overview",
    component: AcademiesOverview,
    layout: "/academies",
  },
  {
    name: "Players",
    collapse: true,
    views: [
      {
        path: "/players/list",
        layout: "/academies",
        component: AcademiesPlayersList,
      },
    ],
  },
];
