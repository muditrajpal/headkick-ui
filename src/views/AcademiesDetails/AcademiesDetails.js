import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Button, Icon, Image, Grid,Segment } from "semantic-ui-react";
import history from "historyObj";
import queryString from "query-string";
import { fetchAcademyDetail } from "apis/academy";
import { fetchPlayerList } from "apis/player";
import _groupBy from "lodash/groupBy";
import mapImg from "assets/imgs/mapImg.png";
import FixtureCalendar from "components/FixtureCalendar";
import BlogSection from "components/BlogSection/BlogSection";
import moment from "moment";
import { blogData,overviewVideoInfo } from "./dummyData";
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  float: left;
  margin: auto;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
`;

const DetailTabs = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: wrap;
`;

const UploadPhotoContainer = styled(Column)`
  flex: 1;
  align-items: center;
  width: 100%;
`;

const UploadPhotoGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #667ae5;
  border-radius: 50%;
  box-sizing: border-box;
  height: 117px;
  width: 117px;
  margin: 0 auto 44px auto;
  color: #0d1757;
  font-size: 12px;
`;

const TabBoxContainer = styled(Column)`
  height: 100%;
  border: 1px solid #e9ecfb;
  border-radius: 4px;
  background-color: white;
`;

const TabTitleContainer = styled(Row)`
  width: 100%;
  justify-content: space-between;
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

const EditTabLink = styled(Column)`
  align-items: flex-end;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #1f94ff;
  cursor: pointer;
`;

const PlayerInfoContainer = styled(Column)`
  flex: 3;
  width: 100%;
`;

const TextLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`;

const TextValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #12216d;
`;

const PlayerInfoTextLabel = styled(TextLabel)`
  padding-bottom: 5px;
`;

const TrophiesContainer = styled(Column)`
  flex: 2;
  width: 100%;
  justify-content: center;
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

const ConnectWithPlayerContainer = styled(Column)`
  flex: 2.5;
  width: 100%;
  justify-content: center;
`;

const SubstituteReservePlayerContainer = styled(Column)`
  padding: 20px 30px;
  gap: 5px;
  align-items: center;
`;

const SubstituteReservePlayerPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const SubstituteReservePlayerName = styled(Row)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #12216d;
`;


const SubstituteReserveContainer = styled(Column)`
  height: 100%;
  border: 1px solid #e9ecfb;
`;

const SubstituteReserveHeader = styled(Row)`
  height: 43px;
  background: #e9ecfb;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
  align-items: center;
  padding: 0 21px;
`;


const ReservePlayers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;
  gap: 25px;
  overflow-x: auto;
`;
const UploadPhoto = ({ img }) => (
  <UploadPhotoContainer>
    <UploadPhotoGrid>
      <Image avator src={img} />
    </UploadPhotoGrid>
  </UploadPhotoContainer>
);

const TabContainer = (props) => (
  <TabBoxContainer>
    <TabTitleContainer>
      <TabTitle>{props.tabTitle || "Tab title"}</TabTitle>
      <EditTabLink onClick={props.editAction}>{"edit >>"}</EditTabLink>
    </TabTitleContainer>
    {props.children}
  </TabBoxContainer>
);

const AcademyInfo = ({ academyDetail }) => (
  <PlayerInfoContainer>
    <TabContainer
      tabTitle={academyDetail.name}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={11} cellSpacing={10}>
          <tr>
            <td>
              <PlayerInfoTextLabel>No. of players</PlayerInfoTextLabel>
              <TextValue>{academyDetail.players.length}</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>No. of coaches</PlayerInfoTextLabel>
              <TextValue>{academyDetail.coach?.length}</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Date Established</PlayerInfoTextLabel>
              <TextValue> {moment(academyDetail.date, "DD/MM/YYYY").format("Do MMM YY")}</TextValue>
            </td>
          </tr>
        </table>
      }
    />
  </PlayerInfoContainer>
);

const Trophies = ({ trophies }) => (
  <TrophiesContainer>
    <TabContainer
      tabTitle={"Trophies"}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={2} style={{ margin: "auto" }}>
          {trophies.length &&
            trophies.map((trophyInfo) => {
              return (
                <tr>
                  <td>
                    <TrophiesTextLabel>
                      {trophyInfo.title || ""}
                    </TrophiesTextLabel>
                  </td>
                  <td>
                    <TrophyIconContainer>
                      <Icon name="trophy" size="big" />
                    </TrophyIconContainer>
                  </td>
                  <td>
                    <TextLabel>
                      <span>
                        <TrophiesNumber>
                          {trophyInfo.count || ""}
                        </TrophiesNumber>{" "}
                        {trophyInfo.type || ""}
                      </span>
                    </TextLabel>
                  </td>
                </tr>
              );
            })}
        </table>
      }
    />
  </TrophiesContainer>
);

const MatchesInfo = ({ matches }) => (
  <ConnectWithPlayerContainer>
    <TabContainer
      tabTitle={"Academy Matches"}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{ padding: "0 31px", margin: "auto 0" }}></Column>
      }
    />
  </ConnectWithPlayerContainer>
);
const CrestsInfo = ({ matches }) => (
    <ConnectWithPlayerContainer>
      <TabContainer
        tabTitle={"Crests"}
        editAction={() => alert("Under Development")}
        children={
          <Column style={{ padding: "0 31px", margin: "auto 0" }}></Column>
        }
      />
    </ConnectWithPlayerContainer>
  );

  const PlayerItem = ({player}) => (
    <SubstituteReservePlayerContainer>
      <SubstituteReservePlayerPhoto src={player.img} />
      <SubstituteReservePlayerName>{player.name}</SubstituteReservePlayerName>
        </SubstituteReservePlayerContainer>
  );
  const Reserves = ({players}) => (
    <SubstituteReserveContainer>
      <SubstituteReserveHeader>Reserves</SubstituteReserveHeader>
      <ReservePlayers>
      {players.map(player=>(<PlayerItem player={player} />))}
      </ReservePlayers>
    </SubstituteReserveContainer>
  );
const AcademiesDetails = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const academyId = queryStringSearch.id;
  const canEdit = queryStringSearch.canEdit;
  const [academyDetail, setAcademyDetail] = useState(null);
  const [playersList, setPlayersList] = useState([]);

  useEffect(() => {
    if (!academyId) {
      history.push("/academies/list");
      return;
    }
    fetchAcademyDetail({
      id: academyId,
      coaches:true,
      players:true
    })
      .then((data) => {
        if (data.sc && data.result) {
          setAcademyDetail(data.result);
        }
      })
      .catch(() => {});
    fetchPlayerList({
      page: 1,
      filter: JSON.stringify({ 
        academy: academyId  }),
      limit: 50,
      sort: JSON.stringify({}),
    })
      .then((data) => {
        if (data.sc && data.result) {
          setPlayersList(
            data.result.data && data.result.data.length ? data.result.data : []
          );
        }
      })
      .catch(() => {});
  }, [academyId]);
  if (!academyDetail) return <div />;
  return (
      <div className="academiesDetails">
    <DetailsContainer>
      <Row style={{ paddingBottom: 15 }}>
        <Column style={{ alignItems: "flex-start", flex: 1 }}>
          <Button
            style={{ maxWidth: 121 }}
            basic
            size="medium"
            color="black"
            onClick={() => history.push(`/academies/list`)}
          >
            <Icon name="arrow left" /> Go Back
          </Button>
        </Column>
      </Row>
      <div
        style={{
          maxHeight: "calc(100vh - 15rem)",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Column style={{ overflowY: "auto", maxHeight: "calc(100vh - 260px)" }}>
          <DetailTabs>
            <UploadPhoto img={academyDetail.logoImg} />
            <AcademyInfo academyDetail={academyDetail} />
            <Trophies trophies={academyDetail.trophies} />
            <MatchesInfo matches={academyDetail.matches} />
          </DetailTabs>
        </Column>
        <Grid stackable columns={2}>
        <Grid.Column width={8}>
            <Reserves players={playersList}/>
          </Grid.Column>
          <Grid.Column width={4}>
          <CrestsInfo />
          </Grid.Column>
          <Grid.Column  width={4}>
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

        <Grid stackable columns={2}>
          <Grid.Column>
            <FixtureCalendar />
          </Grid.Column>
          <Grid.Column>
            <Image src={mapImg} />
          </Grid.Column>
        </Grid>
        <BlogSection blogData={blogData}></BlogSection>
      </div>
    </DetailsContainer>
    </div>
  );
};

export default AcademiesDetails;
