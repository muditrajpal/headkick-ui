import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import InformationAndNewsNav from "components/InformationAndNewsNav";
import { getActiveRoute, getRoutes } from "utils/layout";

const InformationAndNews = () => {
  const activeRoute = getActiveRoute(routes);
  console.log("activeRoute ===== > ", activeRoute);
  return (
    <div className="informationAndNewsLayout">
      <InformationAndNewsNav
        activeTab={activeRoute && activeRoute.length ? activeRoute[1] : null}
      />
      <Switch>
        {getRoutes(routes)}
        <Redirect
          from="/information-and-news"
          to="/information-and-news/news"
        />
      </Switch>
    </div>
  );
};

export default InformationAndNews;
