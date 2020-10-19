import React from "react";
import { Button, Table, Icon } from "semantic-ui-react";
import CountryImg from "assets/imgs/c.png";
import history from "historyObj";
import AddTeamDetailModal from "components/AddTeamDetailModal";
import GroupDetailModal from "components/GroupDetailModal";
import SendInviteModal from "components/SendInviteModal"
import GroupCreationModal from "components/GroupCreationModal"

const List = () => (
  <Table padded singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>TOURNAMENT</Table.HeaderCell>
        <Table.HeaderCell>COUNTRY</Table.HeaderCell>
        <Table.HeaderCell>NO.OF TEAMS</Table.HeaderCell>
        <Table.HeaderCell>PLAYERS</Table.HeaderCell>
        <Table.HeaderCell>DATE TIME</Table.HeaderCell>
        <Table.HeaderCell>SOCIAL MEDIA</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>FIFA World Cup Trophy</Table.Cell>
        <Table.Cell>
          <img src={CountryImg} />
        </Table.Cell>
        <Table.Cell>20</Table.Cell>
        <Table.Cell>220</Table.Cell>
        <Table.Cell>
          <div>
            <div className="top">04:30 PM</div>
            <div className="sub">03 Sept</div>
          </div>
        </Table.Cell>
        <Table.Cell>
          <Icon name="facebook f" color="facebook" />
          <Icon name="twitter" />
          <Icon name="instagram" />
        </Table.Cell>
        <Table.Cell>
          <Button circular color="blue" icon="angle right" onClick={()=>history.push("/tournament/matches/select?id=123")} />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>FIFA World Cup Trophy</Table.Cell>
        <Table.Cell>
          <img src={CountryImg} />
        </Table.Cell>
        <Table.Cell>20</Table.Cell>
        <Table.Cell>220</Table.Cell>
        <Table.Cell>
          <div>
            <div className="top">04:30 PM</div>
            <div className="sub">03 Sept</div>
          </div>
        </Table.Cell>
        <Table.Cell>
          <Icon name="facebook f" color="facebook" />
          <Icon name="twitter" />
          <Icon name="instagram" />
        </Table.Cell>
        <Table.Cell>
          <Button circular color="blue" icon="angle right"  onClick={()=>history.push("/tournament/matches/select?id=123")} />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>FIFA World Cup Trophy</Table.Cell>
        <Table.Cell>
          <img src={CountryImg} />
        </Table.Cell>
        <Table.Cell>20</Table.Cell>
        <Table.Cell>220</Table.Cell>
        <Table.Cell>
          <div>
            <div className="top">04:30 PM</div>
            <div className="sub">03 Sept</div>
          </div>
        </Table.Cell>
        <Table.Cell>
          <Icon name="facebook f" color="facebook" />
          <Icon name="twitter" />
          <Icon name="instagram" />
        </Table.Cell>
        <Table.Cell>
          <Button circular color="blue" icon="angle right"  onClick={()=>history.push("/tournament/matches/select?id=123")}  />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

const TournamentList = () => {
  return (
    <div className="tournamentList">
      <div className="listItem">
        <div className="title">
          <span>Ongoing Tournaments</span>
        </div>
        {List()}
      </div>
      <div className="listItem">
        <div className="title">
          <span>Upcoming Tournaments</span>
        </div>
        {List()}
      </div>
      {/* <GroupDetailModal /> */}
      {/* <AddTeamDetailModal /> */}
      {/* <SendInviteModal/> */}
{/* <GroupCreationModal/> */}
    </div>
  );
};

export default TournamentList;
