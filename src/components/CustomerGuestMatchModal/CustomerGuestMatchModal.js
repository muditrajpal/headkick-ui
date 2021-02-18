import React, { useState } from "react";
import { Button, Modal, Header, Progress } from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";

function CustomerGuestMatchModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      size="small"
      className="customerGuestMatchModal"
    >
      <Header content="FIFA World Cup" />
      <div className="subHead">24 Sep | 4:30 PM</div>

      <Modal.Content>
        <div className="topCol">
          <div className="item">
            <img src={teamLogo} />
            <div className="team">
              <div>Barcelona FC</div>
              <div className="winLoss">
                <span>W</span>
                <span>W</span>
                <span className="red">L</span>
                <span className="red">L</span>
                <span className="red">L</span>
              </div>
            </div>
          </div>
          <div className="vsTab">VS</div>
          <div className="item">
            <img src={teamLogo} />
            <div className="team">
              <div>Barcelona FC</div>
              <div className="winLoss">
              <span className="red">L</span>
                <span className="red">L</span>
                <span>W</span>
                <span>W</span>
                <span>W</span>
              </div>
            </div>
          </div>
        </div>

        <div className="subHead head">Defense</div>
        <Progress
          percent={42}
          color="black"
          progress
          label={<span style={{ left: "43%" }}>58%</span>}
        ></Progress>
        <div className="subHead head">Mid field</div>
        <Progress
          percent={60}
          color="green"
          progress
          label={<span style={{ left: "61%" }}>40%</span>}
        ></Progress>
        <div className="subHead head">Attack</div>
        <Progress
          percent={50}
          color="yellow"
          progress
          label={<span style={{ left: "51%" }}>50%</span>}
        ></Progress>
      </Modal.Content>
      <Button icon="close" size="mini" color="grey" className="close" />
    </Modal>
  );
}

export default CustomerGuestMatchModal;
