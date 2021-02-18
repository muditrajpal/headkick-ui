import React from "react";
import playgroundImg from "assets/imgs/playground.png";

const players = [
    {
        id: 1,
        name: "Lionel Messi",
        style: {
          top: "4%",
          left: "50%",
          transform:"translateX(-50%)"
        },
      },
  {
    id: 2,
    name: "Ronaldo",
    style: {
      top: "15%",
      left: "10%",
    },
  },
  {
    id: 3,
    name: "Xavi",
    style: {
      top: "15%",
      left: "25%",
    },
  },
];

const oppPlayers = [
    {
        id: 2,
        name: "Digvijay Bhat",
        style: {
          bottom: "4%",
          left: "50%",
          transform:"translateX(-50%)"
        },
      },
  {
    id: 2,
    name: "Ronaldo",
    style: {
      bottom: "15%",
      left: "10%",
    },
  },
  {
    id: 3,
    name: "Xavi",
    style: {
        bottom: "15%",
      left: "25%",
    },
  },
];

const MatchPlayground = () => (
  <div className="matchPlaygroundCom">
    <img src={playgroundImg} />
    <div className="players">
        <div className="scoreTop">
        4 - 1 - 3 - 5
        </div>
        <div className="scoreBottom">
        4-3-1
        </div>
      {players.map((r) => (
        <div className="player" style={r.style}>
          <div className="num"><span>{r.id}</span></div>
          <div className="name">{r.name}</div>
        </div>
      ))}
      {oppPlayers.map((r) => (
        <div className="player bottom" style={r.style}>
          <div className="num"><span>{r.id}</span></div>
          <div className="name">{r.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default MatchPlayground;
