import React from "react";
import styled from "styled-components";
import {Button, Icon} from "semantic-ui-react";
import history from "historyObj";
import ThemeButton from "shared/ThemeButton";

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

const DeatilTabs = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-template-areas:
    "uploadPhoto playerInfo playerInfo playerInfo trophies trophies connectWithPlayer connectWithPlayer"
    "shooting1 shooting1 defence defence shooting2 shooting2 shooting3 shooting3"
    "shooting1 shooting1 mental mental goalkeeper goalkeeper shooting3 shooting3"
    "shooting4 shooting4 mental mental goalkeeper goalkeeper specialities specialities";
`;

const UploadPhotoContainer = styled.div`
  grid-area: uploadPhoto;
  align-items: center;
  max-width: 148px;
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
`;

const TabBoxContainer = styled(Column)`
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
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

const PlayerInfoContainer = styled.div`
  width: 100%;
  grid-area: playerInfo;
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

const TrophiesContainer = styled.div`
  width: 100%;
  grid-area: trophies;
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

const ConnectWithPlayerContainer = styled.div`
  width: 100%;
  grid-area: connectWithPlayer;
`;

const SocialIconContainer = styled(Column)`
  color: #1a2e99;
  padding: 0 18px 14px 0;
`;

const UploadPhoto = () => (
  <UploadPhotoContainer>
    <UploadPhotoGrid>
      <Icon name="plus" size="big" color="blue" />
    </UploadPhotoGrid>
    <ThemeButton
      customCss={{width: "148px"}}
      isDisabled={false}
      onClickAction={() => alert("Under Development")}
      children="Upload Photo"
    />
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

const PlayerInfo = (props) => (
  <PlayerInfoContainer>
    <TabContainer
      tabTitle={"Lionel Messi"}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={11} cellSpacing={10}>
          <tr>
            <td>
              <PlayerInfoTextLabel>Height</PlayerInfoTextLabel>
              <TextValue>170cm</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Weight</PlayerInfoTextLabel>
              <TextValue>60kg</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Date of Birth</PlayerInfoTextLabel>
              <TextValue>14/09/1997</TextValue>
            </td>
          </tr>

          <tr>
            <td>
              <PlayerInfoTextLabel>Position</PlayerInfoTextLabel>
              <TextValue>RW</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Work Rate</PlayerInfoTextLabel>
              <TextValue>60kg</TextValue>
            </td>

            <td>
              <PlayerInfoTextLabel>Preferred foot</PlayerInfoTextLabel>
              <TextValue>Left</TextValue>
            </td>
          </tr>
        </table>
      }
    />
  </PlayerInfoContainer>
);

const Trophies = (props) => (
  <TrophiesContainer>
    <TabContainer
      tabTitle={"Trophies"}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={2} style={{margin: "auto", paddingTop: 14}}>
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
                  <TrophiesNumber>2</TrophiesNumber> Titles
                </span>
              </TextLabel>
            </td>
          </tr>

          <tr>
            <td>
              <TrophiesTextLabel>PL</TrophiesTextLabel>
            </td>
            <td>
              <TrophyIconContainer>
                <Icon name="trophy" size="big" />
              </TrophyIconContainer>
            </td>
            <td>
              <TextLabel>
                <span>
                  <TrophiesNumber>2</TrophiesNumber> Titles
                </span>
              </TextLabel>
            </td>
          </tr>

          <tr>
            <td>
              <TrophiesTextLabel>FIFA</TrophiesTextLabel>
            </td>
            <td>
              <TrophyIconContainer>
                <Icon name="trophy" size="big" />
              </TrophyIconContainer>
            </td>
            <td>
              <TextLabel>
                <span>
                  <TrophiesNumber>2</TrophiesNumber> Titles
                </span>
              </TextLabel>
            </td>
          </tr>
        </table>
      }
    />
  </TrophiesContainer>
);

const ConnectWithPlayer = (props) => (
  <ConnectWithPlayerContainer>
    <TabContainer
      tabTitle={"Connect with player"}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{padding: "19px 31px"}}>
          <Row>
            <SocialIconContainer>
              <Icon name="facebook f" size="large" />
            </SocialIconContainer>
            <TextLabel>@lionelmessi</TextLabel>
          </Row>

          <Row>
            <SocialIconContainer>
              <Icon name="twitter" size="large" />
            </SocialIconContainer>
            <TextLabel>@lionelmessi</TextLabel>
          </Row>

          <Row>
            <SocialIconContainer>
              <Icon name="instagram" size="large" />
            </SocialIconContainer>
            <TextLabel>@lionelmessi</TextLabel>
          </Row>
        </Column>
      }
    />
  </ConnectWithPlayerContainer>
);

const AcademiesPlayerDetails = () => (
  <DetailsContainer>
    <Row>
      <Column style={{alignItems: "flex-start", flex: 1}}>
        <Button
          style={{maxWidth: 121}}
          basic
          size="medium"
          color="black"
          onClick={() => history.push("/academies/players/list")}
        >
          <Icon name="arrow left" /> Go Back
        </Button>
      </Column>
      <Column style={{alignItems: "flex-end", flex: 1}}>
        <ThemeButton
          isDisabled={false}
          onClickAction={() => alert("Under Development")}
          children="Edit All"
        />
      </Column>
    </Row>
    <DeatilTabs style={{padding: 30, width: "100%"}}>
      <UploadPhoto />
      <PlayerInfo />
      <Trophies />
      <ConnectWithPlayer />
    </DeatilTabs>
  </DetailsContainer>
);

export default AcademiesPlayerDetails;
