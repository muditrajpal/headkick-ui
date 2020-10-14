import React, { useState } from "react";
import { Button, Modal, Header, Form } from "semantic-ui-react";

function SendInviteModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      size="small"
      className="sendInviteModal"
    >
      <Header content="Send invite to team managers" />
      <Modal.Content>
        <Form onSubmit={() => setOpen(false)}>
          <Form.Field>
            <label>Type Email IDs</label>
            <input placeholder="Type email IDs and hit enter" />
          </Form.Field>
          <Form.Field>
            <Form.TextArea placeholder="Type message..." />{" "}
          </Form.Field>

          <Button
            type="submit"
            className="submit purpleBttn"
            onClick={() => {}}
            positive
          >
            Send Invites
          </Button>
        </Form>
      </Modal.Content>
      <Button icon="close" size="mini" color="teal" className="close" />
    </Modal>
  );
}

export default SendInviteModal;
