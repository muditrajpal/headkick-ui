import axios from "axios";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getCoursesList() {
  let responseData = await axios
    .get(`${BASE_URL}api/course/list`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .catch((err) =>
      console.log("getCoursesList API error while getting data: ", err)
    );

  if (responseData?.data?.sc && responseData.data?.result?.data?.length)
    return responseData.data;
  return;
}

export async function getCoursesDetails(id) {
  if (!id) return;

  let responseData = await axios
    .get(`${BASE_URL}api/course?id=${id}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .catch((err) =>
      console.log("getCoursesDetails API error while getting data: ", err)
    );

  if (responseData?.data?.sc && responseData.data?.result)
    return responseData.data.result;
  return;
}

export async function addCourse(courseDetails) {
  if (!courseDetails || !Object.keys(courseDetails).length) return;
  let responseData = await axios
    .post(`${BASE_URL}api/course`, JSON.stringify(courseDetails), {
      method: "POST",
      headers: {"Content-Type": "application/json"},
    })
    .catch((err) =>
      console.log("addCourse API error while adding data: ", err)
    );

  if (responseData?.data?.sc && responseData.data?.result)
    return responseData.data.result;
  return;
}
