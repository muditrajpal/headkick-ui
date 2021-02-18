import React, {Component} from "react";
import ViewCourseComponent from "./ViewCourse";
import {getCoursesDetails} from "services/course";

class ViewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesDetails: "",
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");
    if (courseId) this.getCoursesDetail(courseId);
  }

  getCoursesDetail = async (courseId) => {
    const response = await getCoursesDetails(courseId);
    if (response?.course) this.setState({coursesDetails: response.course});
  };

  render() {
    console.log(
      "this.state.coursesDetails ====== > ",
      this.state.coursesDetails
    );
    return <ViewCourseComponent coursesDetails={this.state.coursesDetails} />;
  }
}
export default ViewCourse;
