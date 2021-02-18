import React from "react";
import styled from "styled-components";
import { Input, Search, Checkbox } from "semantic-ui-react";
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

const Header = styled(Row)`
  justify-content: space-between;
`;

const HeaderText = styled(Column)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #12216d;
`;

const SearchBox = styled(Search)`
  width: 100%;
  max-width: 300px;
  .ui.search {
    width: 100%;
  }
  .ui.input {
    width: 100%;
  }
`;

const Divider = styled(Row)`
  flex: 1;
  border-bottom: 1px solid #e6e6e6;
  margin: 24px 0;
`;

const ButtonContainer = styled(Row)`
  flex: 1;
  justify-content: center;
  gap: 33px;
`;

const PlayerSelectorContainer = styled.table`
  tr:nth-child(even) {
    background: #f6f7fe;
  }
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
  margin-top: 34px;
`;

const TableHeader = styled.tr`
  background: #e9ecfb;
  color: #000000;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
`;

const TableRow = styled.tr`
  color: #333333;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

const TableColumn = styled.td`
  padding: 19px 0;
`;

const CheckBoxTableColumn = styled.td`
  padding: 6px 0 0 30px;
  width: 10%;
`;

const PlayerInfoCenterAligned = styled(TableColumn)`
  text-align: center;
`;

const PlayerNamePhotoTableColumn = styled.td`
  width: 20%;
`;

const PlayerNamePhotoContainer = styled(Row)`
  align-items: center;
  gap: 10px;
`;

const PlayerPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const PlayerInfoColumns = ({ photo, name, position, matches, goals }) => (
  <>
    <PlayerNamePhotoTableColumn>
      <PlayerNamePhotoContainer>
        <PlayerPhoto src={photo} />
        <Column>{name}</Column>
      </PlayerNamePhotoContainer>
    </PlayerNamePhotoTableColumn>
    <PlayerInfoCenterAligned>{position}</PlayerInfoCenterAligned>
    <PlayerInfoCenterAligned>{matches}</PlayerInfoCenterAligned>
    <PlayerInfoCenterAligned>{goals}</PlayerInfoCenterAligned>
  </>
);

const Step2 = ({ playersList, toggleStep, trainingData, onChange }) => (
  <>
    <Header>
      <HeaderText>
        Step 2/3: Select Player ({trainingData.players.length})
      </HeaderText>
      <SearchBox placeholder="Search for player and positions" />
    </Header>
    <PlayerSelectorContainer>
      <TableHeader>
        <CheckBoxTableColumn>
          <Checkbox 
           onChange={(e, { checked })=> {
            if(checked){
              trainingData.players=playersList.map(r=>r._id)
            }else{
              trainingData.players = []
            }
            onChange("players",trainingData.players)
          }}
          checked={playersList.every(player=>trainingData.players.includes(player._id))}/>
          
        </CheckBoxTableColumn>
        <TableColumn>Name</TableColumn>
        <PlayerInfoCenterAligned>Position</PlayerInfoCenterAligned>
        <PlayerInfoCenterAligned>Matches</PlayerInfoCenterAligned>
        <PlayerInfoCenterAligned>Goals</PlayerInfoCenterAligned>
      </TableHeader>
      {playersList.map((player) => (
        <TableRow>
          <CheckBoxTableColumn>
            <Checkbox
            onChange={(e, { checked })=> {
              if(checked){
                trainingData.players.push(player._id)
              }else{
                trainingData.players = trainingData.players.filter(r=>r!==player._id)
              }
              onChange("players",trainingData.players)
            }}
            checked={trainingData.players.includes(player._id)}/>
          </CheckBoxTableColumn>
          <PlayerInfoColumns
            photo={player.img}
            name={player.name}
            position={player.position}
            matches={player.matches}
            goals={player.goals}
          />
        </TableRow>
      ))}
    </PlayerSelectorContainer>
    <Divider />
    <ButtonContainer>
      <ThemeButton
        customCss={{
          width: 121,
          background: "#FFFFFF",
          color: "#0D1757",
          border: "1px solid #0D1757",
        }}
        isDisabled={false}
        onClickAction={() => toggleStep(1)}
        children="Previous"
      />
      <ThemeButton
        customCss={{ width: 121 }}
        isDisabled={false}
        onClickAction={() => toggleStep(3)}
        children="Next"
      />
    </ButtonContainer>
  </>
);

export default Step2;
