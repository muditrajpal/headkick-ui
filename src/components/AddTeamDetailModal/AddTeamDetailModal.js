import React, { useState } from "react";
import { Button, Modal, Header, Form, Divider } from "semantic-ui-react";

const options = [
  { key: "m", text: "India", value: "India" },
  { key: "f", text: "Nepal", value: "Nepal" },
  { key: "o", text: "Bhutan", value: "Bhutan" },
];

function AddTeamDetailModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      size="small"
      className="addTeamDetailModal"
    >
      <Header content="Add team details" />
      <div className="subHead">Details</div>
      <Divider />
      <Modal.Content>
        <Form onSubmit={() => setOpen(false)}>
          <Form.Field>
            <label>Tournament Name</label>
            <input placeholder="Enter team name" />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Input fluid label="Upload Logo" type="file" />
            <Form.Select
              fluid
              label="Country"
              options={options}
              placeholder="Choose"
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input fluid label="Name of Team Participating"  />
            <Form.Input fluid label="Start Date" type="date"  />
            <Form.Input fluid label="End Date"  type="date"/>

          </Form.Group>
          <Divider className="actions-divider" />

          <Button
            type="submit"
            className="submit purpleBttn"
            onClick={() => {}}
            positive
          >
            Next: Add Teams
          </Button>
        </Form>
      </Modal.Content>
      <Button icon="close" size="mini" color="teal" className="close" />
    </Modal>
  );
}

export default AddTeamDetailModal;
