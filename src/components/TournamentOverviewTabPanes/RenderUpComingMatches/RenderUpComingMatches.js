import React from 'react';
import { Divider, Grid, Tab } from 'semantic-ui-react';

import './RenderUpComingMatches.styles.scss';

const RenderUpComingMatches = ({ upcomingmatches }) => {
  return (
    <Tab.Pane>
      {upcomingmatches.length > 0 ? (
        <>
          {upcomingmatches.map((match) => {
            return (
              <div key={match.matchId}>
                <Grid
                  textAlign="left"
                  verticalAlign="middle"
                  stackable
                  columns={5}
                  className="upComingMatchCard"
                >
                  <Grid.Column width={4} textAlign="center">
                    <Grid centered verticalAlign="middle" columns={2}>
                      <Grid.Column centered className="teamOneImg">
                        <img src={match.teamOneIcon} alt="" />
                      </Grid.Column>
                      <Grid.Column width={12} className="teamOneName">
                        <p>{match.teamOne}</p>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <p className="vsDivider">Vs</p>
                  </Grid.Column>
                  <Grid.Column
                    width={4}
                    textAlign="center"
                    className="teamTwoContainer"
                  >
                    <Grid centered verticalAlign="middle" columns={2}>
                      <Grid.Column centered className="teamTwoImg">
                        <img src={match.teamTwoIcon} alt="" />
                      </Grid.Column>
                      <Grid.Column width={13} className="teamTwoName">
                        <p>{match.teamTwo}</p>
                      </Grid.Column>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column centered textAlign="center">
                    <p> {match.matchDate} </p>
                  </Grid.Column>
                  <Grid.Column
                    className="matchTime"
                    centered
                    textAlign="center"
                  >
                    <p> {match.matchTime} </p>
                  </Grid.Column>
                </Grid>
                <Divider className="divider" />
              </div>
            );
          })}
        </>
      ) : (
        <> No Coming matches for now!</>
      )}
    </Tab.Pane>
  );
};

export default RenderUpComingMatches;
