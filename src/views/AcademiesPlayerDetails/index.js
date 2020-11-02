import React, {Component} from "react";
import AcademiesPlayerDetailsComponent from "./AcademiesPlayerDetails";
import {playerDetails} from "services/player/mock";
import EditPlayerDetails from "shared/components/EditPlayerDetails";

class AcademiesPlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDetails: playerDetails,
      isEditPlayerDetailsModalOpen: false,
    };
  }

  toggleStateBoolean = (keyName) => {
    if (!keyName) return;
    this.setState({[keyName]: !this.state[keyName]});
  };

  render() {
    return (
      <>
        <AcademiesPlayerDetailsComponent
          playerDetails={this.state.playerDetails}
          toggleStateBoolean={this.toggleStateBoolean}
        />

        {this.state.isEditPlayerDetailsModalOpen && (
          <EditPlayerDetails
            modalName="isEditPlayerDetailsModalOpen"
            playerDetails={this.state.playerDetails}
            onCloseAction={this.toggleStateBoolean}
          />
        )}
      </>
    );
  }
}
export default AcademiesPlayerDetails;
