import React from "react";
import CustomModal from "../CustomModal";
import styled from "styled-components";
import ThemeButton from "../ThemeButton";
import ProgressSlider from "../ProgressSlider";
import {Icon} from "semantic-ui-react";
import moment from "moment";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DetailsContainer = styled(Column)`
  width: 100%;
  margin: auto;
  padding: 28px;
`;

const DeatilTabs = styled.div`
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
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 1px 3px 17px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 0 24px;
`;

const TabTitleContainer = styled(Row)`
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #e9ecfb;
  padding: 17px 0;
`;

const TabTitle = styled(Column)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
`;

const TabAddButton = styled.div`
  background: #8fc9ff;
  color: #ffffff;
  text-align: center;
  width: 16px;
  height: 17px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
`;

const PlayerInfoContainer = styled(Column)`
  flex: 2;
  width: 100%;
`;

const TextLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #12216d;
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
  white-space: nowrap;
`;

const InputBox = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #dededf;
  box-sizing: border-box;
  border-radius: 3px;
  color: #979797;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  padding: 10px;
`;

const TrophiesContainer = styled(Column)`
  flex: 2;
  width: 100%;
  justify-content: center;
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

const DeleteButton = styled.div`
  background: #cccccc;
  color: #ffffff;
  text-align: center;
  width: 17px;
  height: 17px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
`;

const SkillContainer = styled(Column)`
  width: calc(25% - 22.5px);
`;

const SkillProgressContainer = styled(Row)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;

const ProgressSliderContainer = styled(Column)`
  width: 100%;
  padding: 0 20px;
`;

const UploadPhoto = (props) => (
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
      {props.hasOwnProperty("addAction") && (
        <TabAddButton onClick={props.addAction}>+</TabAddButton>
      )}
    </TabTitleContainer>
    {props.children}
  </TabBoxContainer>
);

const PlayerInfo = (props) => (
  <PlayerInfoContainer>
    <TabContainer
      tabTitle={props?.playerDetails?.bio?.fullName || ""}
      editAction={() => alert("Under Development")}
      children={
        <table
          cellPadding={6}
          cellSpacing={5}
          style={{marginTop: -16, paddingBottom: 20}}
        >
          <tr>
            <td>
              <PlayerInfoTextLabel>Height</PlayerInfoTextLabel>
              <InputBox
                style={{maxWidth: 100}}
                value={props?.playerDetails?.bio?.height || ""}
                placeholder="0 cm"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Weight</PlayerInfoTextLabel>
              <InputBox
                style={{maxWidth: 100}}
                value={props?.playerDetails?.bio?.weight || ""}
                placeholder="0 kg"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Date of Birth</PlayerInfoTextLabel>
              <TextValue>
                <InputBox
                  style={{maxWidth: 100}}
                  value={
                    (props?.playerDetails?.bio?.dateOfBirth &&
                      moment(props.playerDetails.bio.dateOfBirth).format(
                        "DD/MM/YYYY"
                      )) ||
                    ""
                  }
                  placeholder="DD/MM/YYYY"
                />
              </TextValue>
            </td>
          </tr>

          <tr>
            <td>
              <PlayerInfoTextLabel>Position</PlayerInfoTextLabel>
              <InputBox
                style={{maxWidth: 100}}
                value={props?.playerDetails?.bio?.position || ""}
                placeholder="RW"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Work Rate</PlayerInfoTextLabel>
              <InputBox
                style={{maxWidth: 100}}
                value={props?.playerDetails?.bio?.workRate || ""}
                placeholder="0"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Preferred foot</PlayerInfoTextLabel>
              <InputBox
                style={{maxWidth: 100}}
                value={props?.playerDetails?.bio?.preferredFoot || ""}
                placeholder="Right"
              />
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
      addAction={() => alert("Under Development")}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={2} style={{margin: "0 auto", paddingBottom: 20}}>
          {props?.playerDetails?.trophies?.length &&
            props.playerDetails.trophies.map((trophyInfo) => {
              return (
                <tr>
                  <td>
                    <InputBox
                      style={{textAlign: "right"}}
                      value={trophyInfo?.leagueName || ""}
                      placeholder="La Liga"
                    />
                  </td>
                  <td>
                    <TrophyIconContainer>
                      <Icon name="trophy" size="big" />
                    </TrophyIconContainer>
                  </td>
                  <td>
                    <InputBox
                      style={{fontSize: 18, width: 40, maxHeight: 32}}
                      value={trophyInfo?.number || ""}
                      placeholder="0"
                    />
                  </td>
                  <td>
                    <InputBox
                      value={trophyInfo?.type || ""}
                      placeholder="Trophies/Titles"
                    />
                  </td>
                </tr>
              );
            })}
        </table>
      }
    />
  </TrophiesContainer>
);

const ConnectWithPlayer = (props) => (
  <ConnectWithPlayerContainer>
    <TabContainer
      tabTitle={"Connect with player"}
      addAction={() => alert("Under Development")}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{margin: "auto 0", paddingBottom: 20}}>
          {props?.playerDetails?.socialAccounts?.length &&
            props.playerDetails.socialAccounts.map((socialData) => {
              return (
                <Row style={{alignItems: "center"}}>
                  <SocialIconContainer>
                    <Icon
                      name={getSocialIcon(socialData?.account || "")}
                      size="large"
                    />
                  </SocialIconContainer>

                  <InputBox
                    style={{height: 32}}
                    value={socialData?.link || ""}
                    placeholder="Link"
                  />

                  <DeleteButton
                    onClick={() => alert("Under Development")}
                    style={{marginLeft: 12}}
                  >
                    -
                  </DeleteButton>
                </Row>
              );
            })}
        </Column>
      }
    />
  </ConnectWithPlayerContainer>
);

const Skills = (props) => (
  <SkillContainer>
    <TabContainer
      tabTitle={props?.categoryName || ""}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{paddingBottom: 20, gap: 15}}>
          {props?.subCategories?.length &&
            props.subCategories.map((skill) => {
              return (
                <SkillProgressContainer>
                  <TextLabel>{skill?.skillName || ""}</TextLabel>
                  <ProgressSliderContainer>
                    <ProgressSlider
                      min={0}
                      max={100}
                      value={skill?.progress || 0}
                    />
                  </ProgressSliderContainer>
                  <TextLabel style={{fontWeight: "bold"}}>
                    {skill?.progress || 0}
                  </TextLabel>
                </SkillProgressContainer>
              );
            })}
        </Column>
      }
    />
  </SkillContainer>
);

const EditPlayerDetails = (props) => {
  return (
    <CustomModal
      isOpen={true}
      children={
        <DetailsContainer>
          <Row style={{paddingBottom: 15, justifyContent: "flex-end", gap: 6}}>
            <Column>
              <ThemeButton
                isDisabled={false}
                customCss={{background: "#A8A8A8"}}
                onClickAction={() => props.onCloseAction(props.modalName || "")}
                children="Cancel"
              />
            </Column>
            <Column>
              <ThemeButton
                isDisabled={false}
                onClickAction={() => alert("Under Development")}
                children="Save All"
              />
            </Column>
          </Row>
          <Column
            style={{
              overflowY: "auto",
              maxHeight: "calc(100vh - 260px)",
              paddingBottom: 20,
            }}
          >
            <DeatilTabs>
              <UploadPhoto {...props} />
              <PlayerInfo {...props} />
              <Trophies {...props} />
              <ConnectWithPlayer {...props} />
            </DeatilTabs>
            <DeatilTabs>
              {props?.playerDetails?.skills?.length &&
                props.playerDetails.skills.map((skill) => {
                  return <Skills {...skill} />;
                })}
            </DeatilTabs>
          </Column>
        </DetailsContainer>
      }
    />
  );
};

export default EditPlayerDetails;
