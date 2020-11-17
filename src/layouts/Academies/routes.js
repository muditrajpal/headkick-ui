import AcademiesList from "views/AcademiesList";
import AcademiesPlayersList from "views/AcademiesPlayersList";
import AcademiesPlayerDetails from "views/AcademiesPlayerDetails";
import Teams from "views/Teams";
import MyTraining from "views/MyTraining";
import NewTraining from "views/NewTraining";
import ViewTraining from "views/ViewTraining";
import AcademiesDetails from "views/AcademiesDetails";
import TeamList from "views/TeamList"
import MyCalendar from "views/MyCalendar";
import AcademiesPlayerEdit from "views/AcademiesPlayerEdit";

export default [
  {
    name: "Overview",
    collapse: true,
    views: [
      {
        path: "/list",
        layout: "/academies",
        component: AcademiesList,
      },
      {
        path: "/select",
        layout: "/academies",
        component: AcademiesDetails,
      },
    ],
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
        path: "/players/select",
        layout: "/academies",
        component: AcademiesPlayerDetails,
      },
      {
        path: "/players/select/edit",
        layout: "/academies",
        component: AcademiesPlayerEdit,
      },
    ],
  },
  {
    collapse: true,
    views: [
      {
        path: "/teams/select",
        layout: "/academies",
        component: Teams,
      },
      {
        path: "/teams",
        layout: "/academies",
        component: TeamList,
      },
    ],
    name: "Teams",
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
  {
    collapse: true,
    name: "My Calendar",
    views: [
      {
        path: "/myCalendar",
        layout: "/academies",
        component: MyCalendar,
      },
    ],
  },
];
