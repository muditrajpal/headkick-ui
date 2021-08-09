import React from "react";
import { Grid, List, Image, Card, Button, Icon } from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";
import history from "historyObj";

const TournamentManager = () => {
  const item = (
    <Grid.Column>
      <Card>
        <List
          divided
          selection
          verticalAlign="middle"
          onClick={() => history.push("/tournament/matches/schedule")}
        >
          <List.Item className="title">
            <List.Content>
              <List.Header>Group A</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image src={teamLogo} />
            <List.Content>
              <List.Header>Wanderers F.C.</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image src={teamLogo} />
            <List.Content>
              <List.Header>Wanderers F.C.</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image src={teamLogo} />
            <List.Content>
              <List.Header>Wanderers F.C.</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image src={teamLogo} />
            <List.Content>
              <List.Header>Wanderers F.C.</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Card>
    </Grid.Column>
  );
  return (
    <div className="tournamentManager">
      <div className="innerContainer">
        <Grid container>
          <Button
            basic
            size="mini"
            color="black"
            onClick={() => history.push("/tournament/matches/list")}
          >
            <Icon name="arrow left" /> Go Back
          </Button>
        </Grid>
        <div className="inner2Container">
          <Grid container columns={4}>
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
            {item}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TournamentManager;
