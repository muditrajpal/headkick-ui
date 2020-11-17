import React, { useState ,useEffect} from "react";
import { Button, Table, Dropdown, Select } from "semantic-ui-react";
import CountryImg from "assets/imgs/c.png";
import history from "historyObj";
import styled from "styled-components";
import queryString from "query-string";
import {fetchPlayerList} from "apis/player"

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

const PlayerItem = ({ data }) => (
  <Table.Row>
    <Table.Cell>
      <PlayerProfileContainer>
        <img src={data.photo} className="player-photo" />
        {data.name}
      </PlayerProfileContainer>
    </Table.Cell>
    <Table.Cell>{data.academy}</Table.Cell>
    <Table.Cell>{data.age}</Table.Cell>
    <Table.Cell>
      <img src={CountryImg} />
    </Table.Cell>
    <Table.Cell>{data.matches}</Table.Cell>
    <Table.Cell>{data.position}</Table.Cell>
    <Table.Cell>{data.goals}</Table.Cell>
    <Table.Cell>
      <Button
        circular
        color="blue"
        icon="pencil alternate"
        onClick={() =>
          history.push(`/academies/players/list/select?id=${data._id}`)
        }
      />
    </Table.Cell>
  </Table.Row>
);

const AcademiesPlayersList = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const page = queryStringSearch.page || 1;
  const sortBy = queryStringSearch.sortBy || "";
  const [playersList, setPlayersList] = useState([]);
  const [titleSelected, setTitleSelected] = useState(queryStringSearch.myAcademy?1:2);
  useEffect(() => {
    const filter = {};
    const sort = {};
    if (sortBy) {
      sort[sortBy] = 1;
    }
    fetchPlayerList({
      page,
      filter:JSON.stringify(filter),
      limit: 20,
      sort: JSON.stringify(sort),
      myAcademy:titleSelected==1
    })
      .then((data) => {
        setPlayersList(data && data.length ? data : []);
      })
      .catch(() => {});
  }, [page]);

  return (
    <div className="academiesPlayersList">
      <div className="listItem">
        <div className="title">
          <span
            className={titleSelected === 1 ? "" : "disabled"}
            onClick={() => setTitleSelected(1)}
          >
            My Academy Players
          </span>
          <span
            className={titleSelected === 2 ? "" : "disabled"}
            onClick={() => setTitleSelected(2)}
          >
            All Players
          </span>
          <span className="rightContent">
            <span className="filter">Filter</span>
            <Dropdown text="Sort">
              <Dropdown.Menu>
                <Dropdown.Item text="A" />
                <Dropdown.Item text="B" description="ctrl + o" />
                <Dropdown.Item text="C" description="ctrl + s" />
              </Dropdown.Menu>
            </Dropdown>
            <Button className="submit purpleBttn" onClick={() => {}} positive>
              Add Players
            </Button>
          </span>
        </div>
        {titleSelected == 2 ? (
          <div className="filterOptions">
            <span>Filter By: </span>
            <Select placeholder="Academy" options={[]} />
            <Select placeholder="Nationality" options={[]} />
            <Select placeholder="Age" options={[]} />
            <Select placeholder="Positions" options={[]} />
          </div>
        ) : (
          ""
        )}
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
              {playersList.map((data) => (
                <PlayerItem data={data} key={data._id} />
              ))}
            </Table.Body>
          </Table>
        </PlayerListContainer>
      </div>
    </div>
  );
};

export default AcademiesPlayersList;
