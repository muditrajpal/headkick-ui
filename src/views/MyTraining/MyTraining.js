import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ThemeButton from "shared/components/ThemeButton";
import { Search, Icon } from "semantic-ui-react";
import history from "historyObj";
import EmptyTrainingImg from "assets/imgs/empty-training.png";
import moment from "moment";
import { fetchTrainingList } from "apis/training";
import queryString from "query-string";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyTrainingContainer = styled(Column)`
  top: 6rem;
  position: absolute;
  float: left;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 98.3%;
  bottom: 1rem;
  overflow-y: auto;
`;

const Header = styled(Row)`
  flex: 1;
  padding: 30px;
  gap: 15px;
`;

const HeaderTextColumn = styled(Column)`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #12216d;
`;

const HeaderSearchAddNewColumn = styled(Column)`
  flex: 1;
  align-items: flex-end;
`;

const SearchAddNewContainer = styled(Row)`
  flex: 1;
  gap: 16px;
  width: 100%;
  justify-content: flex-end;
`;

const SearchBox = styled(Search)`
  width: 100%;
  max-width: 400px;
  .ui.search {
    width: 100%;
  }
  .ui.input {
    width: 100%;
  }
`;

const EmptyTrainingConatiner = styled(Column)`
  justify-content: center;
  align-items: center;
  gap: 26px;
  height: 400px;
  font-family: Roboto;
  font-size: 24px;
  line-height: 32px;
  color: #0d1757;
`;

const EmptyTrainingImage = styled.img`
  width: 190px;
  height: 215px;
`;

const TrainingListContainer = styled.table`
  tr:nth-child(even) {
    background: #f6f7fe;
  }
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #e9ecfb;
  box-sizing: border-box;
  margin: 0 30px;
`;

const TableHeader = styled.tr`
  background: #e9ecfb;
  color: #000000;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
`;

const TableColumn = styled.td`
  padding: 19px;
`;

const TrainingInfoCenterAligned = styled(TableColumn)`
  text-align: center;
`;

const DropInfoColumn = styled.td`
  padding: 6px 0 0 30px;
  width: 10%;
`;

const TableRow = styled.tr`
  color: #333333;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

const DateContainer = styled(Row)`
  margin-left: -16px;
  color: rgba(0, 0, 0, 0.4);
`;

const PlayerPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ExceedPlayerPlaceholder = styled(Column)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #007ae9;
  color: #ffffff;
  justify-content: space-around;
  align-items: center;
`;

const NoTrainingsPlaceholder = () => (
  <EmptyTrainingConatiner>
    <EmptyTrainingImage src={EmptyTrainingImg} />
    Soory! You don't have any trainings yet...
  </EmptyTrainingConatiner>
);

const PlayerPhotoStack = ({ players }) => {
  const loopLengthExceedMax = !!(players.length > 5);
  return (
    <Row style={{ gap: 3 }}>
      {players?.length &&
        players.map((data, index) => {
          return index > 4 ? null : <PlayerPhoto src={data?.img} />;
        })}
      {loopLengthExceedMax && (
        <ExceedPlayerPlaceholder>+{players.length - 5}</ExceedPlayerPlaceholder>
      )}
    </Row>
  );
};

const TrainingRow = ({ training }) => (
  <TableRow>
    <TableColumn>{training.name}</TableColumn>
    <TrainingInfoCenterAligned>
      <Column style={{ alignItems: "center" }}>
        <Column>
          {training.time&&moment(training.time, 'HH:mm a').format("HH:mm A")}
        </Column>
        <DateContainer>
          {training.date && moment(training.date.split("/").reverse().join("-")).format("DD MMM")}
        </DateContainer>
      </Column>
    </TrainingInfoCenterAligned>
    <TrainingInfoCenterAligned>
      {training.drills.length}
    </TrainingInfoCenterAligned>
    <TableColumn>
      <PlayerPhotoStack players={training.players} />
    </TableColumn>
    <TrainingInfoCenterAligned style={{ color: "#E4C389" }}>
      <Icon name="repeat" size="large" />
    </TrainingInfoCenterAligned>
    <TrainingInfoCenterAligned style={{ color: "#1F94FF",cursor:"pointer" }} onClick={()=>history.push(`/academies/training/view-training?id=${training._id}`)}>
      <Icon name="chevron down" />
    </TrainingInfoCenterAligned>
  </TableRow>
);

const MyTraining = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const page = queryStringSearch.page || 1;
  const searchKey = queryStringSearch.searchKey || "";
  const [searchInput, setSearchInput] = useState(searchKey);
  const [trainingList, setTrainingList] = useState([]);
  const [trainingCount, setTrainingCount] = useState(0);

  useEffect(() => {
    setTrainingList([]);
    setTrainingCount(0);
    const filter = {};
    const sort = {};
    if (searchKey) {
      filter["$text"] = { $search: searchKey };
    }
    fetchTrainingList({
      page,
      limit: 20,
      filter: JSON.stringify(filter),
      sort: JSON.stringify({}),
    })
      .then((data) => {
        if (data.sc && data.result) {
          setTrainingCount(data.result.count);
          setTrainingList(
            data.result.data && data.result.data.length ? data.result.data : []
          );
        }
      })
      .catch(() => {});
  }, [page, searchKey]);
  return (
    <MyTrainingContainer>
      <Header>
        <HeaderTextColumn>My Training</HeaderTextColumn>
        <HeaderSearchAddNewColumn>
          <SearchAddNewContainer>
            <SearchBox
              placeholder="Search by player name, country or academy name"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                if (e.target.value.trim().length > 2)
                  history.push(`?searchKey=${e.target.value}`);
                else if (!e.target.value.trim().length && searchInput) {
                  history.push(`?searchKey=`);
                }
              }}
            />
            <ThemeButton
              customCss={{
                width: 147,
                background: "#FFFFFF",
                color: "#0D1757",
                border: "1px solid #0D1757",
              }}
              isDisabled={false}
              onClickAction={() =>
                history.push("/academies/training/add-new-training")
              }
              children={
                <>
                  <Icon name="plus" />
                  Training
                </>
              }
            />
          </SearchAddNewContainer>
        </HeaderSearchAddNewColumn>
      </Header>
      {trainingList.length ? (
        <TrainingListContainer>
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TrainingInfoCenterAligned>DATE TIME</TrainingInfoCenterAligned>
            <TrainingInfoCenterAligned>TOTAL DRILLS</TrainingInfoCenterAligned>
            <TableColumn>PLAYERS</TableColumn>
            <TrainingInfoCenterAligned>REPEAT</TrainingInfoCenterAligned>
            <DropInfoColumn></DropInfoColumn>
          </TableHeader>
          <tbody>
            {trainingList.map((training) => (
              <TrainingRow training={training} key={training._id}/>
            ))}
          </tbody>
        </TrainingListContainer>
      ) : (
        <NoTrainingsPlaceholder />
      )}
    </MyTrainingContainer>
  );
};

export default MyTraining;
