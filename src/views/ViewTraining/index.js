import React, {Component} from "react";
import ViewTrainingComponent from "./ViewTraining";
import EditDrills from "./EditDrills";

class ViewTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditDrillPopUpOpen: false,
    };
  }

  toggleStateBoolean = (stateName) => {
    if (!stateName) return;
    this.setState({[stateName]: !this.state[stateName]});
  };

  render() {
    return (
      <>
        <ViewTrainingComponent toggleStateBoolean={this.toggleStateBoolean} />
        {this.state.isEditDrillPopUpOpen && (
          <EditDrills
            onCloseAction={this.toggleStateBoolean}
            modalName={"isEditDrillPopUpOpen"}
          />
        )}
      </>
    );
  }
}

export default ViewTraining;
