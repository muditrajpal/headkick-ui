import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import AcademiesNav from "components/AcademiesNav";
import { getActiveRoute, getRoutes } from "utils/layout";
import { useAuthState } from "contexts/auth.context";

const Academies = () => {
  const authUser = useAuthState();
  const profileType=authUser.userDetails ? authUser.userDetails.profileType : null;
  const activeRoute = getActiveRoute(routes(profileType));

  return (
    <div className="academiesLayout">
      <AcademiesNav
        activeTab={activeRoute && activeRoute.length ? activeRoute[1] : null}
        profileType={profileType}
      />
      <Switch>
        {getRoutes(
          routes(profileType)
        )}
        <Redirect from="/academies" to="/academies/list" />
      </Switch>
    </div>
  );
};

export default Academies;
