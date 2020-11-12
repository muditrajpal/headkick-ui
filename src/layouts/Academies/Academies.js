import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import AcademiesNav from "components/AcademiesNav";
import { getActiveRoute, getRoutes } from "utils/layout";

const Academies = () => {
  const activeRoute = getActiveRoute(routes);
  return (
    <div className="academiesLayout">
      <AcademiesNav
        activeTab={activeRoute && activeRoute.length ? activeRoute[1] : null}
      />
      <Switch>
        {getRoutes(routes)}
        <Redirect from="/academies" to="/academies/list" />
      </Switch>
    </div>
  );
};

export default Academies;
