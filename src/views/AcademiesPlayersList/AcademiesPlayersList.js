import React, { useState, useEffect } from "react";
import { Button, Table, Dropdown, Select } from "semantic-ui-react";
import history from "historyObj";
import styled from "styled-components";
import queryString from "query-string";
import { fetchPlayerList } from "apis/player";
import { fetchAcademiesNameList } from "apis/academy";
import {fetchCountriesList} from "apis/public"
import { useAuthState } from "contexts/auth.context";

let ageFilterArray = Array.from({ length: 37 }, (_, i) => i + 12).map(
  (r) => ({
    key: r,
    text: r,
    value: r,
  })
);
ageFilterArray=[{key:-1,value:"",text:"All"},...ageFilterArray]

const optionPosition = [
  { key: 0, text: "All", value: "" },
  { key: 1, text: "LW", value: "LW" },
  { key: 2, text: "RW", value: "RW" },
];

const sortOptions = [
  { key: 1, text: "Created At", value: "" },
  { key: 2, text: "Name", value: "name" },
];
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

const PlayerItem = ({ data ,edit}) => (
  <Table.Row>
    <Table.Cell>
      <PlayerProfileContainer>
        <img src={data.img} className="player-photo" />
        {data.name}
      </PlayerProfileContainer>
    </Table.Cell>
    <Table.Cell>{data.academy[0].name}</Table.Cell>
    <Table.Cell>
      {data.age}
    </Table.Cell>
    <Table.Cell>
      <img src={data.nationality[0].flagImg} />
    </Table.Cell>
    <Table.Cell>{data.matches}</Table.Cell>
    <Table.Cell>{data.position}</Table.Cell>
    <Table.Cell>{data.goals}</Table.Cell>
    <Table.Cell>
      {edit?<Button
        circular
        color="blue"
        icon="pencil alternate"
        onClick={() =>
          history.push(`/academies/players/select?id=${data._id}&canEdit=true`)
        }
      />:""}
    </Table.Cell>
  </Table.Row>
);

const AcademiesPlayersList = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const page = queryStringSearch.page || 1;
  const sortBy = queryStringSearch.sortBy || "";
  const filterAcademy = queryStringSearch.filterAcademy || "";
  const filterAge = queryStringSearch.filterAge || "";
  const filterPosition = queryStringSearch.filterPosition || "";
  const filterCountry = queryStringSearch.filterCountry || "";
  const {userDetails} = useAuthState();
  
  const myAcademySelected = queryStringSearch.myAcademy &&userDetails? 1 : 2;
  const [playersList, setPlayersList] = useState([]);
  const [playersCount, setPlayersCount] = useState(0);
  const [academiesList, setAcademiesList] = useState([]);
  const [countriesList, setCountriesList] = useState([]);
const [filterOpen,setFilterOpen] = useState(false);
  useEffect(() => {
    fetchAcademiesNameList({})
      .then((data) => {
        if (data.sc && data.result) {
          setAcademiesList(
            data.result
          );
        }
      })
      .catch(() => {});
      fetchCountriesList({})
      .then((data) => {
        if (data.sc && data.result) {
          setCountriesList(
            data.result
          );
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setPlayersCount(0);
    setPlayersList([]);
    const filter = {};
    const sort = {};
    if (sortBy) {
      sort[sortBy] = 1;
    }
    if (filterPosition) {
      filter.position = filterPosition;
    }
    if (filterAcademy) {
      filter.academy = filterAcademy;
    }
    if (filterAge) {
      filter.dob = filterAge;
    }
    if (filterCountry) {
      filter.nationality = filterCountry;
    }
    if( myAcademySelected == 1){
      if(userDetails.profileType=="player"&&userDetails.player){
        filter.academy = userDetails.player.academy;
      } else if(userDetails.profileType=="coach"||userDetails.profileType=="owner"){
        filter.academy = {$in:userDetails.academies};
      }
    }
    
    fetchPlayerList({
      page,
      filter: JSON.stringify(filter),
      limit: 20,
      sort: JSON.stringify(sort)
    })
      .then((data) => {
        if (data.sc && data.result) {
          setPlayersCount(data.result.count);
          setPlayersList(
            data.result.data && data.result.data.length ? data.result.data : []
          );
        }
      })
      .catch(() => {});
  }, [search]);

  return (
    <div className="academiesPlayersList">
      <div className="listItem">
        <div className="title">
         {userDetails && <span
            className={myAcademySelected === 1 ? "" : "disabled"}
            onClick={() => history.push("?myAcademy=true")}
          >
            My Academy Players
          </span>}
          <span
            className={myAcademySelected === 2 ? "" : "disabled"}
            onClick={() => history.push("?")}
          >
            All Players
          </span>
  
          <span className="rightContent">
            <span className={`filter ${!filterOpen?"t-bold":""}`} onClick={()=>setFilterOpen(v=>{
              if(v){
                history.push("?");
              }
              return !v;
              })}>Filter</span>
            <Dropdown
              text="Sort"
              onChange={(e, { value }) => {
                history.push(`?sortBy=${value}`);
              }}
              direction="left"
              options={sortOptions}
              value={sortBy}
            ></Dropdown>
            {userDetails&&userDetails.profileType!="player"&&
            <Button className="submit purpleBttn" onClick={() => {}} positive>
              Add Players
            </Button>
}
          </span>
        </div>
        {filterOpen&&
          <div className="filterOptions">
            <span>Filter By: </span>
            <Select
              placeholder="Academy"
              value={filterAcademy}
              options={[{key:0,text:"All",value:""},...academiesList.map((academy) => ({
                key: academy._id,
                value: academy._id,
                text: academy.name,
              }))]}
              onChange={(e,{value})=>history.push(`?filterPosition=${filterPosition}&filterAge=${filterAge}&filterAcademy=${value}&filterCountry=${filterCountry}&myAcademy=${myAcademySelected==1?true:""}`)}
            />
            <Select placeholder="Nationality" 
            value={filterCountry}
            options={[{key:0,text:"All",value:""},...countriesList.map((country) => ({
              key: country._id,
              value: country._id,
              text: country.name,
            }))]}
            onChange={(e,{value})=>history.push(`?filterPosition=${filterPosition}&filterAge=${filterAge}&filterAcademy=${filterAcademy}&filterCountry=${value}&myAcademy=${myAcademySelected==1?true:""}`)}
            />
            <Select placeholder="Age" 
            value={Number(filterAge)}
              onChange={(e,{value})=>history.push(`?filterPosition=${filterPosition}&filterAge=${value}&filterAcademy=${filterAcademy}&filterCountry=${filterCountry}&myAcademy=${myAcademySelected==1?true:""}`)}
            options={ageFilterArray} />
            <Select placeholder="Positions" 
            value={filterPosition}
            onChange={(e,{value})=>history.push(`?filterPosition=${value}&filterAge=${filterAge}&filterAcademy=${filterAcademy}&filterCountry=${filterCountry}&myAcademy=${myAcademySelected==1?true:""}`)}
            options={optionPosition} />
          </div>}

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
                <PlayerItem data={data} key={data._id} edit={userDetails&&userDetails.profileType=="coach"&&userDetails.academies.some(v=>data.academy.filter(r=>r._id==v).length)} />
              ))}
            </Table.Body>
          </Table>
        </PlayerListContainer>
      </div>
    </div>
  );
};

export default AcademiesPlayersList;
