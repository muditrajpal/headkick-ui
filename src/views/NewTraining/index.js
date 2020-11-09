import React, {Component} from "react";
import NewTrainingComponent from "./NewTraining";

class NewTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  toggleStep = (step) => {
    if (step < 0 || step > 3) return;
    this.setState({step: step});
  };

  render() {
    return (
      <NewTrainingComponent
        step={this.state.step}
        toggleStep={this.toggleStep}
      />
    );
  }
}

export default NewTraining;
