import React from "react";
import { Route } from "react-router-dom";

export const getActiveRoute = (routes) => {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].collapse) {
      let collapseActiveRoute = getActiveRoute(routes[i].views);
      if (collapseActiveRoute) return [collapseActiveRoute[0], i];
    } else {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return [routes[i], i];
      }
    }
  }
  return null;
};
export const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return getRoutes(prop.views);
    }
    return (
      <Route
        path={prop.layout + prop.path}
        component={prop.component}
        key={key}
        exact
      />
    );
  });
};
