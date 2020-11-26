import React from "react";
import styled from "styled-components";
import OnlineCoachingNav from "components/OnlineCoachingNav";
import {Switch, Redirect} from "react-router-dom";
import routes from "./routes";
import {getActiveRoute, getRoutes} from "utils/layout";

const Container = styled.div`
  float: left;
  margin: auto 30px;
  padding: 31px 28px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px #edeffc;
  border-radius: 10px;
  width: 96%;
  overflow-y: auto;
  max-height: calc(100vh - 80px);
`;

const Tabs = {
  MY_COURSES: "/my-courses",
  ALL_COURSES: "/all-courses",
};

const OnlineCoaching = (props) => {
  const activeRoute = getActiveRoute(routes);
  return (
    <Container>
      {!activeRoute?.length ||
      activeRoute[0]?.path === Tabs.MY_COURSES ||
      activeRoute[0]?.path === Tabs.ALL_COURSES ? (
        <OnlineCoachingNav
          selectedTab={activeRoute?.length && activeRoute[0]?.path}
        />
      ) : null}

      <Switch>
        {getRoutes(routes)}
        <Redirect from="/online-coaching" to="/online-coaching/my-courses" />
      </Switch>
    </Container>
  );
};

export default OnlineCoaching;
