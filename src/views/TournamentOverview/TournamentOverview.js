import React, { useState, useEffect } from 'react';
import { Grid, Segment, Tab } from 'semantic-ui-react';

// internal imports
import BlogSection from './../../components/BlogSection/BlogSection';
import { TournamentOverviewContainer } from './TournamentOverview.styles';
import {
  onGoingMatchDummyData,
  leagueOptions,
  blogData,
  overviewVideoInfo,
} from './dummyData';
import OnGoingMatchesRender from '../../components/OnGoingMatchesRender/OnGoingMatchesRender';

const panes = [
  {
    menuItem: 'On going matches',
    render: ({ onGoingMatches }) => {
      const onGoingMatchesJSX = OnGoingMatchesRender(
        onGoingMatches,
        leagueOptions
      );
      return onGoingMatchesJSX;
    },
  },
  {
    menuItem: 'Upcoming matches',
    render: () => <Tab.Pane>Upcoming matches content</Tab.Pane>,
  },
  {
    menuItem: 'Post matches',
    render: () => <Tab.Pane>Post matches content</Tab.Pane>,
  },
];

const TournamentOverview = () => {
  const [onGoingMatches, setOnGoingMatches] = useState([]);
  useEffect(() => {
    setOnGoingMatches(onGoingMatchDummyData);
  }, []);
  return (
    <TournamentOverviewContainer>
      <Grid stackable columns={2}>
        <Grid.Column width={11}>
          <Segment className="columnItem matchDashboard">
            <Tab onGoingMatches={onGoingMatches} panes={panes} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment className="columnItem tournamentOverviewImage">
            <div className="tournamentOverviewImageText">
              <p className="tournamentOverviewImageTextTitle">
                {overviewVideoInfo[0].videoTitle}
              </p>
              <p className="tournamentOverviewImageTextSubtitle">
                {overviewVideoInfo[0].videoSubtitle}
              </p>
            </div>
            <div className="tournamentOverviewImageIcon">
              <span> Play Icon </span>
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
      <BlogSection blogData={blogData}></BlogSection>
    </TournamentOverviewContainer>
  );
};

export default TournamentOverview;
