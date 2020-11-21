import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Button, Icon,Image } from "semantic-ui-react";
import history from "historyObj";
import ThemeButton from "shared/components/ThemeButton";
import queryString from "query-string";
import { fetchPlayerDetail } from "apis/player";
import _groupBy from "lodash/groupBy";

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

const SocialIconContainer = styled(Column)`
  color: #1a2e99;
  padding: 0 18px 14px 0;
`;

const SkillContainer = styled(Column)`
  width: calc(25% - 22.5px);
`;

const SkillProgressContainer = styled(Row)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

const getProgressBarColor = (percentage) => {
  if (percentage >= 25 && percentage < 50) return "#E4C389";
  else if (percentage >= 50) return "#1F94FF";
  else return "#979797";
};


const ProgressbarContainer = styled(Column)`
  width: 55%;
  .progress {
    margin: 0 !important;
    border-radius: 0;
    .bar {
      height: 10px !important;
      border-radius: 0;
      ${({ progress }) =>
        progress &&
        css`
          width: ${progress}%;
          background: ${getProgressBarColor(progress)};
        `}
    }
  }
`;

const getSocialIcon = (socialPlatform) => {
  switch (socialPlatform) {
    case "FACEBOOK":
      return "facebook f";
    case "TWITTER":
      return "twitter";
    case "INSTAGRAM":
      return "instagram";
    default:
      return "";
  }
};

const UploadPhoto = ({img}) => (
  <UploadPhotoContainer>
    <UploadPhotoGrid>
      <Image avator src={img}/>
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

const PlayerInfo = ({playerDetail}) => (
  <PlayerInfoContainer>
    <TabContainer
      tabTitle={playerDetail.name}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={11} cellSpacing={10}>
          <tr>
            <td>
              <PlayerInfoTextLabel>Height</PlayerInfoTextLabel>
              <TextValue>{playerDetail.height || ""}</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Weight</PlayerInfoTextLabel>
              <TextValue>{playerDetail.weight || ""}</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Date of Birth</PlayerInfoTextLabel>
              <TextValue>
                {playerDetail.dob}
              </TextValue>
            </td>
          </tr>

          <tr>
            <td>
              <PlayerInfoTextLabel>Position</PlayerInfoTextLabel>
              <TextValue>{playerDetail.position || ""}</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Work Rate</PlayerInfoTextLabel>
              <TextValue>{playerDetail.workRate || ""}</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Preferred foot</PlayerInfoTextLabel>
              <TextValue>
                {playerDetail.preferredFoot || ""}
              </TextValue>
            </td>
          </tr>
        </table>
      }
    />
  </PlayerInfoContainer>
);

const Trophies = ({trophies}) => (
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

const ConnectWithPlayer = ({social}) => (
  <ConnectWithPlayerContainer>
    <TabContainer
      tabTitle={"Connect with player"}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{ padding: "0 31px", margin: "auto 0" }}>
                {social.facebook?<Row>
                  <SocialIconContainer>
                    <Icon
                      name="facebook f"
                      size="large"
                    />
                  </SocialIconContainer>
                  <a href={social.facebook} target="_blank">
                    <TextLabel>Facebook</TextLabel>
                  </a>
                </Row>
                :""}
                  {social.twitter?<Row>
                  <SocialIconContainer>
                    <Icon
                      name="twitter"
                      size="large"
                    />
                  </SocialIconContainer>
                  <a href={social.twitter} target="_blank">
                    <TextLabel>Twitter</TextLabel>
                  </a>
                </Row>
                :""}
                  {social.instagram?<Row>
                  <SocialIconContainer>
                    <Icon
                      name="instagram"
                      size="large"
                    />
                  </SocialIconContainer>
                  <a href={social.instagram} target="_blank">
                    <TextLabel>Instagram</TextLabel>
                  </a>
                </Row>
                :""}
        </Column>
      }
    />
  </ConnectWithPlayerContainer>
);

const Skills = ({skills}) => (
  <SkillContainer>
    <TabContainer
      tabTitle={skills[0].type}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{ padding: 15, gap: 15 }}>
          {skills.map((skill) => {
              return (
                <SkillProgressContainer>
                  <TextLabel>{skill.name}</TextLabel>
                  <ProgressbarContainer progress={skill.value}>
                    <div class="ui small progress">
                      <div class="bar" />
                    </div>
                  </ProgressbarContainer>
                </SkillProgressContainer>
              );
            })}
        </Column>
      }
    />
  </SkillContainer>
);

const AcademiesPlayerDetails = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const playerId = queryStringSearch.id;
  const canEdit = queryStringSearch.canEdit;
  const [playerDetail, setPlayerDetail] = useState(null);
  useEffect(() => {
    if (!playerId) {
      history.push("/academies/player/list");
      return;
    }
    fetchPlayerDetail({
      id: playerId,
    })
      .then((data) => {
        if (data.sc && data.result) {
          if(data.result.skills){
            data.result.skills= _groupBy(data.result.skills,"type");
            console.log(data.result.skills)
          }
          setPlayerDetail(data.result);
        }
      })
      .catch(() => {});
  }, [playerId]);
if(!playerDetail) return <div/>
  return (
    <DetailsContainer>
      <Row style={{ paddingBottom: 15 }}>
        <Column style={{ alignItems: "flex-start", flex: 1 }}>
          <Button
            style={{ maxWidth: 121 }}
            basic
            size="medium"
            color="black"
            onClick={() =>  history.push(`/academies/players/list`)}
          >
            <Icon name="arrow left" /> Go Back
          </Button>
        </Column>
        <Column style={{ alignItems: "flex-end", flex: 1 }}>
          <ThemeButton
            isDisabled={false}
            onClickAction={() =>history.push(`/academies/players/edit?id=${playerDetail._id}`)}
            children="Edit All"
          />
        </Column>
      </Row>
      <Column style={{ overflowY: "auto", maxHeight: "calc(100vh - 260px)" }}>
        <DetailTabs>
          <UploadPhoto img={playerDetail.img} />
          <PlayerInfo playerDetail={playerDetail} />
          <Trophies trophies={playerDetail.trophies} />
          <ConnectWithPlayer social={playerDetail.social} />
        </DetailTabs>
        <DetailTabs>
          {Object.keys(playerDetail.skills).length &&
            Object.keys(playerDetail.skills).map((id) => {
              return <Skills skills={playerDetail.skills[id]} />;
            })}
        </DetailTabs>
      </Column>
    </DetailsContainer>
  );
};

export default AcademiesPlayerDetails;
