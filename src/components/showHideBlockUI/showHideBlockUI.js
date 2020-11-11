import React from "react";
import { render } from "react-dom";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const showHideBlockUI = () => {
  render(
    <Segment>
      <Dimmer active={window.loadingUrls && window.loadingUrls.length}>
        <Loader />
      </Dimmer>
    </Segment>,
    document.querySelector("#loading-spinner")
  );
};

export default showHideBlockUI;
