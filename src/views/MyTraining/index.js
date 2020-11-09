import React, {Component} from "react";
import MyTrainingComponent from "./MyTraining";
import {trainings} from "services/trainings/mock";

class MyTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainings: trainings,
    };
  }

  render() {
    return <MyTrainingComponent trainings={this.state.trainings} />;
  }
}

export default MyTraining;
