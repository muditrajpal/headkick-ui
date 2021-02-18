import React, {Component} from "react";
import NewCourseComponent from "./NewCourse";

class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 2,
      courseDetails: {
        title: "",
        description: "",
        logo: "",
      },
      content: [],
    };
  }

  handleCourseDetailsChange = (event) => {
    let courseDetails = {...this.state.courseDetails};
    courseDetails[event?.target?.name] = event?.target?.value;
    this.setState({courseDetails: courseDetails});
  };

  addContent = (type) => {
    console.log("addContent called ::: ", type);
    if (type !== "Text" && type !== "Video") return;
    let content = [...this.state.content];
    content.push({
      type,
      title: "",
      description: "",
    });
    this.setState({content: content});
  };

  removeContent = (index) => {
    if (index < 0) return;
    let content = [...this.state.content];
    content.splice(index, 1);
    this.setState({content: content});
  };

  handleContentChange = (index, key, value) => {
    let content = [...this.state.content];
    content[index][key] = value;
    this.setState({content: content});
  };

  toggleStep = (step) => {
    if (!step) return;
    this.setState({step: step});
  };

  render() {
    return (
      <NewCourseComponent
        state={this.state}
        toggleStep={this.toggleStep}
        handleCourseDetailsChange={this.handleCourseDetailsChange}
        addContent={this.addContent}
        removeContent={this.removeContent}
        handleContentChange={this.handleContentChange}
      />
    );
  }
}

export default NewCourse;
