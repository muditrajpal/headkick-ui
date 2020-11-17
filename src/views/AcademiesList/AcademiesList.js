import React, { useEffect, useState } from "react";
import { Button, Table, Image, Input, Dropdown } from "semantic-ui-react";
import queryString from "query-string";
import CountryImg from "assets/imgs/c.png";
import history from "historyObj";
import { fetchAcademiesList } from "apis/academy";

const AcademyItem = ({ data }) => (
  <Table.Row>
    <Table.Cell>{data.name}</Table.Cell>
    <Table.Cell>2 Sept 2020</Table.Cell>
    <Table.Cell>
      {" "}
      <Image src={CountryImg} avator />
    </Table.Cell>
    <Table.Cell>22</Table.Cell>
    <Table.Cell>34</Table.Cell>
    <Table.Cell>
      <Button
        circular
        color="blue"
        icon="angle right"
        onClick={() => history.push(`/academy/select?id=${data._id}`)}
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
  useEffect(() => {
    const filter = {};
    const sort = {};
    if (sortBy) {
      sort[sortBy] = 1;
    }
    if (searchKey) {
      filter["$text"] = { $search: searchKey };
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
        setAcademiesList(data && data.length ? data : []);
      })
      .catch(() => {});
  }, [page, searchKey, sortBy]);
  return (
    <div className="academiesListComponent">
      <div className="listItem">
        <div className="title2">
          <span className="filter">Filter</span>
          <Dropdown text="Sort">
            <Dropdown.Menu>
              <Dropdown.Item text="A" />
              <Dropdown.Item text="B" description="ctrl + o" />
              <Dropdown.Item text="C" description="ctrl + s" />
            </Dropdown.Menu>
          </Dropdown>
          <Input
            icon="search"
            placeholder="Search..."
            className="searchInput"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="table-component">
          <Table padded singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell singleLine>NAME</Table.HeaderCell>
                <Table.HeaderCell>DATE CREATED</Table.HeaderCell>
                <Table.HeaderCell>NATIONALITY</Table.HeaderCell>
                <Table.HeaderCell>MATCHES</Table.HeaderCell>
                <Table.HeaderCell>AVERAGE AGE</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {academiesList.map((data) => (
                <AcademyItem key={data._id} />
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AcademiesList;
