import React from "react";
import { render } from "react-dom";
import { Dimmer,  Segment } from "semantic-ui-react";
import { PropagateLoader } from 'react-spinners';

const showHideBlockUI = () => {
  const loading =window.loadingUrls && window.loadingUrls.length;
  render(
    <Segment className="loadingShowHidiBlockUI">
      <Dimmer active={loading}>
      <PropagateLoader
                    color={'#2B3533'}
                    loading={loading}
                />
      </Dimmer>
    </Segment>,
    document.querySelector("#loading-spinner")
  );
};

export default showHideBlockUI;
