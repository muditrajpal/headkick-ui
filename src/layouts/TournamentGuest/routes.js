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
        path: "/matches/select",
        layout: "/tournament/guest",
        component: TournamentManager,
      },
      {
        path: "/matches/select-upcomming",
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
    path: "/players/list",
    name: "Players",
    component: TournamentPlayersList,
    layout: "/tournament/guest",
  },
  {
    path: "/players",
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
      }
    ],
  },
  {
   
  },
  {
   
  },
];
