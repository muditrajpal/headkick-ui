import React, {useState} from "react";
import styled from "styled-components";
import ProgressBar from "shared/components/ProgressBar";
import ThemeButton from "shared/components/ThemeButton";

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
  gap: 80px;
  border-bottom: 1px solid #e8ebfc;
  margin-top: 10px;
  padding: 0 20px;
  justify-content: space-between;
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
  DRIBBLING: "DRIBBLING",
  DEFENDING: "DEFENDING",
  PASSING: "PASSING",
  SHOOTING: "SHOOTING",
};

const PlayerSkill = (props) => (
  <TabBoxContainer>
    <TabTitleContainer>
      <TabTitle>TRAINABLE ATTRIBUTES</TabTitle>
      <EditTabLink onClick={() => alert("Under Development")}>
        {"edit >>"}
      </EditTabLink>
    </TabTitleContainer>
    <SkillProgressContainer>
      <TextLabel>Sprint Speed</TextLabel>
      <ProgressBarContainer>
        <ProgressBar progress={30} isReversed={false} />
      </ProgressBarContainer>
    </SkillProgressContainer>
    <SkillProgressContainer>
      <TextLabel>Strength</TextLabel>
      <ProgressBarContainer>
        <ProgressBar progress={60} isReversed={false} />
      </ProgressBarContainer>
    </SkillProgressContainer>
    <SkillProgressContainer>
      <TextLabel>Att. Position</TextLabel>
      <ProgressBarContainer>
        <ProgressBar progress={90} isReversed={false} />
      </ProgressBarContainer>
    </SkillProgressContainer>
    <SkillProgressContainer>
      <TextLabel>Ball Control</TextLabel>
      <ProgressBarContainer>
        <ProgressBar progress={95} isReversed={false} />
      </ProgressBarContainer>
    </SkillProgressContainer>
  </TabBoxContainer>
);

const TabsSelector = (props) => (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={props?.selectedTrainingType === TrainingTypes.DRIBBLING}
      onClick={() => props.selectTrainingType(TrainingTypes.DRIBBLING)}
    >
      Dribbling
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedTrainingType === TrainingTypes.DEFENDING}
      onClick={() => props.selectTrainingType(TrainingTypes.DEFENDING)}
    >
      Defending
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedTrainingType === TrainingTypes.PASSING}
      onClick={() => props.selectTrainingType(TrainingTypes.PASSING)}
    >
      Passing
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedTrainingType === TrainingTypes.SHOOTING}
      onClick={() => props.selectTrainingType(TrainingTypes.SHOOTING)}
    >
      Shooting
    </TabContainer>
  </TabsSelectorContainer>
);

const PlayerInfo = (props) => (
  <PlayerInfoContainer>
    <InfoContainer style={{gap: 27}}>
      <PlayerBioContainer>
        <PlayerPhoto src="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4" />
        <Column style={{gap: 12}}>
          <PlayerInfoText>Lionel Messi</PlayerInfoText>
          <Row style={{gap: 18}}>
            <Column style={{gap: 3}}>
              <PlayerInfoHeading>Position</PlayerInfoHeading>
              <PlayerInfoValue>RW</PlayerInfoValue>
            </Column>
            <Column style={{gap: 3}}>
              <PlayerInfoHeading>Height</PlayerInfoHeading>
              <PlayerInfoValue>185cm</PlayerInfoValue>
            </Column>
            <Column style={{gap: 3}}>
              <PlayerInfoHeading>Foot</PlayerInfoHeading>
              <PlayerInfoValue>R</PlayerInfoValue>
            </Column>
          </Row>
        </Column>
      </PlayerBioContainer>
    </InfoContainer>
    <PlayerSkill {...props} />
  </PlayerInfoContainer>
);

const DrillInfoContainer = (drills) => (
  <DrillsContainer>
    <DrillTab>Drill Number 1</DrillTab>
    <DrillTab>Drill Number 2</DrillTab>
    <DrillTab>Drill Number 3</DrillTab>
    <DrillTab>Drill Number 4</DrillTab>
    <DrillTab>Drill Number 5</DrillTab>
  </DrillsContainer>
);

const PlayerTrainingInfo = (props) => {
  const [selectedTrainingType, selectTrainingType] = useState(
    TrainingTypes.DRIBBLING
  );
  return (
    <PlayerTrainingInfoContainer>
      <TabsSelector
        selectedTrainingType={selectedTrainingType}
        selectTrainingType={selectTrainingType}
      />
      <EditButtonContainer>
        <ThemeButton
          customCss={{width: 148}}
          isDisabled={false}
          onClickAction={() => props.toggleStateBoolean("isEditDrillPopUpOpen")}
          children="Edit Drills"
        />
      </EditButtonContainer>
      <DrillInfoContainer />
    </PlayerTrainingInfoContainer>
  );
};

const ViewTraining = (props) => (
  <ViewTrainingContainer>
    <HeaderText>View Training</HeaderText>
    <InfoContainer>
      <PlayerInfo {...props} />
      <PlayerTrainingInfo {...props} />
    </InfoContainer>
  </ViewTrainingContainer>
);

export default ViewTraining;
