import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";
import maskGroup from "assets/imgs/maskGroup.png";
import FixtureCalendar from "components/FixtureCalendar";

const Item = () => (
  <div className="item">
    <div className="date">
      <div className="top">
        <div>10</div>
        <div className="sub">Sept</div>
      </div>
    </div>
    <div className="matches">
      <div className="matchItem">
        <span className="sub">Kingborough Lions United FC</span>
        <img src={teamLogo} />
        <span className="vs">VS</span>
        <img src={teamLogo} />
        <span className="sub">Wanderers F.C.</span>
      </div>
      <div className="matchItem">
        <span className="sub">Kingborough Lions United FC</span>
        <img src={teamLogo} />
        <span className="vs-block">
          <span>1</span>
          <span className="dark">2</span>
        </span>
        <img src={teamLogo} />
        <span className="sub">Wanderers F.C.</span>
      </div>
    </div>
  </div>
);


const TournamentFixtures = () => {
  return (
    <div className="tournamentFixtures">
      <div className="innerItem">
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment className="columnItem left">
              <FixtureCalendar />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment className="columnItem right">
              <div className="title">
                <img src={maskGroup} />
                <span>LaLiga</span>
              </div>

              <div className="list">
                <Item />

                <Item />

                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default TournamentFixtures;
