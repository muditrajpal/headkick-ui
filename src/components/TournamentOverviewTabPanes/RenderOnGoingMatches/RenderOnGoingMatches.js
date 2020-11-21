import React from 'react';
import { Grid, Tab, Label, Icon, Select, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './RenderOnGoingMatches.styles.scss';

const RenderOnGoingMatches = ({ dataongoingmatches, leagueOptions }) => {
  const matchOne = dataongoingmatches[0];

  return (
    <Tab.Pane>
      <Grid
        centered
        textAlign="center"
        verticalAlign="middle"
        stackable
        columns={3}
        className="onGoingMatchesCard"
      >
        <Grid.Column>
          <div className="onGoingMatchStatus">
            <Label as="a" color="blue">
              <Icon name="circle" />
              <Label.Detail>{matchOne && matchOne.leagueStatus}</Label.Detail>
            </Label>
          </div>
        </Grid.Column>
        <Grid.Column centered="true" textAlign="center">
          <div className="leagueName">
            <Icon color="yellow" name="trophy"></Icon>
            <p> {matchOne && matchOne.leagueName}</p>
          </div>
        </Grid.Column>
        <Grid.Column centered="true" textAlign="center">
          <Select placeholder="Select League" options={leagueOptions} />
        </Grid.Column>
      </Grid>
      <Divider className="firstDivider" />
      <Grid
        centered
        textAlign="center"
        verticalAlign="middle"
        stackable
        columns={3}
        className="matchScoreBoard"
      >
        <Grid.Column centered="true" textAlign="center">
          <div className="teamOne">
            <div className="imageContainer">
              <img src={matchOne && matchOne.teamOneLogo} alt="" />
            </div>
            <p className="teamName">{matchOne && matchOne.teamOne}</p>
          </div>
        </Grid.Column>
        <Grid.Column centered="true" textAlign="center">
          <div>
            <p className="matchTime">{matchOne && matchOne.matchTime}</p>
            <div className="matchScore">
              <span>{matchOne && matchOne.teamOneGoals}</span> :
              <span>{matchOne && matchOne.teamTwoGoals}</span>
            </div>
            <div className="matchRef">
              <span> Referee </span> :
              <span> {matchOne && matchOne.matchReferee} </span>
            </div>
            <Link
              className="matchTimeLink"
              to={matchOne ? matchOne.matchTimelineLink : '/'}
            >
              Go to Timeline
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column centered="true" textAlign="center">
          <div className="teamTwo">
            <div className="imageContainer">
              <img src={matchOne && matchOne.teamTwoLogo} alt="" />
            </div>
            <p className="teamName">{matchOne && matchOne.teamTwo}</p>
          </div>
        </Grid.Column>
      </Grid>
      <Divider className="secondDivider" />
    </Tab.Pane>
  );
};

export default RenderOnGoingMatches;
