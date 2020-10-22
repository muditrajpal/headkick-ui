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

const ShootingContainer = styled(Column)`
  flex: 1;
  width: 100%;
`;

const UploadPhoto = () => (
  <UploadPhotoContainer>
    <UploadPhotoGrid>
      <Icon name="plus" size="huge" />
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
        <table cellPadding={2} style={{margin: "auto"}}>
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
        <Column style={{padding: "0 31px", margin: "auto 0"}}>
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

const Shooting = (props) => (
  <ShootingContainer>
    <TabContainer
      tabTitle={"Shooting"}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{padding: 15, gap: 15}}>
          <Row>
            <TextLabel>Heading</TextLabel>
          </Row>
          <Row>
            <TextLabel>Shot Power</TextLabel>
          </Row>
          <Row>
            <TextLabel>Finishing</TextLabel>
          </Row>
          <Row>
            <TextLabel>Longshots</TextLabel>
          </Row>
          <Row>
            <TextLabel>Curves</TextLabel>
          </Row>
          <Row>
            <TextLabel>FK Acc</TextLabel>
          </Row>
          <Row>
            <TextLabel>Penalties</TextLabel>
          </Row>
          <Row>
            <TextLabel>Volleys</TextLabel>
          </Row>
        </Column>
      }
    />
  </ShootingContainer>
);

const AcademiesPlayerDetails = (props) => (
  <DetailsContainer>
    <Row style={{paddingBottom: 15}}>
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
    <Column style={{overflowY: "auto", maxHeight: "calc(100vh - 260px)"}}>
      <DeatilTabs>
        <UploadPhoto {...props} />
        <PlayerInfo {...props} />
        <Trophies {...props} />
        <ConnectWithPlayer {...props} />
      </DeatilTabs>
      <DeatilTabs>
        <Shooting {...props} />
        <Shooting {...props} />
        <Shooting {...props} />
        <Shooting {...props} />
      </DeatilTabs>
      <DeatilTabs>
        <Shooting {...props} />
        <Shooting {...props} />
        <Shooting {...props} />
        <Shooting {...props} />
      </DeatilTabs>
    </Column>
  </DetailsContainer>
);

export default AcademiesPlayerDetails;
