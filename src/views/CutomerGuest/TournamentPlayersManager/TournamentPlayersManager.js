import React from "react";
import { Button, Table, Icon, Input } from "semantic-ui-react";
import PlayersComparison from "components/PlayersComparison";
import MatchPlayground from "components/MatchPlayground";
import SubstituteView from "components/SubstituteView";


const TournamentPlayersManager = () => {
  return (
    <div className="tournamentPlayersManagerCustomer">
      <div className="listItem">
        <div className="title">
          <span>Squad formation</span>
          <span className="disabled">Tacctics</span>
          <span className="disabled">Roles</span>
          <span className="disabled">Instructions</span>
        </div>
        <div className="innerCont">
          <div className="leftContent">
          <MatchPlayground/>
          </div>
          <div className="rightContent">
          <PlayersComparison/>
          </div>
        </div>
        <SubstituteView/>
      </div>
    </div>
  );
};

export default TournamentPlayersManager;
