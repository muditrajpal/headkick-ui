import React, {Component} from "react";
import AcademiesPlayerEdit from "./AcademiesPlayerEdit";

export const editType = {
  ALL: "All",
  UPLOAD_PHOTO: "UPLOAD_PHOTO",
  BIO: "BIO",
  TROPHIES: "TROPHIES",
  SOCIAL: "SOCIAL",
  SKILLS: "SKILLS",
};

class EditPlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDetails: props.playerDetails || null,
      editType: editType.ALL,
    };
  }

  render() {
    return (
      <AcademiesPlayerEdit
        playerDetails={this.state.playerDetails}
        onCloseAction={this.props.onCloseAction}
        modalName={this.props.modalName}
      />
    );
  }
}

export default EditPlayerDetails;
