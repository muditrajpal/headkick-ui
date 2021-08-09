import React,{useState} from "react";
import { Button, Table, Icon, Input } from "semantic-ui-react";
import CountryImg from "assets/imgs/c.png";
import history from "historyObj";
import CustomerGuestMatchModal from "components/CustomerGuestMatchModal";

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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
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
          <Button
            circular
            color="blue"
            icon="angle right"
            onClick={() =>
              history.push("/tournament/guest/matches/select-tournament?id=123")
            }
          />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
function isSelected(path) {
  return window.location.pathname.indexOf(path) > -1;
}

const TournamentList = () => {
  const [update, setUpdate] = useState(0);

  return (
    <div className="tournamentListCustomer">
      <div className="listItem">
        <div className="title">
          <span
            className={isSelected("/matches/list") ? "" : "disabled"}
            onClick={() => {
              history.push("/tournament/guest/matches/select-tournament");
              setUpdate((v) => v + 1);
            }}
          >
            Ongoing Tournaments
          </span>
          <span
            className={!isSelected("/select-upcoming") && "disabled"}
            onClick={() => {
              history.push("/tournament/guest/matches/select-upcoming");
              setUpdate((v) => v + 1);
            }}
          >
            Upcoming matches
          </span>
          <span
            className={!isSelected("/select-past") && "disabled"}
            onClick={() => {
              history.push("/tournament/guest/matches/select-past");
              setUpdate((v) => v + 1);
            }}
          >
            Past matches
          </span>
        </div>
        <div className="title2">
          Tournaments happening around the world
          <Input
            icon="search"
            placeholder="Search..."
            className="searchInput"
          />
        </div>
        {List()}
      </div>
      <CustomerGuestMatchModal />
    </div>
  );
};

export default TournamentList;
