import React, { useEffect, useState } from "react";
import { Button, Table, Image, Input, Dropdown } from "semantic-ui-react";
import queryString from "query-string";
import history from "historyObj";
import { fetchAcademiesList } from "apis/academy";
import moment from "moment";

const options = [
  { key: 1, text: "Created At", value: "" },
  { key: 2, text: "Name", value: "name" }
];

const AcademyItem = ({ data }) => (
  <Table.Row>
    <Table.Cell>{data.name}</Table.Cell>
    <Table.Cell>
      {moment(data.date, "DD/MM/YYYY").format("Do MMM YY")}
    </Table.Cell>
    <Table.Cell>
      <Image src={data.nationality[0].flagImg} avator className="flagImg" />
    </Table.Cell>
    <Table.Cell>0</Table.Cell>
    <Table.Cell>{data.avgPlayerAge&&data.avgPlayerAge[0]?data.avgPlayerAge[0].avgAge:""}</Table.Cell>
    <Table.Cell>
      <Button
        circular
        color="blue"
        icon="angle right"
        onClick={() => history.push(`/academies/select?id=${data._id}`)}
      />
    </Table.Cell>
  </Table.Row>
);

const AcademiesList = (props) => {
  const search = props.location.search;
  const queryStringSearch = queryString.parse(search);
  const page = queryStringSearch.page || 1;
  const searchKey = queryStringSearch.searchKey || "";
  const sortBy = queryStringSearch.sortBy || "";
  const [searchInput, setSearchInput] = useState(searchKey);
  const [academiesList, setAcademiesList] = useState([]);
  const [academiesCount, setAcademiesCount] = useState(0);

  useEffect(() => {
    setAcademiesList([]);
    setAcademiesCount(0);
    const filter = {};
    const sort = {};
    if (sortBy) {
      sort[sortBy] = 1;
    }
    if (searchKey) {
      filter.name={
        "$regex":`${searchKey}.*`
      }
    }
    fetchAcademiesList({
      page,
      limit: 20,
      filter: JSON.stringify(filter),
      sort: JSON.stringify(sort),
      matchesCount: true,
      avgAge: true,
    })
      .then((data) => {
        if (data.sc && data.result) {
          setAcademiesCount(data.result.count);
          setAcademiesList(
            data.result.data && data.result.data.length ? data.result.data : []
          );
        }
      })
      .catch(() => {});
  }, [search]);
  return (
    <div className="academiesListComponent">
      <div className="listItem">
        <div className="title2">
          <span className="filter">Filter</span>
          <Dropdown
            text="Sort"
            onChange={(e,{ value }) => {
              history.push(`?searchKey=${searchInput}&sortBy=${value}`);
            }}
            options={options}
            value={sortBy}
          ></Dropdown>
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
          />
        </div>
        <div className="table-component">
          <Table padded singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>NAME</Table.HeaderCell>
                <Table.HeaderCell>DATE ESTABLISHED</Table.HeaderCell>
                <Table.HeaderCell>NATIONALITY</Table.HeaderCell>
                <Table.HeaderCell>MATCHES</Table.HeaderCell>
                <Table.HeaderCell>AVERAGE AGE</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {academiesList.map((data) => (
                <AcademyItem key={data._id} data={data} />
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AcademiesList;
