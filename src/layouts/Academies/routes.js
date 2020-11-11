import AcademiesOverview from "views/AcademiesOverview";
import AcademiesPlayersList from "views/AcademiesPlayersList";
import AcademiesPlayerDetails from "views/AcademiesPlayerDetails";
import Teams from "views/Teams";
import MyTraining from "views/MyTraining";
import NewTraining from "views/NewTraining";
import ViewTraining from "views/ViewTraining";

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
      {
        path: "/players/list/select",
        layout: "/academies",
        component: AcademiesPlayerDetails,
      },
    ],
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
    layout: "/academies",
  },
  {
    path: "/training",
    collapse: true,
    name: "Training",
    views: [
      {
        path: "/training",
        layout: "/academies",
        component: MyTraining,
      },
      {
        path: "/training/add-new-training",
        layout: "/academies",
        component: NewTraining,
      },
      {
        path: "/training/view-training",
        layout: "/academies",
        component: ViewTraining,
      },
    ],
  },
];
