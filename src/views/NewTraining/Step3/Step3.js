import React, {useState} from "react";
import styled from "styled-components";
import ThemeButton from "shared/components/ThemeButton";
import Dribbling from "./Dribbling";
import Defending from "./Defending";
import Passing from "./Passing";
import Shooting from "./Shooting";
import PhysicalAndMental from "./PhysicalAndMental";
import _groupBy from "lodash/groupBy"

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
  gap: 20px;
  border-bottom: 1px solid #e8ebfc;
  margin-top: 24px;
`;

const TabContainer = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 15px;
  justify-content: center;
  color: #12216d;
  border-bottom: ${({isSelected}) =>
    isSelected ? "4px solid #0d1757" : "none"};
  padding: 12px;
  cursor: pointer;
`;

export const DrillTypes = {
  DEFENDING: "DEFENDING",
  DRIBBLING: "DRIBBLING",
  PASSING: "PASSING",
  SHOOTING: "SHOOTING",
  PHYSICAL_AND_MENTAL: "PHYSICAL_AND_MENTAL",
};

const TabsSelector = (props) => {
  console.log(props.counts)
  return (
  <TabsSelectorContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.DEFENDING}
      onClick={() => props.selectDrillType(DrillTypes.DEFENDING)}
    >
      Defending ({props.counts.Defending?props.counts.Defending.length:"0"})
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.PASSING}
      onClick={() => props.selectDrillType(DrillTypes.PASSING)}
    >
      Passing ({props.counts.Passing?props.counts.Passing.length:"0"})
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.DRIBBLING}
      onClick={() => props.selectDrillType(DrillTypes.DRIBBLING)}
    >
      Dribbling ({props.counts.Dribbling?props.counts.Dribbling.length:"0"})
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.SHOOTING}
      onClick={() => props.selectDrillType(DrillTypes.SHOOTING)}
    >
      Shooting ({props.counts.Shooting?props.counts.Shooting.length:"0"})
    </TabContainer>
    <TabContainer
      isSelected={props?.selectedDrillType === DrillTypes.PHYSICAL_AND_MENTAL}
      onClick={() => props.selectDrillType(DrillTypes.PHYSICAL_AND_MENTAL)}
    >
      Physical and Mental ({props.counts["Physical/Mental"]?props.counts["Physical/Mental"].length:"0"})
    </TabContainer>
  </TabsSelectorContainer>
);
  }
const Step3 =  ({ trainingData, onChange,toggleStep ,saveTraining}) => {
  const [selectedDrillType, selectDrillType] = useState(DrillTypes.DEFENDING);
  return (
    <>
      <HeaderText>Step 3/3: Select Drills</HeaderText>
      <TabsSelector
        selectedDrillType={selectedDrillType}
        selectDrillType={selectDrillType}
        counts={_groupBy(trainingData.drills,"type")}
      />
           {selectedDrillType === DrillTypes.DEFENDING && <Defending trainingData={trainingData} onChange={onChange}/>}
           {selectedDrillType === DrillTypes.PASSING && <Passing trainingData={trainingData} onChange={onChange}/>}
           {selectedDrillType === DrillTypes.SHOOTING && <Shooting trainingData={trainingData} onChange={onChange}/>}
           {selectedDrillType === DrillTypes.DRIBBLING && <Dribbling trainingData={trainingData} onChange={onChange}/>}

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
