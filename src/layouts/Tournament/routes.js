import TournamentManager from "views/TournamentManager";
import TournamentOverview from "views/TournamentOverview";
import TournamentList from "views/TournamentList";
import ScheduleMatches from "views/ScheduleMatches";


export default [
  {
    path: "/overview",
    name: "Overview",
    component: TournamentOverview,
    layout: "/tournament",
  },
  {
    name: "Matches",
    collapse: true,
    views: [
      {
        path: "/matches/list",
        layout: "/tournament",
        component: TournamentList,
      },
      {
        path: "/matches/select",
        layout: "/tournament",
        component: TournamentManager,
      },
      {
        path: "/matches/schedule",
        layout: "/tournament",
        component: ScheduleMatches,
      },
    ],
  },
];
