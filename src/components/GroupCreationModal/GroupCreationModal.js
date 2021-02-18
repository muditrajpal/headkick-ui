import React, { useState } from "react";
import { Button, Modal, Header, Form, Divider, Icon } from "semantic-ui-react";

const options = [
  { key: "m", text: "India", value: "India" },
  { key: "f", text: "Nepal", value: "Nepal" },
  { key: "o", text: "Bhutan", value: "Bhutan" },
];

function GroupCreationModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      size="large"
      className="groupCreationModal"
    >
      <Header content="Add team details" />
      <Modal.Content scrolling>
        <div className="subHead">Select teams for Group A</div>
        <Divider />
        <Form onSubmit={() => setOpen(false)}>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>

          <div className="subHead">Select teams for Group B</div>
          <Divider />

          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select fluid options={options} placeholder="Select team" />
            <Button.Group icon>
              <Button color="grey">
                <Icon name="minus" />
              </Button>
              <Button color="teal">
                <Icon name="plus" />
              </Button>
            </Button.Group>
          </Form.Group>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          className="submit"
          onClick={() => setOpen(false)}
          basic
          color="black"
        >
          Previous
        </Button>
        <Button className="submit purpleBttn" onClick={() => {}} positive>
          Next: Create Group
        </Button>
      </Modal.Actions>
      <Button icon="close" size="mini" color="teal" className="close" />
    </Modal>
  );
}

export default GroupCreationModal;
