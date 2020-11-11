import React from 'react';
import { Divider, Grid, Tab, Select } from 'semantic-ui-react';

import './RenderPastMatches.styles.scss';

const RenderPastMatches = ({ pastmatchesdata }) => {
  const { pastMatches, pastMatchesTeamList } = pastmatchesdata;
  const selectedTeamMatch = pastMatches[0].matches;

  return (
    <Tab.Pane>
      <Grid
        centered
        textAlign="center"
        verticalAlign="middle"
        stackable
        columns={3}
        className="pastMatchCard"
      >
        <Grid.Column width={8}>
          <Grid centered verticalAlign="middle" columns={2}>
            <Grid.Column centered className="currentTeam">
              <img src="https://via.placeholder.com/24x24" alt="" />
            </Grid.Column>
            <Grid.Column width={12} className="currentTeamName">
              <p>Barcelona</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={4} centered textAlign="center">
          <Select placeholder="Select Match" options={[]} />
        </Grid.Column>
        <Grid.Column width={4} centered textAlign="center">
          <Select placeholder="Select Team" options={pastMatchesTeamList} />
        </Grid.Column>
      </Grid>
      <Divider className="firstDivider" />
      {selectedTeamMatch.map((match) => {
        return (
          <div key={match.matchId}>
            <Grid
              className="match"
              textAlign="left"
              verticalAlign="middle"
              stackable
              columns={5}
              width={10}
            >
              <Grid.Column
                width={4}
                textAlign="center"
                className="matchDuration"
              >
                {match.matchDuration}
              </Grid.Column>
              <Grid.Column width={4} textAlign="center" className="teamOne">
                <Grid verticalAlign="middle" columns={2} floated="right">
                  <Grid.Column className="right floated teamOneImg">
                    <img src={match.teamOneIcon} alt="" />
                  </Grid.Column>
                  <Grid.Column className="teamOneName">
                    <p>{match.teamOne}</p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column className="matchDivider">
                <p>:</p>
              </Grid.Column>
              <Grid.Column width={4} textAlign="center" className="teamTwo">
                <Grid centered verticalAlign="middle" columns={2}>
                  <Grid.Column centered className="teamTwoImg">
                    <img src={match.teamTwoIcon} alt="" />
                  </Grid.Column>
                  <Grid.Column className="teamTwoName" width={13}>
                    <p>{match.teamTwo} </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column width={2} floated="right" centered>
                <p className="matchResult"></p>
              </Grid.Column>
            </Grid>
            <Divider className="secondDivider" />
          </div>
        );
      })}
    </Tab.Pane>
  );
};

export default RenderPastMatches;
