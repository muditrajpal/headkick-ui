import AllCourses from "views/AllCourses";
import MyCourses from "views/MyCourses";
import NewCourse from "views/NewCourse";
import Tutorial from "views/Tutorial";

export default [
  {
    name: "Overview",
    collapse: true,
    views: [
      {
        path: "/my-courses",
        layout: "/online-coaching",
        component: MyCourses,
      },
      {
        path: "/all-courses",
        layout: "/online-coaching",
        component: AllCourses,
      },
      {
        path: "/new-course",
        layout: "/online-coaching",
        component: NewCourse,
      },
      {
        path: "/edit-tutorial",
        layout: "/online-coaching",
        component: Tutorial,
      },
    ],
  },
];
