import "./tableView.scss";
import React from "react";
import { Image, Table, Grid, Button, Icon } from "semantic-ui-react";
import messiBigImg from "assets/imgs/messiBigImg.png";

const PlayersList = ({ players, type }) => (
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
        {players.map((player) => (
          <Table.Row>
            <Table.Cell>
              <img src={player.img} />
              <span className="teamName">{player.name}</span>
            </Table.Cell>
            <Table.Cell>{player.playerNo}</Table.Cell>
            <Table.Cell>
              <Button color="blue" icon="angle down" />
            </Table.Cell>
            <Table.Cell>
              <Icon name="bars"></Icon>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);
const TableView = ({ teamDetail }) => {
  return (
    <div className="teamsTableView">
      <Grid columns={2}>
        <Grid.Column>
          <PlayersList
            players={teamDetail.players.filter(
              (player) => player.teamPosition == "PLAYING"
            )}
            type="PLAYING 11"
          />
        </Grid.Column>
        <Grid.Column>
          <Grid columns={1}>
            <Grid.Column>
              <PlayersList
                players={teamDetail.players.filter(
                  (player) => player.teamPosition == "SUBSITUTES"
                )}
                type="SUBSITUTES"
              />
            </Grid.Column>
            <div className="addPlayerBtn">
              <span>+ Add Player</span>
            </div>
            <Grid.Column>
              {" "}
              <PlayersList
                players={teamDetail.players.filter(
                  (player) => player.teamPosition == "RESERVES"
                )}
                type="RESERVES"
              />
            </Grid.Column>
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
