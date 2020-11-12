
import React from "react";
import { Button, Table, Icon, Input ,Dropdown} from "semantic-ui-react";
import CountryImg from "assets/imgs/c.png";
import history from "historyObj";

const List = () => (
  <Table padded singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>NAME</Table.HeaderCell>
        <Table.HeaderCell>DATE CREATED</Table.HeaderCell>
        <Table.HeaderCell>NATIONALITY</Table.HeaderCell>
        <Table.HeaderCell>MATCHES</Table.HeaderCell>
        <Table.HeaderCell>AVERAGE AGE</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {[1,2,3,4,5,6,7,8,9,10,8,9,10,8,9,10].map(()=>(
    <Table.Row>
        <Table.Cell>AFC Academy</Table.Cell>
        <Table.Cell>
        2 Sept 2020
        </Table.Cell>
        <Table.Cell> <img src={CountryImg} /></Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>
         34
        </Table.Cell>
        <Table.Cell>
          <Button circular color="blue" icon="angle right" onClick={()=>history.push("/academy/select?id=123")} />
        </Table.Cell>
      </Table.Row>
      ))}
      
    </Table.Body>
  </Table>
);

const AcademiesList = () => {
  return (
    <div className="academiesListComponent">
      <div className="listItem">
        <div className="title2">
        <span className="filter">Filter</span>
        <Dropdown text='Sort'>
    <Dropdown.Menu>
      <Dropdown.Item text='A' />
      <Dropdown.Item text='B' description='ctrl + o' />
      <Dropdown.Item text='C' description='ctrl + s' />
    </Dropdown.Menu>
  </Dropdown>
          <Input icon='search' placeholder='Search...' className="searchInput"/>
        </div>
<div className="table-component">
        {List()}
        </div>
      </div>
    </div>
  );
};

export default AcademiesList;
