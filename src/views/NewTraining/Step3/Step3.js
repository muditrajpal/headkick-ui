import React, {useState} from "react";
import styled from "styled-components";
import ThemeButton from "shared/components/ThemeButton";
import Attack from "./Attack";
import Defence from "./Defence";
import PhysicalAndMental from "./PhysicalAndMental";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
`;

const Divider = styled(Row)`
  flex: 1;
  border-bottom: 1px solid #e6e6e6;
  margin: 10px 0 24px 0;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  gap: 33px;
`;

const TabsSelectorContainer = styled(Row)`
  flex: 1;
  gap: 80px;
  border-bottom: 1px solid #e8ebfc;
  margin-top: 24px;
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

export const DrillTypes = {
  ATTACK: "ATTACK",
  DEFENCE: "DEFENCE",
  PHYSICAL_AND_MENTAL: "PHYSICAL_AND_MENTAL",
};

const TabsSelector = (props) => (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.ATTACK}
      onClick={() => props.selectDrillType(DrillTypes.ATTACK)}
    >
      Attack ({"0"})
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.DEFENCE}
      onClick={() => props.selectDrillType(DrillTypes.DEFENCE)}
    >
      Defence ({"0"})
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.PHYSICAL_AND_MENTAL}
      onClick={() => props.selectDrillType(DrillTypes.PHYSICAL_AND_MENTAL)}
    >
      Physical and Mental ({"0"})
    </TabContainer>
  </TabsSelectorContainer>
);

const Step3 =  ({ trainingData, onChange,toggleStep ,saveTraining}) => {
  const [selectedDrillType, selectDrillType] = useState(DrillTypes.ATTACK);
  return (
    <>
      <HeaderText>Step 3/3: Select Drills</HeaderText>
      <TabsSelector
        selectedDrillType={selectedDrillType}
        selectDrillType={selectDrillType}
      />
      {selectedDrillType === DrillTypes.ATTACK && <Attack trainingData={trainingData} onChange={onChange}/>}
      {selectedDrillType === DrillTypes.DEFENCE && <Defence trainingData={trainingData} onChange={onChange} />}
      {selectedDrillType === DrillTypes.PHYSICAL_AND_MENTAL && (
        <PhysicalAndMental  trainingData={trainingData} onChange={onChange}/>
      )}
      <Divider />
      <ButtonContainer>
        <ThemeButton
          customCss={{
            width: 145,
            background: "#FFFFFF",
            color: "#0D1757",
            border: "1px solid #0D1757",
          }}
          isDisabled={false}
          onClickAction={() => toggleStep(2)}
          children="Previous"
        />
        <ThemeButton
          customCss={{width: 145}}
          isDisabled={false}
          onClickAction={saveTraining}
          children="Add training"
        />
      </ButtonContainer>
    </>
  );
};

export default Step3;
