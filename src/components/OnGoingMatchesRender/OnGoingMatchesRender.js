import React from 'react';
import {
  Grid,
  Segment,
  Tab,
  Label,
  Icon,
  Select,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const OnGoingMatchesRender = (onGoingMatches, leagueOptions) => {
  const matchOne = onGoingMatches[0];
  return (
    <Tab.Pane>
      <Grid
        centered
        textAlign="center"
        verticalAlign="middle"
        stackable
        columns={3}
        style={{ padding: '2rem 0 1rem 0' }}
      >
        <Grid.Column>
          <div style={{ marginLeft: '30px' }}>
            <Label as="a" color="blue">
              <Icon name="circle" />
              <Label.Detail>{matchOne && matchOne.leagueStatus}</Label.Detail>
            </Label>
          </div>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Icon color="yellow" name="trophy"></Icon>
            <p> {matchOne && matchOne.leagueName}</p>
          </div>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <Select placeholder="Select League" options={leagueOptions} />
        </Grid.Column>
      </Grid>
      <Divider
        style={{
          width: '95%',
          margin: 'auto',
          backgroundColor: 'rgba(13, 23, 87, 0.2)',
          marginBottom: '1rem',
        }}
      />
      <Grid
        centered
        textAlign="center"
        verticalAlign="middle"
        stackable
        columns={3}
      >
        <Grid.Column centered textAlign="center">
          <div className="teamOne">
            <div className="imageContainer">
              <img
                src={matchOne && matchOne.teamOneLogo}
                style={{ borderRadius: '50px', margin: 'auto' }}
                alt=""
              />
            </div>
            <p style={{ fontSize: '18px', fontWeight: '700' }}>
              {matchOne && matchOne.teamOne}
            </p>
          </div>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
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
              to={matchOne && matchOne.matchTimelineLink}
            >
              Go to Timeline
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column centered textAlign="center">
          <div className="teamTwo">
            <div className="imageContainer">
              <img
                src={matchOne && matchOne.teamTwoLogo}
                style={{ borderRadius: '50px', margin: 'auto' }}
                alt=""
              />
            </div>
            <p style={{ fontSize: '18px', fontWeight: '700' }}>
              {matchOne && matchOne.teamTwo}
            </p>
          </div>
        </Grid.Column>
      </Grid>
      <Divider
        style={{
          width: '95%',
          margin: '3rem auto 0 auto',
          backgroundColor: '#F6F7FE',
        }}
      />
    </Tab.Pane>
  );
};

export default OnGoingMatchesRender;
