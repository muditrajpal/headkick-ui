import React, { useState } from "react";
import { Button, Modal, Header, Form,Checkbox } from "semantic-ui-react";

function GroupDetailModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      size="small"
      className="groupDetailModal"
    >
      <Header content="Group details" />
      <Modal.Content>
        <Form onSubmit={() => setOpen(false)}>
          <Form.Field>
            <label>Enter no. of groups</label>
            <input placeholder="Type email IDs and hit enter" />
          </Form.Field>
       
                    <Form.Field>
                    <label className="checkboxLabel">Distribution</label>

          <Checkbox
            
            label='Random'
            name='checkboxRadioGroup'
            value='Random'
          />

                    <div className="checkboxBottomText">Have us generate the groups while you sit back and relax</div>
        </Form.Field>
        <Form.Field>
        <Checkbox
            
            label='Self'
            name='checkboxRadioGroup'
            value='Self'
          />
          <div className="checkboxBottomText">Put teams into groups manually</div>
        </Form.Field>
          
        </Form>
      </Modal.Content>
      <Modal.Actions>
      <Button
            className="submit"
            onClick={() =>setOpen(false)}
            basic
            color="black"
          >
          Previous
          </Button>
      <Button
            className="submit purpleBttn"
            onClick={() => {}}
            positive
          >
           Next: Create Group
          </Button>
</Modal.Actions>
      <Button icon="close" size="mini" color="teal" className="close" />
    </Modal>
  );
}

export default GroupDetailModal;
