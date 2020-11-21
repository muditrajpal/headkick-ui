import React, { useEffect, useRef, useState } from "react";
import CustomModal from "shared/components/CustomModal";
import styled from "styled-components";
import ThemeButton from "shared/components/ThemeButton";
import ProgressSlider from "shared/components/ProgressSlider";
import { Icon, Image } from "semantic-ui-react";
import queryString from "query-string";
import { fetchPlayerDetail ,updatePlayerData } from "apis/player";
import { uploadImage } from "apis/upload";
import _groupBy from "lodash/groupBy";
import history from "historyObj";

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

const DetailTabs = styled.div`
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
    case "facebook":
      return "facebook f";
    case "twitter":
      return "twitter";
    case "instagram":
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

const UploadPhoto = ({ img,setPlayerImageFile, imageFileInputRef ,setPlayerImage, playerImage}) => {
  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let files = e.target.files[0];
    reader.onloadend = () => {
      setPlayerImageFile(files);
      setPlayerImage(reader.result);
    };
    reader.readAsDataURL(files);
  };
  return (
  <UploadPhotoContainer>
    <UploadPhotoGrid>
      {img||playerImage ? <Image avator src={playerImage||img||""} /> : <Icon name="plus" size="huge" />}
    </UploadPhotoGrid>
    <ThemeButton
      customCss={{ width: "148px" }}
      isDisabled={false}
      onClickAction={() => imageFileInputRef.current.click()}
      children="Upload Photo"
    />
    <input
      type="file"
      ref={imageFileInputRef}
      onChange={handleImageChange}
      hidden
      accept="image/x-png,image/jpeg"
    />
  </UploadPhotoContainer>
);
  }
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

const PlayerInfo = ({ playerDetail, onChange }) => (
  <PlayerInfoContainer>
    <TabContainer
      tabTitle={playerDetail.name}
      editAction={() => alert("Under Development")}
      children={
        <table
          cellPadding={6}
          cellSpacing={5}
          style={{ marginTop: -16, paddingBottom: 20 }}
        >
          <tr>
            <td>
              <PlayerInfoTextLabel>Height</PlayerInfoTextLabel>
              <InputBox
                style={{ maxWidth: 100 }}
                value={playerDetail.height}
                onChange={(e) => onChange("height", e.target.value)}
                placeholder="0 cm"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Weight</PlayerInfoTextLabel>
              <InputBox
                style={{ maxWidth: 100 }}
                value={playerDetail.weight}
                onChange={(e) => onChange("weight", e.target.value)}
                placeholder="0 kg"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Date of Birth</PlayerInfoTextLabel>
              <TextValue>
                <InputBox
                  style={{ maxWidth: 100 }}
                  value={playerDetail.dob}
                  onChange={(e) => onChange("dob", e.target.value)}
                  placeholder="DD/MM/YYYY"
                />
              </TextValue>
            </td>
          </tr>

          <tr>
            <td>
              <PlayerInfoTextLabel>Position</PlayerInfoTextLabel>
              <InputBox
                style={{ maxWidth: 100 }}
                value={playerDetail.position}
                onChange={(e) => onChange("position", e.target.value)}
                placeholder="RW"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Work Rate</PlayerInfoTextLabel>
              <InputBox
                style={{ maxWidth: 100 }}
                value={playerDetail.workRate}
                onChange={(e) => onChange("workRate", e.target.value)}
                placeholder="0"
              />
            </td>

            <td>
              <PlayerInfoTextLabel>Preferred foot</PlayerInfoTextLabel>
              <InputBox
                style={{ maxWidth: 100 }}
                value={playerDetail.preferredFoot}
                onChange={(e) => onChange("preferredFoot", e.target.value)}
                placeholder="Right"
              />
            </td>
          </tr>
        </table>
      }
    />
  </PlayerInfoContainer>
);

const Trophies = ({ trophies, onChange }) => (
  <TrophiesContainer>
    <TabContainer
      tabTitle={"Trophies"}
      addAction={() => alert("Under Development")}
      editAction={() => alert("Under Development")}
      children={
        <table cellPadding={2} style={{ margin: "0 auto", paddingBottom: 20 }}>
          {trophies.length &&
            trophies.map((trophyInfo, i) => {
              return (
                <tr>
                  <td>
                    <InputBox
                      style={{ textAlign: "right" }}
                      value={trophyInfo.title}
                      placeholder="La Liga"
                      onChange={(e) =>
                        onChange(`trophies.${i}.title`, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <TrophyIconContainer>
                      <Icon name="trophy" size="big" />
                    </TrophyIconContainer>
                  </td>
                  <td>
                    <InputBox
                      style={{ fontSize: 18, width: 40, maxHeight: 32 }}
                      value={trophyInfo.count}
                      placeholder="0"
                      onChange={(e) =>
                        onChange(`trophies.${i}.count`, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <InputBox
                      value={trophyInfo.type}
                      placeholder="Trophies/Titles"
                      onChange={(e) =>
                        onChange(`trophies.${i}.type`, e.target.value)
                      }
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

const ConnectWithPlayer = ({ social, onChange }) => (
  <ConnectWithPlayerContainer>
    <TabContainer
      tabTitle={"Connect with player"}
      addAction={() => alert("Under Development")}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{ margin: "auto 0", paddingBottom: 20 }}>
          {Object.keys(social).length &&
            Object.keys(social).map((id) => {
              const socialData = social[id];
              return (
                <Row style={{ alignItems: "center" }}>
                  <SocialIconContainer>
                    <Icon name={getSocialIcon(id)} size="large" />
                  </SocialIconContainer>

                  <InputBox
                    style={{ height: 32 }}
                    value={socialData || ""}
                    placeholder="Link"
                    onChange={(e) => onChange(`social.${id}`, e.target.value)}
                  />

                  <DeleteButton
                    style={{ marginLeft: 12 }}
                    onClick={(e) => onChange(`social.${id}`, "")}
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

const Skills = ({ skills, onChange }) => (
  <SkillContainer>
    <TabContainer
      tabTitle={skills[0].type}
      editAction={() => alert("Under Development")}
      children={
        <Column style={{ paddingBottom: 20, gap: 15 }}>
          {skills.map((skill, i) => {
            return (
              <SkillProgressContainer>
                <TextLabel>{skill.name || ""}</TextLabel>
                <ProgressSliderContainer>
                  <ProgressSlider
                    min={0}
                    max={100}
                    value={skill.value || 0}
                    onChange={(e) =>
                      onChange(
                        `skills.${skill.type}.${i}.value`,
                        e.target.value
                      )
                    }
                  />
                </ProgressSliderContainer>
                <TextLabel style={{ fontWeight: "bold" }}>
                  {skill.value || 0}
                </TextLabel>
              </SkillProgressContainer>
            );
          })}
        </Column>
      }
    />
  </SkillContainer>
);

const AcademiesPlayerEdit = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const playerId = queryStringSearch.id;
  const canEdit = queryStringSearch.canEdit;
  const [playerDetail, setPlayerDetail] = useState(null);
  const [playerImage, setPlayerImage] = useState("");
  const [playerImageFile, setPlayerImageFile] = useState("");

  
  const imageFileInputRef = useRef();
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
          if (data.result.skills) {
            data.result.skills = _groupBy(data.result.skills, "type");
            console.log(data.result.skills);
          }
          setPlayerDetail(data.result);
        }
      })
      .catch(() => {});
  }, [playerId]);
  function onChangeValues(key, value) {
    key = key.split(".");
    let temp = playerDetail;
    for (let i = 0; i < key.length - 1; i++) {
      temp = temp[key[i]];
    }
    temp[key[key.length - 1]] = value;
    setPlayerDetail({ ...playerDetail });
  }
  async function onSaveAll() {
    const playerDetailObj = {...playerDetail};
    const skills = Object.keys(playerDetailObj.skills)
      .map((id) => playerDetailObj.skills[id])
      .flat();
      playerDetailObj.skills = skills;
      playerDetailObj.academy=playerDetailObj.academy._id;
      playerDetailObj.nationality=playerDetailObj.nationality._id
    if(playerImageFile){
      playerDetailObj.img = await uploadImage(playerImageFile);
    }
    const status = await updatePlayerData(playerDetailObj);
    if(status)
    history.push(
      `/academies/players/select?id=${playerDetail._id}`
    )
  }
  if (!playerDetail) return <div />;
  return (
    <CustomModal
      isOpen={true}
      children={
        <DetailsContainer>
          <Row
            style={{ paddingBottom: 15, justifyContent: "flex-end", gap: 6 }}
          >
            <Column>
              <ThemeButton
                isDisabled={false}
                customCss={{ background: "#A8A8A8" }}
                onClickAction={() =>
                  history.push(
                    `/academies/players/select?id=${playerDetail._id}`
                  )
                }
                children="Cancel"
              />
            </Column>
            <Column>
              <ThemeButton
                isDisabled={false}
                onClickAction={() => onSaveAll()}
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
            <DetailTabs>
              <UploadPhoto
                img={playerDetail.img}
                imageFileInputRef={imageFileInputRef}
                setPlayerImage={setPlayerImage}
                playerImage={playerImage}
                setPlayerImageFile={setPlayerImageFile}
              />
              <PlayerInfo
                playerDetail={playerDetail}
                onChange={onChangeValues}
              />
              <Trophies
                trophies={playerDetail.trophies}
                onChange={onChangeValues}
              />
              <ConnectWithPlayer
                social={playerDetail.social}
                onChange={onChangeValues}
              />
            </DetailTabs>
            <DetailTabs>
              {Object.keys(playerDetail.skills).length &&
                Object.keys(playerDetail.skills).map((id) => {
                  return (
                    <Skills
                      skills={playerDetail.skills[id]}
                      onChange={onChangeValues}
                    />
                  );
                })}
            </DetailTabs>
          </Column>
        </DetailsContainer>
      }
    />
  );
};

export default AcademiesPlayerEdit;
