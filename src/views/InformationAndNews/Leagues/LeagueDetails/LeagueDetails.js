import React from "react";
import styled, {css} from "styled-components";
import {Dropdown, Icon} from "semantic-ui-react";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Column)`
  padding: 5px;
  top: 6rem;
  position: absolute;
  float: left;
  border-radius: 0.5rem;
  background: #ffffff;
  width: 100%;
  max-height: calc(100vh - 160px);
  overflow-y: auto;
`;

const LeagueDetailsContainer = styled(Column)`
  padding: 31px 28px;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
`;

const LeagueNameContainer = styled(Row)`
  align-items: center;
  gap: 20px;
  padding: 0 0 10px 88px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #12216d;
`;

const LeagueLogo = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50%;
`;

const HorizontalDivider = styled(Row)`
  width: 100%;
  border: 1px solid #e8ebfc;
  margin: 32px 0;
`;

const LeagueDetailGrid = styled.div`
  display: grid;
  grid-gap: 35px 23px;
  grid-template-areas:
    "topPlayers topPlayers standings"
    "matches matches description"
    "matches matches description"
    "topGoalScorer topGoalKeeper topMidFielder";
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: min-content;
`;

const TopPlayerContainer = styled(Column)`
  flex: 1;
  grid-area: topPlayers;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
  border-radius: 4px;
`;

const TopPlayerHeader = styled(Row)`
  height: 60px;
  align-items: center;
  padding-left: 22px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
  background: #e9ecfb;
`;

const TopPlayerListContainer = styled(Row)`
  flex: 1;
  gap: 60px;
  padding: 30px 20px;
  overflow-x: auto;
`;

const TopPlayerDetailContainer = styled(Column)`
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  line-height: 16px;
  color: #12216d;
  white-space: nowrap;
`;

const TopPlayerPhoto = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
`;

const Table = styled.table`
  tr:nth-child(even) {
    background: #f6f7fe;
  }
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #e9ecfb;
  border-radius: 4px;
  box-sizing: border-box;
  thead {
    background: #e9ecfb;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #000000;
  }
`;

const TableColumn = styled.td`
  padding: 19px 22px;
`;

const TableColumnCenterAligned = styled(TableColumn)`
  text-align: center;
`;

const StandingContainer = styled(Column)`
  flex: 1;
  grid-area: standings;
`;

const HandlePositionBgColor = (position) => {
  switch (position) {
    case 1:
      return "#E4C389";
    case 2:
      return "#C4C4C4";
    case 3:
      return "#9D7373";
    default:
      return "";
  }
};

const TablePositionColumn = styled.td`
  width: 6px;
  background-color: ${({position}) => HandlePositionBgColor(position)};
`;

const ClubStandingContainer = styled(Row)`
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
  align-items: center;
`;

const ClubStandingPhoto = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const TabsSelectorContainer = styled(Row)`
  gap: 80px;
  border-bottom: 1px solid #e8ebfc;
  align-items: center;
`;

const TabContainer = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  justify-content: center;
  color: #12216d;
  border-bottom: ${({isSelected}) =>
    isSelected ? "4px solid #0d1757" : "none"};
  padding: 18px;
  cursor: pointer;
`;

const MatchesContainer = styled(Column)`
  flex: 1;
  gap: 17px;
  grid-area: matches;
`;

const SeeMoreContainer = styled(Column)`
  flex: 1;
  align-items: flex-end;
  cursor: pointer;
  font-size: 15px;
  line-height: 18px;
  color: #1f94ff;
`;

const DateContainer = styled(Column)`
  color: rgba(0, 0, 0, 0.4);
`;

const PlayerPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ExceedPlayerPlaceholder = styled(Column)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #007ae9;
  color: #ffffff;
  justify-content: space-around;
  align-items: center;
`;

const DescriptionContainer = styled(Column)`
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  grid-area: description;
`;

const DescriptionVideo = styled.video`
  width: 100%;
  height: 372px;
  border-radius: 10px 10px 0 0;
  outline: none;
  background: #000000;
`;

const DescriptionTextContainer = styled(Column)`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #333333;
  text-align: justify;
  padding: 24px 16px;
  div:first-child {
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #333333;
  }
`;

const TopGoalScorerContainer = styled(Column)`
  flex: 1;
  grid-area: topGoalScorer;
`;

const TopGoalKeeperContainer = styled(Column)`
  flex: 1;
  grid-area: topGoalKeeper;
`;

const TopMidFielderContainer = styled(Column)`
  flex: 1;
  grid-area: topMidFielder;
`;

const TopPlayer = (props) => (
  <TopPlayerContainer>
    <TopPlayerHeader>Top Players</TopPlayerHeader>
    <TopPlayerListContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
      <TopPlayerDetailContainer>
        <TopPlayerPhoto src="https://picsum.photos/200" />
        Anssumane Fati
      </TopPlayerDetailContainer>
    </TopPlayerListContainer>
    <HorizontalDivider />
  </TopPlayerContainer>
);

const Standing = (props) => (
  <StandingContainer>
    <Table>
      <thead>
        <TablePositionColumn></TablePositionColumn>
        <TableColumn>STANDINGS</TableColumn>
        <TableColumnCenterAligned>PLD</TableColumnCenterAligned>
        <TableColumnCenterAligned>PTS</TableColumnCenterAligned>
      </thead>
      <tbody>
        <tr>
          <TablePositionColumn position={1}></TablePositionColumn>
          <TableColumn>
            <ClubStandingContainer>
              <ClubStandingPhoto src="https://picsum.photos/200" />
              Barcelona
            </ClubStandingContainer>
          </TableColumn>
          <TableColumnCenterAligned>PLD</TableColumnCenterAligned>
          <TableColumnCenterAligned>PTS</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={2}></TablePositionColumn>
          <TableColumn>
            <ClubStandingContainer>
              <ClubStandingPhoto src="https://picsum.photos/200" />
              Barcelona
            </ClubStandingContainer>
          </TableColumn>
          <TableColumnCenterAligned>PLD</TableColumnCenterAligned>
          <TableColumnCenterAligned>PTS</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={3}></TablePositionColumn>
          <TableColumn>
            <ClubStandingContainer>
              <ClubStandingPhoto src="https://picsum.photos/200" />
              Barcelona
            </ClubStandingContainer>
          </TableColumn>
          <TableColumnCenterAligned>PLD</TableColumnCenterAligned>
          <TableColumnCenterAligned>PTS</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={4}>4</TablePositionColumn>
          <TableColumn>
            <ClubStandingContainer>
              <ClubStandingPhoto src="https://picsum.photos/200" />
              Barcelona
            </ClubStandingContainer>
          </TableColumn>
          <TableColumnCenterAligned>PLD</TableColumnCenterAligned>
          <TableColumnCenterAligned>PTS</TableColumnCenterAligned>
        </tr>
      </tbody>
    </Table>
  </StandingContainer>
);

const TabsSelector = (props) => (
  <TabsSelectorContainer>
    <TabContainer isSelected={true} onClick={() => alert("Under Development")}>
      Current Matches
    </TabContainer>
    <TabContainer isSelected={false} onClick={() => alert("Under Development")}>
      Past three matches
    </TabContainer>

    <SeeMoreContainer onClick={() => alert("Under Development")}>
      see more {">>"}
    </SeeMoreContainer>
  </TabsSelectorContainer>
);

const PlayerPhotoStack = ({
  players = [
    {photo: "https://picsum.photos/200"},
    {photo: "https://picsum.photos/200"},
    {photo: "https://picsum.photos/200"},
    {photo: "https://picsum.photos/200"},
    {photo: "https://picsum.photos/200"},
    {photo: "https://picsum.photos/200"},
    {photo: "https://picsum.photos/200"},
  ],
}) => {
  const loopLengthExceedMax = !!(players.length > 5);
  return (
    <Row style={{gap: 3}}>
      {players?.length &&
        players.map((data, index) => {
          return index > 4 ? null : <PlayerPhoto src={data?.photo} />;
        })}
      {loopLengthExceedMax && (
        <ExceedPlayerPlaceholder>+{players.length - 5}</ExceedPlayerPlaceholder>
      )}
    </Row>
  );
};

const MatchesList = (props) => (
  <tbody>
    <tr>
      <TableColumn>Real Madrid vs Wanderers FC</TableColumn>
      <TableColumnCenterAligned>
        <Column>4:30 PM</Column>
        <DateContainer>03 Sept</DateContainer>
      </TableColumnCenterAligned>
      <TableColumn>
        <PlayerPhotoStack />
      </TableColumn>
    </tr>
    <tr>
      <TableColumn>Real Madrid vs Wanderers FC</TableColumn>
      <TableColumnCenterAligned>
        <Column>4:30 PM</Column>
        <DateContainer>03 Sept</DateContainer>
      </TableColumnCenterAligned>
      <TableColumn>
        <PlayerPhotoStack />
      </TableColumn>
    </tr>
    <tr>
      <TableColumn>Real Madrid vs Wanderers FC</TableColumn>
      <TableColumnCenterAligned>
        <Column>4:30 PM</Column>
        <DateContainer>03 Sept</DateContainer>
      </TableColumnCenterAligned>
      <TableColumn>
        <PlayerPhotoStack />
      </TableColumn>
    </tr>
    <tr>
      <TableColumn>Real Madrid vs Wanderers FC</TableColumn>
      <TableColumnCenterAligned>
        <Column>4:30 PM</Column>
        <DateContainer>03 Sept</DateContainer>
      </TableColumnCenterAligned>
      <TableColumn>
        <PlayerPhotoStack />
      </TableColumn>
    </tr>
  </tbody>
);

const Matches = (props) => (
  <MatchesContainer>
    <TabsSelector {...props} />
    <Table>
      <thead>
        <TableColumn>MATCH</TableColumn>
        <TableColumnCenterAligned>DATE TIME</TableColumnCenterAligned>
        <TableColumn>PLAYERS</TableColumn>
      </thead>
      <MatchesList {...props} />
    </Table>
  </MatchesContainer>
);

const Description = (props) => (
  <DescriptionContainer>
    <DescriptionVideo controls name="media">
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </DescriptionVideo>
    <DescriptionTextContainer>
      Photo/Video
      <div>Description of the photo/ video that will be added</div>
    </DescriptionTextContainer>
  </DescriptionContainer>
);

const TopGoalScorer = (props) => (
  <TopGoalScorerContainer>
    <Table>
      <thead>
        <TablePositionColumn></TablePositionColumn>
        <TableColumn>Top Goal Scorer</TableColumn>
        <TableColumnCenterAligned>Goals</TableColumnCenterAligned>
      </thead>
      <tbody>
        <tr>
          <TablePositionColumn position={1}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={2}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={3}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={4}>4</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={5}>5</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={6}>6</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
      </tbody>
    </Table>
  </TopGoalScorerContainer>
);

const TopGoalKeeper = (props) => (
  <TopGoalKeeperContainer>
    <Table>
      <thead>
        <TablePositionColumn></TablePositionColumn>
        <TableColumn>Top Goal Keeper</TableColumn>
        <TableColumnCenterAligned>Clean Sheets</TableColumnCenterAligned>
      </thead>
      <tbody>
        <tr>
          <TablePositionColumn position={1}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={2}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={3}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={4}>4</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={5}>5</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={6}>6</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
      </tbody>
    </Table>
  </TopGoalKeeperContainer>
);

const TopMidFielder = (props) => (
  <TopMidFielderContainer>
    <Table>
      <thead>
        <TablePositionColumn></TablePositionColumn>
        <TableColumn>Top Mid Fielder</TableColumn>
        <TableColumnCenterAligned>Assist</TableColumnCenterAligned>
      </thead>
      <tbody>
        <tr>
          <TablePositionColumn position={1}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={2}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={3}></TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={4}>4</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={5}>5</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
        <tr>
          <TablePositionColumn position={6}>6</TablePositionColumn>
          <TableColumn>Griezmann</TableColumn>
          <TableColumnCenterAligned>20</TableColumnCenterAligned>
        </tr>
      </tbody>
    </Table>
  </TopMidFielderContainer>
);

const LeagueDetails = (props) => (
  <Container>
    <LeagueDetailsContainer>
      <LeagueNameContainer>
        <LeagueLogo src="https://picsum.photos/200" /> La Liga
      </LeagueNameContainer>
      <HorizontalDivider />
      <LeagueDetailGrid>
        <TopPlayer {...props} />
        <Standing {...props} />
        <Matches {...props} />
        <Description {...props} />
        <TopGoalScorer {...props} />
        <TopGoalKeeper {...props} />
        <TopMidFielder {...props} />
      </LeagueDetailGrid>
    </LeagueDetailsContainer>
  </Container>
);

export default LeagueDetails;
