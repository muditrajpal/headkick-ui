import React, {Component} from "react";
import TutorialComponent from "./Tutorial";
import AddContent from "./AddContent";
import EditTitleAndDetail from "./EditTitleAndDetail";

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddContentPopUpOpen: false,
      isEditTitleAndDetailPopUpOpen: false,
    };
  }

  toggleState = (key) => {
    if (!key) return;
    this.setState({[key]: !this.state[key]});
  };

  render() {
    const {state} = this;
    return (
      <>
        <TutorialComponent toggleState={this.toggleState} />
        {state.isAddContentPopUpOpen && (
          <AddContent
            onCloseAction={this.toggleState}
            modalName="isAddContentPopUpOpen"
          />
        )}
        {state.isEditTitleAndDetailPopUpOpen && (
          <EditTitleAndDetail
            onCloseAction={this.toggleState}
            modalName="isEditTitleAndDetailPopUpOpen"
          />
        )}
      </>
    );
  }
}

export default Tutorial;
