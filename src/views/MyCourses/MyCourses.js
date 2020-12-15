import React from "react";
import styled from "styled-components";
import CreatedCourses from "./CreatedCourses";
import PurchasedCourses from "./PurchasedCourses";

const HorizontalDivider = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-bottom: 1px solid #e8ebfc;
  margin: 30px 0;
`;

const MyCourses = (props) => (
  <>
    <CreatedCourses {...props} />
    <HorizontalDivider />
    <PurchasedCourses {...props} />
  </>
);

export default MyCourses;
