import React, {Component} from "react";
import MyCoursesComponent from "./MyCourses";
import {getCoursesList} from "services/course";

class MyCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursesList: [],
    };
  }

  componentDidMount() {
    this.getAllCoursesList();
  }

  getAllCoursesList = async () => {
    const response = await getCoursesList();
    if (response?.result?.data?.length)
      this.setState({coursesList: response.result.data});
  };

  render() {
    return <MyCoursesComponent coursesList={this.state.coursesList} />;
  }
}

export default MyCourses;
