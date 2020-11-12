import "./tableView.scss";
import React from "react";
import { Image, Table,Grid,Button, Icon } from "semantic-ui-react";
import messiBigImg from "assets/imgs/messiBigImg.png"

const PlayersList = (players,type) => (
    <div className="columnItem">
    <Table padded singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>{type}</Table.HeaderCell>
          <Table.HeaderCell>NO.</Table.HeaderCell>
          <Table.HeaderCell>ACTION</Table.HeaderCell>
          <Table.HeaderCell>REORDER</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {players.map(() => (
          <Table.Row>
            <Table.Cell>
              <img src={messiBigImg} />
              <span className="teamName">Wanderers F.C.</span>
            </Table.Cell>
            <Table.Cell>32</Table.Cell>
            <Table.Cell>
            <Button  color="blue" icon="angle down"/>
            </Table.Cell>
            <Table.Cell>
           <Icon name="bars" ></Icon> 
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>
  );
const TableView = (props) => {
  return (
    <div className="teamsTableView">
      <Grid columns={2}>
        <Grid.Column>{PlayersList([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],"PLAYING 11")}</Grid.Column>
        <Grid.Column>
          <Grid columns={1}>
            <Grid.Column>{PlayersList([1, 2, 2, 2],"SUBSITUTES")}</Grid.Column>
            <div className="addPlayerBtn">
            <span>+ Add Player</span>
            </div>
            <Grid.Column>{PlayersList([1, 2, 2],"RESERVES")}</Grid.Column>
            <div className="addPlayerBtn">
            <span>+ Add Player</span>
            </div>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default TableView;
