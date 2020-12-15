import React, {useState} from "react";
import styled from "styled-components";
import {Icon} from "semantic-ui-react";
import ThemeButton from "shared/components/ThemeButton";
import CustomModal from "shared/components/CustomModal";
import BlogDetailsComponent from "../Blogs/BlogDetails/BlogDetails";

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

const TeamsDetailsContainer = styled(Column)`
  padding: 31px 28px;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
`;

const TeamsNameContainer = styled(Row)`
  align-items: center;
  gap: 22px;
  padding-bottom: 31px;
`;

const TeamsLogo = styled.img`
  height: 141px;
  width: 141px;
  border-radius: 50%;
`;

const HorizontalDivider = styled(Row)`
  width: 100%;
  border: 1px solid #e8ebfc;
  margin: 32px 0;
`;

const TeamsDetailGrid = styled.div`
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

const BlogsListContainer = styled(Column)`
  width: 98.3%;
`;

const BlogHeadingContainer = styled(Row)`
  justify-content: space-between;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #0d1757;
  padding: 39px 0 20px 0;
`;

const BlogListGrid = styled(Row)`
  gap: 30px;
`;

const BlogContainer = styled(Column)`
  flex: 1;
  height: 330px;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0px 0px 20px #edeffc;
`;

const BlogPhoto = styled.img`
  border-radius: 16px 16px 0 0;
  width: 100%;
  height: 150px;
`;

const BlogTextContainer = styled(Column)`
  font-family: Roboto;
  gap: 10px;
  padding: 10px 20px;
`;

const BlogTextHeader = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #333333;
  div {
    font-weight: 500;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: rgba(51, 51, 51, 0.5);
  }
`;

const BlogTextDescription = styled(Row)`
  width: 100%;
  text-align: justify;
  font-size: 14px;
  line-height: 150%;
  color: #c4c4c4;
`;

const BlogFooterContainer = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  color: #007ae9;
`;

const BlogByContainer = styled(Row)`
  gap: 12px;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
`;

const BlogByPhoto = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

const BlogReadMore = styled(Row)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
`;

const BlogDetailsmModalContainer = styled(Column)`
  padding: 5px 0;
  margin: 30px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
`;

const TabBoxContainer = styled(Column)`
  height: 100%;
  border: 1px solid #e9ecfb;
  border-radius: 4px;
  background-color: white;
  flex: 1;
`;

const TabTitleContainer = styled(Row)`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background: #e9ecfb;
  border: 1px solid #e9ecfb;
  padding: 17px 22px;
`;

const TabTitle = styled(Column)`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
`;

const TeamNameText = styled(TabTitle)`
  font-size: 24px;
  line-height: 28px;
`;

const SeeMoreLink = styled(Column)`
  align-items: flex-end;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #1f94ff;
  cursor: pointer;
`;

const TextValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #12216d;
`;

const TextLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`;

const TeamInfoTextLabel = styled(TextLabel)`
  padding-bottom: 5px;
`;

const TeamSocialAccountsContainer = styled(Row)`
  color: #1a2e99;
  gap: 8px;
`;

const TrophiesTextLabel = styled(TextLabel)`
  text-align: right;
  padding: 5px;
`;

const TrophiesNumber = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const TrophyIconContainer = styled.span`
  color: #e4c389;
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

const BlogsList = (props) => (
  <BlogsListContainer>
    <BlogHeadingContainer>
      Blogs
      <ThemeButton
        customCss={{
          width: "102px",
          backgroundColor: "#FFFFFF",
          color: "#0D1757",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        onClickAction={() => alert("Under Development")}
        children={
          <>
            See all <Icon name="arrow right" />
          </>
        }
      />
    </BlogHeadingContainer>
    <BlogListGrid>
      <BlogContainer onClick={() => props.toggleblogDetailsModal(true)}>
        <BlogPhoto src="https://picsum.photos/200" />
        <BlogTextContainer>
          <BlogTextHeader>
            Lorem ipsum dolor<div>1 min read</div>
          </BlogTextHeader>
          <BlogTextDescription>
            Here are 11 things I wish I knew when I started my business. I hope
            they will save you some time and agent...
          </BlogTextDescription>
          <BlogFooterContainer>
            <BlogByContainer>
              <BlogByPhoto src="https://picsum.photos/200" />
              Barbera Simon
            </BlogByContainer>
            <BlogReadMore>
              Read more <Icon name="arrow right" />
            </BlogReadMore>
          </BlogFooterContainer>
        </BlogTextContainer>
      </BlogContainer>
      <BlogContainer onClick={() => props.toggleblogDetailsModal(true)}>
        <BlogPhoto src="https://picsum.photos/200" />
        <BlogTextContainer>
          <BlogTextHeader>
            Lorem ipsum dolor<div>1 min read</div>
          </BlogTextHeader>
          <BlogTextDescription>
            Here are 11 things I wish I knew when I started my business. I hope
            they will save you some time and agent...
          </BlogTextDescription>
          <BlogFooterContainer>
            <BlogByContainer>
              <BlogByPhoto src="https://picsum.photos/200" />
              Barbera Simon
            </BlogByContainer>
            <BlogReadMore>
              Read more <Icon name="arrow right" />
            </BlogReadMore>
          </BlogFooterContainer>
        </BlogTextContainer>
      </BlogContainer>
      <BlogContainer onClick={() => props.toggleblogDetailsModal(true)}>
        <BlogPhoto src="https://picsum.photos/200" />
        <BlogTextContainer>
          <BlogTextHeader>
            Lorem ipsum dolor<div>1 min read</div>
          </BlogTextHeader>
          <BlogTextDescription>
            Here are 11 things I wish I knew when I started my business. I hope
            they will save you some time and agent...
          </BlogTextDescription>
          <BlogFooterContainer>
            <BlogByContainer>
              <BlogByPhoto src="https://picsum.photos/200" />
              Barbera Simon
            </BlogByContainer>
            <BlogReadMore>
              Read more <Icon name="arrow right" />
            </BlogReadMore>
          </BlogFooterContainer>
        </BlogTextContainer>
      </BlogContainer>
    </BlogListGrid>
  </BlogsListContainer>
);

const AboutTeam = (props) => (
  <TabBoxContainer>
    <TabTitleContainer>
      <TeamNameText>FC Barcelona</TeamNameText>
      <TeamSocialAccountsContainer>
        <Icon name="facebook f" />
        <Icon name="twitter" />
        <Icon name="instagram" />
      </TeamSocialAccountsContainer>
    </TabTitleContainer>
    <table cellPadding={11} cellSpacing={10}>
      <tr>
        <td>
          <TeamInfoTextLabel>Squad size</TeamInfoTextLabel>
          <TextValue>40</TextValue>
        </td>
        <td>
          <TeamInfoTextLabel>National Players</TeamInfoTextLabel>
          <TextValue>24</TextValue>
        </td>
        <td>
          <TeamInfoTextLabel>Squad size</TeamInfoTextLabel>
          <TextValue>40</TextValue>
        </td>
        <td>
          <TeamInfoTextLabel>Foreigners Players</TeamInfoTextLabel>
          <TextValue>24</TextValue>
        </td>
      </tr>
    </table>
  </TabBoxContainer>
);

const LeaguePlayed = (props) => (
  <TabBoxContainer>
    <TabTitleContainer>
      <TabTitle>La Liga</TabTitle>
    </TabTitleContainer>
    <table cellPadding={11} cellSpacing={10}>
      <tr>
        <td>
          <TeamInfoTextLabel>In league since</TeamInfoTextLabel>
          <TextValue>24 years</TextValue>
        </td>
        <td>
          <TeamInfoTextLabel>Table position</TeamInfoTextLabel>
          <TextValue>3</TextValue>
        </td>
      </tr>
    </table>
  </TabBoxContainer>
);

const TeamTrophies = (props) => (
  <TabBoxContainer>
    <TabTitleContainer>
      <TabTitle>Trophies</TabTitle>
      <SeeMoreLink>{"See More>>"}</SeeMoreLink>
    </TabTitleContainer>
    <table cellPadding={2} style={{margin: "auto", height: 81}}>
      <tr>
        <td>
          <TrophiesTextLabel>La Liga</TrophiesTextLabel>
        </td>
        <td>
          <TrophyIconContainer>
            <Icon name="trophy" size="big" />
          </TrophyIconContainer>
        </td>
        <td>
          <TextLabel>
            <span>
              <TrophiesNumber>2</TrophiesNumber> Tiltes
            </span>
          </TextLabel>
        </td>
      </tr>
    </table>
  </TabBoxContainer>
);

const TeamsComponent = (props) => (
  <Container>
    <TeamsDetailsContainer>
      <TeamsNameContainer>
        <TeamsLogo src="https://picsum.photos/200" />
        <AboutTeam {...props} />
        <TeamTrophies {...props} />
        <LeaguePlayed {...props} />
      </TeamsNameContainer>
      <TeamsDetailGrid>
        <TopPlayer {...props} />
        <Standing {...props} />
        <Matches {...props} />
        <Description {...props} />
      </TeamsDetailGrid>
    </TeamsDetailsContainer>
    <BlogsList {...props} />
  </Container>
);

const Teams = (props) => {
  const [blogDetailsModal, toggleblogDetailsModal] = useState(false);
  return (
    <>
      <TeamsComponent
        {...props}
        toggleblogDetailsModal={toggleblogDetailsModal}
      />
      {blogDetailsModal && (
        <CustomModal
          isOpen={true}
          width="80%"
          children={
            <BlogDetailsmModalContainer>
              <BlogDetailsComponent />
            </BlogDetailsmModalContainer>
          }
        />
      )}
    </>
  );
};

export default Teams;
