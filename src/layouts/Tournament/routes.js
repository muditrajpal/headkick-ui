import TournamentManager from "views/TournamentManager";
import TournamentOverview from "views/TournamentOverview";
export default [
  {
    path: "/overview",
    name: "Overview",
    component: TournamentOverview,
    layout: "/tournament",
  },
  {
    path: "/manage",
    name: "Matches",
    component: TournamentManager,
    layout: "/tournament",
  },
];
