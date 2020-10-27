import React from "react";
import { Switch, Redirect } from "react-router-dom";
import TournamentNav from "components/TournamentNav";
import { getActiveRoute, getRoutes } from "utils/layout";
import routes from "./routes";

const Tournament = () => {
  const activeRoute = getActiveRoute(routes);
  return (
    <div className="tournamentLayout">
      <TournamentNav
        activeTab={activeRoute && activeRoute.length ? activeRoute[1] : null}
        type="tournamentManager"
    />
      <Switch>
        {getRoutes(routes)}
        <Redirect from="/tournament" to="/tournament/overview" />
      </Switch>
    </div>
  );
};

export default Tournament;
