import React, { useEffect, useState } from "react";
import { Image, Table, Icon, Input } from "semantic-ui-react";
import history from "historyObj";
import playerImage from "assets/imgs/player.png";
import teamLogo from "assets/imgs/w.png";
import messiImage from "assets/imgs/messi.png";
import bluePolyImg from "assets/imgs/bluePoly.png";
import darkBluePolyImg from "assets/imgs/darkBluePoly.png";
import queryString from "query-string";
import { fetchTeamList } from "apis/team";

const TeamItem = ({team}) => (
  <Table.Row onClick={()=>history.push(`/academies/teams/select?id=${team._id}`)}>
    <Table.Cell>
      <img src={team.logoImg} />
      <span className="teamName">{team.name}</span>
    </Table.Cell>
    <Table.Cell>{team.players.length}</Table.Cell>
    <Table.Cell>30</Table.Cell>
    <Table.Cell>
      {team.players.map((player,i) => (
        i<8?<Image src={player.img} avatar className="playersImg" />:""
      ))}
  {   team.players.length>8?   <span className="playersImgText">
        <img src={bluePolyImg} />
        <span>+12</span>
      </span>:""}

    </Table.Cell>
  </Table.Row>
);

const TeamList = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const page = queryStringSearch.page || 1;
  const myTeam = queryStringSearch.myTeam ? 1 : 2;
  const searchKey = queryStringSearch.searchKey || "";
  const [searchInput, setSearchInput] = useState(searchKey);
  const [teamList, setTeamList] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  useEffect(() => {
    setTeamCount(0);
    setTeamList([]);
    const filter = {};
    if (searchKey) {
      filter["$text"] = { $search: searchKey };
    }
    fetchTeamList({
      page,
      filter: JSON.stringify(filter),
      limit: 20,
      sort: JSON.stringify({}),
      myTeam: myTeam == 1,
      avgAge:true
    })
      .then((data) => {
        if (data.sc && data.result) {
          setTeamCount(data.result.count);
          setTeamList(
            data.result.data && data.result.data.length ? data.result.data : []
          );
        }
      })
      .catch(() => {});
  }, [page, searchKey, myTeam]);

  return (
    <div className="teamListComponent">
      <div className="listItem">
        <div className="leftContent">
          <div className="title">
            <span
              className={myTeam === 1 ? "" : "disabled"}
              onClick={() => history.push("?myTeam=true")}
            >
              My Teams
            </span>
            <span
              className={myTeam === 2 ? "" : "disabled"}
              onClick={() => history.push("?")}
            >
              All Teams
            </span>
            <Input
              icon="search"
              placeholder="Search..."
              className="searchInput"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                if (e.target.value.trim().length > 2)
                  history.push(`?searchKey=${e.target.value}`);
                else if (!e.target.value.trim().length && searchInput) {
                  history.push(`?searchKey=`);
                }
              }}
            />{" "}
          </div>

          {teamList.length ? (
            <div className="columnItem">
              <Table padded singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell singleLine>TEAM</Table.HeaderCell>
                    <Table.HeaderCell>NO. OF PLAYERS</Table.HeaderCell>
                    <Table.HeaderCell>AVG PLAYER AGE</Table.HeaderCell>
                    <Table.HeaderCell>PLAYERS</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {teamList.map((team) => (
                    <TeamItem key={team._id} team={team} />
                  ))}
                </Table.Body>
              </Table>
            </div>
          ) : (
            ""
          )}
        </div>
        <img src={messiImage} className="rightContent"></img>
      </div>
    </div>
  );
};

export default TeamList;
