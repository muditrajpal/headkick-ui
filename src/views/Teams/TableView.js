import React from "react";
import styled from "styled-components";
import {Icon} from "semantic-ui-react";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableViewContainer = styled(Row)`
  gap: 29px;
  justify-content: space-between;
  padding: 28px 0;
  overflow-y: auto;
  max-height: calc(100vh - 400px);
`;

const TableViewColumn = styled(Column)`
  width: 49%;
`;

const TableContainer = styled.table`
  width: 100%;
  tr:nth-child(even) {
    background: #f6f7fe;
  }
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
`;

const TableHeader = styled.tr`
  background: #e9ecfb;
  color: #000000;
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
`;

const TableColumn = styled.td`
  padding: 20px 30px;
`;

const TableColumnAlignedCenter = styled(TableColumn)`
  text-align: center;
`;

const PlayerNamePhotoTableColumn = styled.td`
  width: 30%;
  padding-left: 30px;
`;

const PlayerNamePhotoContainer = styled(Row)`
  align-items: center;
  gap: 10px;
`;

const PlayerInfoCenterAligned = styled(TableColumn)`
  text-align: center;
`;

const PlayerPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const AddPlayerContainer = styled(Row)`
  margin-top: 14px;
  justify-content: flex-end;
`;

const ActionColumn = styled(TableColumn)`
  text-align: center;
`;

const ActionButton = styled.div`
  display: flex;
  padding: 1px;
  width: 17px;
  padding: 0 0 2px 2.5px;
  cursor: pointer;
  background-color: #1f94ff;
  color: white;
  border-radius: 2px;
  margin: auto;
`;

const ReorderContainer = styled(TableColumn)`
  text-align: center;
  color: "#C4C4C4";
  opacity: 0.4;
`;

const AddPlayerButton = styled.div`
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #1f94ff;
`;

const HorizontalDivider = styled(Row)`
  width: 100%;
  border: 1px solid #e6e6e6;
  margin: 40px 0;
`;

const TableHeading = ({col1Name}) => (
  <TableHeader>
    <TableColumn>{col1Name}</TableColumn>
    <TableColumnAlignedCenter>NO.</TableColumnAlignedCenter>
    <TableColumnAlignedCenter>ACTION</TableColumnAlignedCenter>
    <TableColumnAlignedCenter>REORDER</TableColumnAlignedCenter>
  </TableHeader>
);

const TableBody = ({playerList}) => (
  <tbody>
    {!playerList?.length
      ? null
      : playerList.map((data) => {
          return (
            <tr>
              <PlayerNamePhotoTableColumn>
                <PlayerNamePhotoContainer>
                  <PlayerPhoto src={data?.photo} />
                  <Column>{data?.name}</Column>
                </PlayerNamePhotoContainer>
              </PlayerNamePhotoTableColumn>
              <PlayerInfoCenterAligned>{data?.no}</PlayerInfoCenterAligned>
              <ActionColumn>
                <ActionButton>
                  <Icon name="chevron down" />
                </ActionButton>
              </ActionColumn>
              <ReorderContainer>
                <Icon name="bars" size="large" />
              </ReorderContainer>
            </tr>
          );
        })}
  </tbody>
);

const Playing11 = (props) => (
  <TableContainer>
    <TableHeading col1Name="PLAYING 11" />
    <TableBody playerList={props.state?.playing11} />
  </TableContainer>
);

const Substitutes = (props) => (
  <Column>
    <TableContainer>
      <TableHeading col1Name="SUBSTITITES" />
      <TableBody playerList={props.state?.substitutes} />
    </TableContainer>
    <AddPlayerContainer>
      <AddPlayerButton onClick={() => alert("Under Development")}>
        + Add Player
      </AddPlayerButton>
    </AddPlayerContainer>
  </Column>
);

const Reserves = (props) => (
  <Column>
    <TableContainer>
      <TableHeading col1Name="RESERVES" />
      <TableBody playerList={props.state?.reserves} />
    </TableContainer>
    <AddPlayerContainer>
      <AddPlayerButton onClick={() => alert("Under Development")}>
        + Add Player
      </AddPlayerButton>
    </AddPlayerContainer>
  </Column>
);

const TableView = (props) => (
  <TableViewContainer>
    <TableViewColumn>
      <Playing11 {...props} />
    </TableViewColumn>
    <TableViewColumn>
      <Substitutes {...props} />
      <HorizontalDivider />
      <Reserves {...props} />
    </TableViewColumn>
  </TableViewContainer>
);

export default TableView;
