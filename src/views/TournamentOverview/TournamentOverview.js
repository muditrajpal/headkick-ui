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
  upcomingmatches,
  pastmatchesdata,
} from './dummyData';
import {
  RenderOnGoingMatches,
  RenderUpComingMatches,
  RenderPastMatches,
} from './../../components/TournamentOverviewTabPanes/index';

const panes = [
  {
    menuItem: 'On going matches',
    render: ({ dataongoingmatches }) => {
      return (
        <RenderOnGoingMatches
          dataongoingmatches={dataongoingmatches}
          leagueOptions={leagueOptions}
        />
      );
    },
  },
  {
    menuItem: 'Upcoming matches',

    render: ({ upcomingmatches }) => {
      return <RenderUpComingMatches upcomingmatches={upcomingmatches} />;
    },
  },
  {
    menuItem: 'Past matches',
    render: ({ pastmatchesdata }) => {
      return <RenderPastMatches pastmatchesdata={pastmatchesdata} />;
    },
  },
];

const TournamentOverview = () => {
  const [dataongoingmatches, setOnGoingMatches] = useState([]);
  useEffect(() => {
    setOnGoingMatches(onGoingMatchDummyData);
  }, []);
  return (
    <TournamentOverviewContainer>
      <Grid stackable columns={2}>
        <Grid.Column width={11}>
          <Segment className="columnItem matchDashboard">
            <Tab
              dataongoingmatches={dataongoingmatches}
              upcomingmatches={upcomingmatches}
              pastmatchesdata={pastmatchesdata}
              panes={panes}
            />
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
