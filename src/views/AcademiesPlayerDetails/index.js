import React, {Component} from "react";
import AcademiesPlayerDetailsComponent from "./AcademiesPlayerDetails";
import {playerDetails} from "services/player/mock";

class AcademiesPlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDetails: playerDetails,
    };
  }

  render() {
    return (
      <AcademiesPlayerDetailsComponent
        playerDetails={this.state.playerDetails}
      />
    );
  }
}
export default AcademiesPlayerDetails;
