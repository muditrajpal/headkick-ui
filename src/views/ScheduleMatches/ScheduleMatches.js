import React from "react";
import { Table, Form, Divider } from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";

const options = [
  { key: "m", text: "ABC", value: "India" },
  { key: "f", text: "ABC", value: "Nepal" },
  { key: "o", text: "ABC", value: "Bhutan" },
];
const options2 = [
  { key: "m", text: "02/02/2022", value: "India" },
  { key: "f", text: "03/02/2022", value: "Nepal" },
  { key: "o", text: "04/02/2022", value: "Bhutan" },
];
const options3 = [
  { key: "m", text: "12:30 P.M.", value: "India" },
  { key: "f", text: "1:30 P.M.", value: "Nepal" },
  { key: "o", text: "2:30 P.M.", value: "Bhutan" },
];
const ListItem = ({ title }) => (
  <>
    <div className="subTitle">
      <span>{title}</span>
    </div>
    <Table padded singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>MATCH</Table.HeaderCell>
          <Table.HeaderCell>VS</Table.HeaderCell>
          <Table.HeaderCell>DATE</Table.HeaderCell>
          <Table.HeaderCell>TIME</Table.HeaderCell>
          <Table.HeaderCell>REFREE</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Match 1</Table.Cell>
          <Table.Cell>
            <span className="sub">Kingborough Lions United FC</span>
            <img src={teamLogo} />
            <span className="vs">VS</span>
            <img src={teamLogo} />
            <span className="sub">Wanderers F.C.</span>
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options2} placeholder="dd/mm/yy" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options3} placeholder="" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options} placeholder="" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Match 1</Table.Cell>
          <Table.Cell>
            <span className="sub">Kingborough Lions United FC</span>
            <img src={teamLogo} />
            <span className="vs">VS</span>
            <img src={teamLogo} />
            <span className="sub">Wanderers F.C.</span>
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options2} placeholder="dd/mm/yy" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options3} placeholder="" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options} placeholder="" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Match 1</Table.Cell>
          <Table.Cell>
            <span className="sub">Kingborough Lions United FC</span>
            <img src={teamLogo} />
            <span className="vs">VS</span>
            <img src={teamLogo} />
            <span className="sub">Wanderers F.C.</span>
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options2} placeholder="dd/mm/yy" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options3} placeholder="" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options} placeholder="" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Match 1</Table.Cell>
          <Table.Cell>
            <span className="sub">Kingborough Lions United FC</span>
            <img src={teamLogo} />
            <span className="vs">VS</span>
            <img src={teamLogo} />
            <span className="sub">Kingborough Lions United FC</span>
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options2} placeholder="dd/mm/yy" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options3} placeholder="" />
          </Table.Cell>
          <Table.Cell>
            <Form.Select options={options} placeholder="" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);

const ScheduleMatches = () => {
  return (
    <div className="scheduleMatches">
      <div className="innerItem">
        <div className="title">
          <span>Schedule Matches</span>
        </div>
        <ListItem title="Week 1" />
        <Divider />
        <ListItem title="Week 2" />
        <Divider />
        <ListItem title="Week 3" />
      </div>
    </div>
  );
};

export default ScheduleMatches;
