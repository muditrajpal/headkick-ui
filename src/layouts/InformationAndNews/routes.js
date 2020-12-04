import News from "views/InformationAndNews/News";
import Leagues from "views/InformationAndNews/Leagues";
import LeagueDetails from "views/InformationAndNews/Leagues/LeagueDetails";


export default [
  {
    collapse: true,
    name: "News",
    views: [
      {
        path: "/news",
        layout: "/information-and-news",
        component: News,
      },
    ],
  },
  {
    name: "Leagues",
    collapse: true,
    views: [
      {
        path: "/leagues",
        layout: "/information-and-news",
        component: Leagues,
      },
      {
        path: "/leagues/details",
        layout: "/information-and-news",
        component: LeagueDetails,
      },
    ],
  },
  {
    collapse: true,
    name: "Teams",
    views: [
      {
        path: "/teams",
        layout: "/information-and-news",
        component: null,
      },
    ],
  },
  {
    collapse: true,
    name: "Blogs",
    views: [
      {
        path: "/blogs",
        layout: "/information-and-news",
        component: null,
      },
    ],
  },
];
