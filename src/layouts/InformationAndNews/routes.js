import News from "views/InformationAndNews/News";
import Leagues from "views/InformationAndNews/Leagues";
import LeagueDetails from "views/InformationAndNews/Leagues/LeagueDetails";
import Teams from "views/InformationAndNews/Teams";
import Blogs from "views/InformationAndNews/Blogs";
import BlogDetails from "views/InformationAndNews/Blogs/BlogDetails"
import FeaturedBlogDetails from "views/InformationAndNews/Blogs/FeaturedBlogDetails"

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
        component: Teams,
      },
    ],
  },
  {
    name: "Blogs",
    collapse: true,
    views: [
      {
        path: "/blogs",
        layout: "/information-and-news",
        component: Blogs,
      },
      {
        path: "/blogs/details",
        layout: "/information-and-news",
        component: BlogDetails,
      },
      {
        path: "/blogs/featured/details",
        layout: "/information-and-news",
        component: FeaturedBlogDetails,
      },
    ],
  },
];
