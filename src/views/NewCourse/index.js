import React, {Component} from "react";
import NewCourseComponent from "./NewCourse";

class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  toggleStep = (step) => {
    if (!step) return;
    this.setState({step: step});
  };

  render() {
    return (
      <NewCourseComponent state={this.state} toggleStep={this.toggleStep} />
    );
  }
}

export default NewCourse;
