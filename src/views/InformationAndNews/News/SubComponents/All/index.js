import React, {Component} from "react";
import AllComponent from "./All";
import Highlight from "./Highlight";

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewHighlightPopUpOpen: false,
    };
  }

  toggleState = (stateName) => {
    if (!stateName) return;
    this.setState({[stateName]: !this.state[stateName]});
  };

  render() {
    return (
      <>
        <AllComponent toggleState={this.toggleState} />
        {this.state.isViewHighlightPopUpOpen && (
          <Highlight
            modalName="isViewHighlightPopUpOpen"
            onCloseAction={this.toggleState}
          />
        )}
      </>
    );
  }
}

export default All;
