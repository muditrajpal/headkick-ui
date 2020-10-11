import TournamentManager from "views/TournamentManager";
import TournamentOverview from "views/TournamentOverview";
import TournamentList from "views/TournamentList";

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
    ],
  },
];
