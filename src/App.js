import React, { useEffect } from "react";
import TournamentManager from "layouts/TournamentManager";
import TournamentGuest from "layouts/TournamentGuest";
import Academies from "layouts/Academies";
import OnlineCoaching from "layouts/OnlineCoaching";
import InformationAndNews from "layouts/InformationAndNews";
import PageNotFound from "views/PageNotFound";
import { useAuthState, useAuthDispatch } from "contexts/auth.context";
import { Route, Switch, Redirect } from "react-router-dom";
import showHideBlockUI from "components/showHideBlockUI";
import Navbar from "./components/Navbar";
import {fetchUser} from "actions/user.actions";

const App = () => {
  const auth = useAuthState();
  const dispatch = useAuthDispatch();
  useEffect(function () {
    if (!auth.userFetched) {
      let user =  fetchUser(dispatch).then(); 
    }
  }, []);
  useEffect(
    function () {
      window.loadingUrls = window.loadingUrls.filter(
        (v) => v != "signInLoading"
      );
      if (auth.loading) {
        window.loadingUrls.push("signInLoading");
      }
      showHideBlockUI();
    },
    [auth.loading]
  );
  console.log(auth.userDetails)
  if (!auth.userFetched){
    return null
  } 
  return (
    <>
      <Navbar />
      <div className="contentContainer">
        <Switch>
          <Route path="/tournament/guest" component={TournamentGuest} />
          <Route path="/tournament" component={TournamentManager} />
          <Route path="/academies" component={Academies} />
          <Route path="/online-coaching" component={OnlineCoaching} />
          <Route path="/information-and-news" component={InformationAndNews} />
          <Route path="/page-not-found" component={PageNotFound} />
          <Redirect from="/" to="/academies" />
        </Switch>
      </div>
    </>
  );
};

export default App;
