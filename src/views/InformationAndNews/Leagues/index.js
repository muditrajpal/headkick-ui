import React, {Component} from "react";
import FilterBy from "./FilterBy";
import LeaguesComponent from "./Leagues";

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterByPopUpOpen: false,
    };
  }

  toggleState = (stateName) => {
    if (!stateName) return;
    this.setState({[stateName]: !this.state[stateName]});
  };

  render() {
    return (
      <>
        <LeaguesComponent toggleState={this.toggleState} />
        {this.state.isFilterByPopUpOpen && (
          <FilterBy
            modalName="isFilterByPopUpOpen"
            onCloseAction={this.toggleState}
          />
        )}
      </>
    );
  }
}

export default Leagues;
