import React from "react";
import styled, {css} from "styled-components";
import {Select} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";
import ProgressBar from "shared/components/ProgressBar";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const SquadViewContainer = styled(Column)`
  gap: 32px;
  overflow-y: auto;
  max-height: calc(100vh - 380px);
`;

const FormationContainer = styled(Row)`
  flex: 1;
  gap: 46px;
  padding-top: 28px;
  align-items: center;
`;

const FormationText = styled(Column)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  color: #12216d;
`;

const CustomSelect = styled(Select)`
  .item {
    font-family: Lato !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #4d4d4d !important;
  }
`;

const FormationGroundPlaceHolder = styled.div`
  background: #009672;
  border-radius: 19px;
  height: 100%;
  width: 100%;
`;

const PlayerSelectorContainer = styled(Row)`
  justify-content: space-between;
  gap: 5px;
  padding: 15px;
`;

const PhotoGridContainer = styled(Column)`
  margin: auto;
  padding: 20px;
  font-family: Roboto;
  font-size: 12px;
  color: #707070;
  align-items: center;
  gap: 21px;
`;

const PhotoGrid = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #667ae5;
  border-radius: 50%;
  box-sizing: border-box;
  height: 117px;
  width: 117px;
  color: #0d1757;
  font-size: 12px;
  cursor: pointer;
`;

const PlayerInfoComparsionContainer = styled(Column)`
  flex: 1;
  height: 100%;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
`;

const PlayerInfoComparsionHeader = styled(Row)`
  height: 59px;
  background: #e9ecfb;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  justify-content: center;
  align-items: center;
`;

const PlayerInfoContainer = styled.table`
  tr:nth-child(even) {
    background: #f6f7fe;
  }
  border-collapse: collapse;
  border-spacing: 0;
`;

const PlayerInfo = styled.td`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #0d1757;
`;

const PlayerInfoLeft = styled(PlayerInfo)`
  text-align: right;
`;

const PlayerInfoCenter = styled(PlayerInfo)`
  text-align: center;
  font-weight: normal;
  color: #707070;
`;

const PlayerInfoRight = styled(PlayerInfo)`
  text-align: left;
`;

const ProgressContainer = styled(Row)`
  flex: 1;
  align-items: center;
  gap: 4px;
`;

const ProgressContainerRight = styled(ProgressContainer)`
  justify-content: flex-end;
`;

const ProgressContainerLeft = styled(ProgressContainer)`
  justify-content: flex-start;
`;

const SubstituteReserveContainer = styled(Column)`
  height: 100%;
  border: 1px solid #e9ecfb;
`;

const SubstituteReserveHeader = styled(Row)`
  height: 43px;
  background: #e9ecfb;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #12216d;
  align-items: center;
  padding: 0 21px;
`;

const SubstitutePlayers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  gap: 25px;
`;

const ReservePlayers = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;
  gap: 25px;
`;

const SubstituteReservePlayerContainer = styled(Column)`
  padding: 20px 30px;
  gap: 5px;
  align-items: center;
`;

const SubstituteReservePlayerPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const SubstituteReservePlayerName = styled(Row)`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #12216d;
`;

const SubstituteReservePlayerInfoContainer = styled(Row)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`;

const SubstituteReservePlayerPosition = styled(Column)`
  border-right: 0.5px solid #9c9c9c;
  align-items: flex-end;
  padding: 4px;
`;

const SubstituteReservePlayerSkillMoves = styled(Column)`
  border-left: 0.5px solid #9c9c9c;
  align-items: flex-start;
  padding: 4px;
`;

const formationsOptions = [
  {key: "4-1-2-3", value: "4-1-2-3", text: "4-1-2-3"},
  {key: "4-3-2-3", value: "4-3-2-3", text: "4-3-2-3"},
  {key: "4-6-2-3", value: "4-1-2-3", text: "4-1-2-3"},
  {key: "4-2-2-3", value: "4-1-2-3", text: "4-1-2-3"},
  {key: "4-7-2-3", value: "4-1-2-3", text: "4-1-2-3"},
  {key: "4-9-2-3", value: "4-1-2-3", text: "4-1-2-3"},
];

const FormationSelector = () => (
  <FormationContainer>
    <FormationText>Formation</FormationText>
    <Column style={{maxWidth: 241}}>
      <CustomSelect
        placeholder="Select formation"
        options={formationsOptions}
      />
    </Column>
  </FormationContainer>
);

const PlayerSelector = () => (
  <PlayerSelectorContainer>
    <PhotoGridContainer>
      <PhotoGrid onClick={() => alert("Under Development")}>
        <Icon name="plus" size="huge" />
      </PhotoGrid>
      Select Player to compare state
    </PhotoGridContainer>
    <Column />
    <PhotoGridContainer>
      <PhotoGrid onClick={() => alert("Under Development")}>
        <Icon name="plus" size="huge" />
      </PhotoGrid>
      Select Player to compare state
    </PhotoGridContainer>
  </PlayerSelectorContainer>
);

const PlayerInfoRow = ({leftText, centerText, rightText}) => (
  <tr>
    <PlayerInfoLeft>{leftText || ""}</PlayerInfoLeft>
    <PlayerInfoCenter>{centerText || ""}</PlayerInfoCenter>
    <PlayerInfoRight>{rightText || ""}</PlayerInfoRight>
  </tr>
);

const PlayerInfoRowWithProgress = ({leftText, centerText, rightText}) => (
  <tr>
    <PlayerInfoLeft>
      <ProgressContainerRight>
        {leftText || 0}
        <ProgressBar progress={leftText || 0} isReversed={true} />
      </ProgressContainerRight>
    </PlayerInfoLeft>
    <PlayerInfoCenter>{centerText}</PlayerInfoCenter>
    <PlayerInfoLeft>
      <ProgressContainerLeft>
        <ProgressBar progress={rightText || 0} isReversed={false} />
        {rightText || 0}
      </ProgressContainerLeft>
    </PlayerInfoLeft>
  </tr>
);

const PlayerInfoComparsion = (props) => (
  <PlayerInfoComparsionContainer>
    <PlayerInfoComparsionHeader>
      PLAYER INFO COMPARISON
    </PlayerInfoComparsionHeader>
    <Row>
      <PlayerInfoContainer cellPadding={10} style={{width: "100%"}}>
        <PlayerInfoRow />
        <PlayerInfoRow leftText="33" centerText="Age" rightText="33" />
        <PlayerInfoRow leftText="155cm" centerText="Height" rightText="155cm" />
        <PlayerInfoRow leftText="65kg" centerText="Weight" rightText="65kg" />
        <PlayerInfoRow leftText="ST" centerText="Position" rightText="ST" />
        <PlayerInfoRow leftText="Right" centerText="Foot" rightText="Right" />
        <PlayerInfoRow leftText="33" centerText="Age" rightText="33" />
        <PlayerInfoRow leftText="2" centerText="Skill Moves" rightText="2" />
        <PlayerInfoRowWithProgress
          leftText="80"
          centerText="Attacking Work Rate"
          rightText="80"
        />
        <PlayerInfoRowWithProgress
          leftText="30"
          centerText="Defensive Work Rate"
          rightText="30"
        />
        <PlayerInfoRowWithProgress
          leftText="80"
          centerText="Pace"
          rightText="10"
        />
        <PlayerInfoRowWithProgress
          leftText="90"
          centerText="Shooting"
          rightText="80"
        />
        <PlayerInfoRowWithProgress
          leftText="20"
          centerText="Passing"
          rightText="90"
        />
        <PlayerInfoRowWithProgress
          leftText="40"
          centerText="Dribbling"
          rightText="30"
        />
        <PlayerInfoRowWithProgress
          leftText="80"
          centerText="Defending"
          rightText="100"
        />
        <PlayerInfoRowWithProgress
          leftText="15"
          centerText="Physical"
          rightText="90"
        />
        <PlayerInfoRow />
      </PlayerInfoContainer>
    </Row>
  </PlayerInfoComparsionContainer>
);

const SubstituteReservePlayer = (props) => (
  <SubstituteReservePlayerContainer>
    <SubstituteReservePlayerPhoto src="https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4" />
    <SubstituteReservePlayerName>Lionel Messi</SubstituteReservePlayerName>
    <SubstituteReservePlayerInfoContainer>
      <SubstituteReservePlayerPosition>LW</SubstituteReservePlayerPosition>
      <SubstituteReservePlayerSkillMoves>22</SubstituteReservePlayerSkillMoves>
    </SubstituteReservePlayerInfoContainer>
  </SubstituteReservePlayerContainer>
);

const Substitutes = (props) => (
  <SubstituteReserveContainer>
    <SubstituteReserveHeader>Substitute</SubstituteReserveHeader>
    <SubstitutePlayers>
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
    </SubstitutePlayers>
  </SubstituteReserveContainer>
);

const Reserves = (props) => (
  <SubstituteReserveContainer>
    <SubstituteReserveHeader>Reserves</SubstituteReserveHeader>
    <ReservePlayers>
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
      <SubstituteReservePlayer {...props} />
    </ReservePlayers>
  </SubstituteReserveContainer>
);

const SquadView = (props) => (
  <SquadViewContainer>
    <FormationSelector />
    <Row style={{gap: 27, paddingTop: 30}}>
      <Column style={{flex: 1, gap: 32}}>
        <FormationGroundPlaceHolder />
        <Substitutes {...props} />
      </Column>
      <Column style={{flex: 1.5, gap: 32}}>
        <PlayerSelector {...props} />
        <PlayerInfoComparsion {...props} />
      </Column>
    </Row>
    <Reserves {...props} />
  </SquadViewContainer>
);

export default SquadView;
