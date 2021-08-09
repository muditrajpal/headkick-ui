import React,{useState} from "react";
import {
  Button,
  Table,
  Icon,
  Input,
  Image,
  Segment,
  Grid,
  Label
} from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";
import playerImage from "assets/imgs/player.png";
import history from "historyObj";

const List = () => (
  <div className="contInner">
    <Table padded singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>MATCH</Table.HeaderCell>
          <Table.HeaderCell>TIME</Table.HeaderCell>
          <Table.HeaderCell>PLAYERS</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
          <Table.Row>
            <Table.Cell>
              <span className="sub">Kingborough Lions United FC</span>
              <img src={teamLogo} />
              <span className="vs">01 - 02</span>
              <img src={teamLogo} />
              <span className="sub">Wanderers F.C.</span>
            </Table.Cell>
            <Table.Cell>4:30 PM (IST)</Table.Cell>
            <Table.Cell>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
                <Image src={playerImage} avatar className="playersImg" />
              ))}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);

const List2 = () => (
  <div className="contInner">
    <Table padded singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>STANDINGS</Table.HeaderCell>
          <Table.HeaderCell className="color-blue">MP</Table.HeaderCell>
          <Table.HeaderCell className="color-green">W</Table.HeaderCell>
          <Table.HeaderCell className="color-darkblue">D</Table.HeaderCell>
          <Table.HeaderCell className="color-red">L</Table.HeaderCell>
          <Table.HeaderCell className="color-darkblue">Pts</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
          <Table.Row>
            <Table.Cell>
              1<img src={teamLogo}  className="imagelogoListItem"/>
              Wanderers F.C.
            </Table.Cell>
            <Table.Cell className="color-blue">2</Table.Cell>
            <Table.Cell className="color-green">2</Table.Cell>
            <Table.Cell className="color-yellow">0</Table.Cell>
            <Table.Cell className="color-red">0</Table.Cell>
            <Table.Cell>6</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);

const List3 = () => (
  <div className="contInner">
    <Table padded singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>TOP SCRORES</Table.HeaderCell>
          <Table.HeaderCell>TEAM</Table.HeaderCell>
          <Table.HeaderCell>GOALS</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
          <Table.Row>
            <Table.Cell>
              1<Image src={playerImage} avatar className="imagelogoListItem" />
              Mohammad Salah
            </Table.Cell>
            <Table.Cell className="color-blue">
              <img src={teamLogo} />
            </Table.Cell>
            <Table.Cell>6</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);
function isSelected(path) {
  return window.location.pathname.indexOf(path) > -1;
}

const TournamentManagerPast = () => {
  const [update, setUpdate] = useState(0);

  return (
    <div className="tournamentManagerPastCustomer">
      <div className="listItem">
      <div className="title">
          <span
            className={isSelected("/select-tournament") ? "" : "disabled"}
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
          <Button
            basic
            size="mini"
            color="black"
            onClick={() => history.push("/tournament/guest/matches/list")}
          >
            <Icon name="arrow left" /> Go to tournaments
          </Button>
          <Button.Group basic>
          <Button  icon='caret left' color="black" ></Button>
      <Button>23 Oct</Button>
      <Button>24 Oct</Button>
      <Button>25 Oct</Button>
      <Button>26 Oct</Button>
      <Button>27 Oct</Button>
      <Button>28 Oct</Button>
      <Button >
       29 Sept
      </Button>
    </Button.Group>
          <Input
            icon="search"
            placeholder="Search..."
            className="searchInput"
          />
        </div>

        {List()}
        <div className="contInnerTwo">
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment className="columnItem">{List2()}</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="columnItem">{List3()}</Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TournamentManagerPast;
