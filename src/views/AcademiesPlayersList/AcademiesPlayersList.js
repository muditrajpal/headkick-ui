import React from "react";
import {Button, Table, Icon} from "semantic-ui-react";
// import CountryImg from "assets/imgs/c.png";
// import history from "historyObj";
import styled from "styled-components";

const PlayerProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const PlayerListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 240px);
  overflow: auto;
  border-radius: 10px;
`;

const MockData = [
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
  {
    photo:
      "https://avatars0.githubusercontent.com/u/5489402?s=400&u=cf6b13f7597b44435a7ac5b1b8201ff4d06abeab&v=4",
    name: "Lionel Messi",
    academy: "AFC Academy",
    age: 30,
    nationality: "AG",
    matches: 45,
    position: "LW",
    goals: 600,
    id: "1122",
  },
];

const List = () => (
  <PlayerListContainer>
    <Table padded singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>NAME</Table.HeaderCell>
          <Table.HeaderCell>ACADEMY</Table.HeaderCell>
          <Table.HeaderCell>AGE</Table.HeaderCell>
          <Table.HeaderCell>NATIONALITY</Table.HeaderCell>
          <Table.HeaderCell>MATCHES</Table.HeaderCell>
          <Table.HeaderCell>POSITION</Table.HeaderCell>
          <Table.HeaderCell>GOALS</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {MockData.map((data, index) => {
          return (
            <Table.Row>
              <Table.Cell>
                <PlayerProfileContainer>
                  <img src={data.photo} className="player-photo" />
                  {data.name}
                </PlayerProfileContainer>
              </Table.Cell>
              <Table.Cell>{data.academy}</Table.Cell>
              <Table.Cell>{data.age}</Table.Cell>
              <Table.Cell>{data.nationality}</Table.Cell>
              <Table.Cell>{data.matches}</Table.Cell>
              <Table.Cell>{data.position}</Table.Cell>
              <Table.Cell>{data.goals}</Table.Cell>
              <Table.Cell>
                <Button
                  circular
                  color="blue"
                  icon="pencil alternate"
                  onClick={
                    () => alert("Under Development")
                    //TODO: history.push(`/academies/players/list/select?id=${data.id}`)
                  }
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </PlayerListContainer>
);

const AcademiesPlayersList = () => {
  return (
    <div className="academiesPlayersList">
      <div className="listItem">
        <div className="title">Players</div>
        {List()}
      </div>
    </div>
  );
};

export default AcademiesPlayersList;
