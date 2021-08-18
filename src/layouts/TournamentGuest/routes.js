import TournamentOverview from "views/CutomerGuest/TournamentOverview";
import TournamentList from "views/CutomerGuest/TournamentList";
import TournamentManager from "views/CutomerGuest/TournamentManager";
import TournamentManagerUpcoming from "views/CutomerGuest/TournamentManagerUpcoming";
import TournamentManagerPast from "views/CutomerGuest/TournamentManagerPast";
import TournamentPlayersList from "views/CutomerGuest/TournamentPlayersList";
import TournamentPlayersManager from "views/CutomerGuest/TournamentPlayersManager";

export default [
  {
    path: "/overview",
    name: "Overview",
    component: TournamentOverview,
    layout: "/tournament/guest",
  },
  {
    name: "Matches",
    collapse: true,
    views: [
      {
        path: "/matches/list",
        layout: "/tournament/guest",
        component: TournamentList,
      },
      {
        path: "/matches/select-tournament",
        layout: "/tournament/guest",
        component: TournamentManager,
      },
      {
        path: "/matches/select-upcoming",
        layout: "/tournament/guest",
        component: TournamentManagerUpcoming,
      },
      {
        path: "/matches/select-past",
        layout: "/tournament/guest",
        component: TournamentManagerPast,
      },
    ],
  },
  {
    path: "/academies",
    name: "Academies",
    component: TournamentOverview,
    layout: "/tournament/guest",
  },
  {
    collapse: true,
    name: "Players",

    views: [
      {
        path: "/players/list",
        layout: "/tournament/guest",
        component: TournamentPlayersList,
      },
      {
        path: "/players/manage",
        layout: "/tournament/guest",
        component: TournamentPlayersManager,
      },
    ],
  },
  {},
];
