import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "shared/components/ProgressBar";
import ThemeButton from "shared/components/ThemeButton";
import queryString from "query-string";
import { fetchTrainingDetail, addUpdateTraining } from "apis/training";
import history from "historyObj";
import EditDrills from "./EditDrills";
import { Icon } from "semantic-ui-react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ViewTrainingContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  gap: 30px;
  float: left;
  padding: 31px 30px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
  min-height: 533px;
  max-height: calc(100vh - 13.5rem);
  overflow-y: auto;
`;

const HeaderText = styled(Row)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
`;

const InfoContainer = styled(Row)`
  justify-content: space-between;
`;

const PlayerInfoContainer = styled(Column)`
  width: 32.33%;
  padding: 32px;
  box-shadow: 1px 3px 17px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  gap: 30px;
`;

const PlayerTrainingInfoContainer = styled(Column)`
  width: 65.66%;
  border: 1px solid #e9ecfb;
  border-radius: 10px;
  padding-bottom: 34px;
`;

const PlayerBioContainer = styled(Row)`
  flex: 1;
  align-items: center;
  gap: 27px;
`;

const PlayerPhoto = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const PlayerInfoText = styled(Row)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
`;

const PlayerInfoHeading = styled(PlayerInfoText)`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`;

const PlayerInfoValue = styled(PlayerInfoText)`
  font-size: 14px;
  line-height: 16px;
  color: #12216d;
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
  margin-bottom: 12px;
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

const SkillProgressContainer = styled(Row)`
  flex: 1;
  width: 100%;
  padding: 10px 22px;
  justify-content: space-between;
`;

const TextLabel = styled(Column)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`;

const ProgressBarContainer = styled(Column)`
  width: 75%;
  align-items: flex-end;
`;

const TabsSelectorContainer = styled(Row)`
  gap: 25px;
  border-bottom: 1px solid #e8ebfc;
  margin-top: 10px;
  padding: 0 20px;
  justify-content: space-between;
`;

const TabContainer = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  color: #12216d;
  border-bottom: ${({ isSelected }) =>
    isSelected ? "4px solid #0d1757" : "none"};
  padding: 10px;
  cursor: pointer;
  height: 50px;
`;

const EditButtonContainer = styled(Row)`
  justify-content: flex-end;
  padding: 30px;
`;

const DrillsContainer = styled(Row)`
  gap: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 31px;
`;

const DrillTab = styled(Column)`
  width: 48%;
  padding: 24px 29px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
`;

export const TrainingTypes = {
  DRIBBLING: "Dribbling",
  DEFENDING: "Defending",
  PASSING: "Passing",
  SHOOTING: "Shooting",
  PHYSICAL_MENTAL: "Physical/Mental",
};

const PlayerSkill = ({skills}) => (
  <TabBoxContainer>
    <TabTitleContainer>
      <TabTitle>TRAINABLE ATTRIBUTES</TabTitle>
      <EditTabLink onClick={() => alert("Under Development")}>
        {"edit >>"}
      </EditTabLink>
    </TabTitleContainer>{
      skills.map(skill=>(
        <SkillProgressContainer>
        <TextLabel>{skill.name}</TextLabel>
        <ProgressBarContainer>
          <ProgressBar progress={skill.value} isReversed={false} />
        </ProgressBarContainer>
      </SkillProgressContainer>
      ))
    }
 
   
  </TabBoxContainer>
);

const TabsSelector = ({ trainingSubType, setTrainingSubType }) => (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={trainingSubType === TrainingTypes.DRIBBLING}
      onClick={() => setTrainingSubType(TrainingTypes.DRIBBLING)}
    >
      Dribbling
    </TabContainer>
    <TabContainer
      isSelected={trainingSubType === TrainingTypes.DEFENDING}
      onClick={() => setTrainingSubType(TrainingTypes.DEFENDING)}
    >
      Defending
    </TabContainer>
    <TabContainer
      isSelected={trainingSubType === TrainingTypes.PASSING}
      onClick={() => setTrainingSubType(TrainingTypes.PASSING)}
    >
      Passing
    </TabContainer>
    <TabContainer
      isSelected={trainingSubType === TrainingTypes.SHOOTING}
      onClick={() => setTrainingSubType(TrainingTypes.SHOOTING)}
    >
      Shooting
    </TabContainer>
    <TabContainer
      isSelected={trainingSubType === TrainingTypes.PHYSICAL_MENTAL}
      onClick={() => setTrainingSubType(TrainingTypes.PHYSICAL_MENTAL)}
    >
      Physical/Mental
    </TabContainer>
  </TabsSelectorContainer>
);

const PlayerInfo = ({ players }) => {
  const [index, setIndex] = useState(0);
  if (!players[index]) return <div />;
  return (
    <PlayerInfoContainer style={{ position: "relative" }}>
      {index != players.length - 1 ? (
        <Icon
          name="angle right"
          size="large"
          style={{
            position: "absolute",
            right: 0,
            top: "2rem",
            cursor: "pointer",
          }}
          color="teal"
          onClick={() => setIndex((i) => i + 1)}
        />
      ) : (
        ""
      )}
      {index != 0 ? (
        <Icon
          name="angle left"
          size="large"
          style={{
            position: "absolute",
            left: 0,
            top: "2rem",
            cursor: "pointer",
          }}
          color="teal"
          onClick={() => setIndex((i) => i - 1)}
        />
      ) : (
        ""
      )}
      <InfoContainer style={{ gap: 27 }}>
        <PlayerBioContainer>
          <PlayerPhoto src={players[index].img} />
          <Column style={{ gap: 12 }}>
            <PlayerInfoText>{players[index].name}</PlayerInfoText>
            <Row style={{ gap: 18 }}>
              <Column style={{ gap: 3 }}>
                <PlayerInfoHeading>Position</PlayerInfoHeading>
                <PlayerInfoValue>{players[index].position}</PlayerInfoValue>
              </Column>
              <Column style={{ gap: 3 }}>
                <PlayerInfoHeading>Height</PlayerInfoHeading>
                <PlayerInfoValue>{players[index].height}cm</PlayerInfoValue>
              </Column>
              <Column style={{ gap: 3 }}>
                <PlayerInfoHeading>Foot</PlayerInfoHeading>
                <PlayerInfoValue>
                  {players[index].preferredFoot}
                </PlayerInfoValue>
              </Column>
            </Row>
          </Column>
        </PlayerBioContainer>
      </InfoContainer>
      <PlayerSkill skills={players[index].skills} />
    </PlayerInfoContainer>
  );
};

const PlayerTrainingInfo = ({
  setShowEdit,
  trainingDetail,
  trainingSubType,
  setTrainingSubType,
}) => {
  return (
    <PlayerTrainingInfoContainer>
      <TabsSelector
        trainingSubType={trainingSubType}
        setTrainingSubType={setTrainingSubType}
      />
      <EditButtonContainer>
        <ThemeButton
          customCss={{ width: 148 }}
          isDisabled={false}
          onClickAction={() => setShowEdit((v) => !v)}
          children="Edit Drills"
        />
      </EditButtonContainer>
      <DrillsContainer>
        {trainingDetail.drills.map((drill) =>
         drill.type === trainingSubType ? (
            <DrillTab>{drill.name}</DrillTab>
          ) : (
            ""
          )
        )}
      </DrillsContainer>
    </PlayerTrainingInfoContainer>
  );
};

const ViewTraining = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const trainingId = queryStringSearch.id;
  const [trainingDetail, setTrainingDetail] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [trainingSubType, setTrainingSubType] = useState(
    TrainingTypes.DRIBBLING
  );
  useEffect(() => {
    if (!trainingId) {
      history.push("/academies/training/list");
      return;
    }
    fetchTrainingDetail({
      id: trainingId,
    })
      .then((data) => {
        if (data.sc && data.result) {
          setTrainingDetail(data.result);
        }
      })
      .catch(() => {});
  }, [trainingId]);

  async function onUpdateTraining() {
    trainingDetail.drills = trainingDetail.drills.filter((r) => r.name);
    onChangeValues("drills", trainingDetail.drills);

    const result = await addUpdateTraining({
      ...trainingDetail,
      drills:trainingDetail.drills.filter(drill=>!drill.inactive),
      academy: trainingDetail.academy._id,
      players: trainingDetail.players.map((player) => player._id),
    });
    if (result) {
      setTrainingDetail({
        ...trainingDetail,
        drills:trainingDetail.drills.filter(drill=>!drill.inactive)})
      setShowEdit((v) => !v);
    }
  }

  function onChangeValues(key, value) {
    key = key.split(".");
    let temp = trainingDetail;
    for (let i = 0; i < key.length - 1; i++) {
      temp = temp[key[i]];
    }
    temp[key[key.length - 1]] = value;
    setTrainingDetail({ ...trainingDetail });
  }
  if (!trainingDetail) return <div />;
  return (
    <ViewTrainingContainer>
      <HeaderText>View Training</HeaderText>
      <InfoContainer>
        <PlayerInfo players={trainingDetail.players} />
        <PlayerTrainingInfo
          trainingSubType={trainingSubType}
          setTrainingSubType={setTrainingSubType}
          trainingDetail={trainingDetail}
          setShowEdit={setShowEdit}
        />
      </InfoContainer>
      {showEdit ? (
        <EditDrills
          onCloseAction={() => {
            trainingDetail.drills = trainingDetail.drills.filter((r) => r.name);
            onChangeValues("drills", trainingDetail.drills);
            setShowEdit((v) => !v);
          }}
          trainingDetail={trainingDetail}
          onChange={onChangeValues}
          type={trainingSubType}
          onUpdateTraining={onUpdateTraining}
        />
      ) : (
        ""
      )}
    </ViewTrainingContainer>
  );
};

export default ViewTraining;
