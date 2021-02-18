import React from "react";
import CustomModal from "shared/components/CustomModal";
import styled from "styled-components";
import { Icon, Checkbox, Input } from "semantic-ui-react";
import ThemeButton from "shared/components/ThemeButton";
import history from "historyObj";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const DrillContainer = styled(Column)`
  width: 100%;
  padding: 19px 30px 26px 30px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 1px 3px 17px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

const CrossButtonContainer = styled(Row)`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 4px;
`;

const CrossButton = styled(Column)`
  cursor: pointer;
  background: #8fc9ff;
  color: #ffffff;
  width: 27px;
  height: 24px;
  justify-content: center;
  align-items: center;
  padding-left: 3px;
`;

const DrillTypeContainer = styled(Column)`
  width: 48%;
`;

const VerticalDivider = styled(Column)`
  border: 1px solid #e6e6e6;
  height: 50vh;
  width: 1px;
`;

const HorizontalDivider = styled(Row)`
  flex: 1;
  border-bottom: 1px solid #e6e6e6;
  margin: 24px 0;
`;

const HeaderText = styled(Column)`
  padding-bottom: 30px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 19px;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  gap: 33px;
`;

const DrillListContainer = styled(Column)`
  border: 1px solid #e9ecfb;
  border-radius: 7px;
  max-height: calc(100vh - 500px);
  overflow-y: auto;
  div:nth-child(2n) {
    background-color: #f6f7fe;
  }
`;

const InfoRow = styled(Row)`
  justify-content: space-between;
  padding: 24px 30px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
`;

const InputLabelText = styled(Row)`
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  margin-bottom: 7.5px;
`;

const AddDrillsContainer = styled(Column)`
  gap: 34px;
  max-height: calc(100vh - 500px);
  overflow-y: auto;
`;

const AddMoreButton = styled.div`
  cursor: pointer;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #1f94ff;
`;

const CurrentDrills = ({ drills, onChange,type }) => (
  <DrillTypeContainer>
    <HeaderText>Current Drills</HeaderText>
    <DrillListContainer>
      {drills.filter((drill) => drill.type === type).map((drill, i) => (
        drill.name?
        <InfoRow>
          {drill.name}
          <Checkbox
            onChange={(e, { checked }) => {
              drill.inactive = !checked;
              onChange(`drills`, drills);
            }}
            checked={!drill.inactive}
          />
        </InfoRow>:""
      ))}
    </DrillListContainer>
  </DrillTypeContainer>
);

const AddDrills = ({ onChange, type, drills }) => (
  <DrillTypeContainer>
    <HeaderText>Add Drills</HeaderText>
    <AddDrillsContainer>
      {drills
        .filter((drill) => drill.type === type)
        .map((drill) => (
          <Column>
            <InputLabelText>Drill Name</InputLabelText>
            <Input placeholder={`${type} Drill 1`} value={drill.name} 
            onChange={(e)=>{
              drill.name=e.target.value;
              onChange("drills",[...drills]);
            }}
            />
          </Column>
        ))}

      <Row style={{ justifyContent: "flex-end" }}>
        <AddMoreButton
          onClick={() => {
            drills.push({
              name: "",
              type,
            });
            onChange("drills", drills);
          }}
        >
          + Add More
        </AddMoreButton>
      </Row>
    </AddDrillsContainer>
  </DrillTypeContainer>
);

const EditDrills = ({ onCloseAction, trainingDetail, onChange, type ,onUpdateTraining}) => (
  <CustomModal
    isOpen={true}
    width="65%"
    children={
      <DrillContainer>
        <CrossButtonContainer>
          <CrossButton onClick={onCloseAction}>
            <Icon name="close" size="small" />
          </CrossButton>
        </CrossButtonContainer>
        <Row style={{ justifyContent: "space-between" }}>
          <CurrentDrills drills={trainingDetail.drills} type={type} onChange={onChange} />
          <VerticalDivider />
          <AddDrills type={type} onChange={onChange} drills={trainingDetail.drills}/>
        </Row>
        <HorizontalDivider />
        <ButtonContainer>
          <ThemeButton
            customCss={{
              width: 121,
              background: "#FFFFFF",
              color: "#0D1757",
              border: "1px solid #0D1757",
            }}
            isDisabled={false}
            onClickAction={()=>{
              onCloseAction();
              onChange("drills",trainingDetail.drills.filter(r=>r.name))
            }}
            children="Previous"
          />
          <ThemeButton
            customCss={{ width: 121 }}
            isDisabled={false}
            onClickAction={() => {
              onUpdateTraining()
            }}
            children="Next"
          />
        </ButtonContainer>
      </DrillContainer>
    }
  />
);

export default EditDrills;
