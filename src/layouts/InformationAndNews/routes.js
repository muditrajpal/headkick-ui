import News from "views/InformationAndNews/News";
import Leagues from "views/InformationAndNews/Leagues";

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
    collapse: true,
    name: "Leagues",
    views: [
      {
        path: "/leagues",
        layout: "/information-and-news",
        component: Leagues,
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
