import React from "react";
import styled from "styled-components";
import {Pagination} from "semantic-ui-react";

const PaginationBarContainer = styled.div`
  font-family: Roboto !important;
  .ui.pagination.menu {
    background-color: #f8fafb;
    font-size: 12px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
  }
  .ui.pagination.menu .active.item {
    background-color: #1f94ff;
    color: #ffffff;
    border-radius: 4px;
    border: none !important;
  }
  .ui.pagination.menu .item:last-child,
  .ui.pagination.menu .item {
    border: none !important;
    outline: none !important;
  }
`;

const PaginationBar = (props) => (
  <PaginationBarContainer>
    <Pagination {...props} />
  </PaginationBarContainer>
);

export default PaginationBar;
