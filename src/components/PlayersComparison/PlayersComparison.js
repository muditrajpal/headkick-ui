import React from "react";
import { Grid, Progress,Rating } from "semantic-ui-react";
import addPlayerBigImg from "assets/imgs/addPlayerBigImg.png";
import messiBigImg from "assets/imgs/messiBigImg.png";
import playerComparisonImg from "assets/imgs/playerComparisonImg.png";

const data = [
  ["33", "Age", "33"],
  ["186 cm", "Weight", "186 cm"],
  ["ST/ LW/ RW", "Positions", "ST/ LW/ RW"],
  ["Right", "Foot", "Right"],
  [
    <Rating maxRating={5} defaultRating={3} icon="star" size="mini" />,
    "Skill Moves",
    <Rating maxRating={5} defaultRating={3} icon="star" size="mini" />,
  ],
  ["High", "Attacking Work Rate", "High"],
  ["Low", "Defensive Work Rate", "Low"],
  [
    <div>
      <Progress percent={99} color="green" />
      <span>99</span>
    </div>,
    "Pace",
    <div>
      <span className="right">99</span>
      <Progress percent={88} color="grey" />
    </div>,
  ],
  [
    <div>
      <Progress percent={87} color="green" />
      <span>99</span>
    </div>,
    "Shooting",
    <div>
      <span className="right">99</span>
      <Progress percent={84} color="grey" />
    </div>,
  ],
  [
    <div>
      <Progress percent={41} color="grey" />
      <span>99</span>
    </div>,
    "Pasing",
    <div>
      <span className="right">99</span>
      <Progress percent={52} color="green" />
    </div>,
  ],
  [
    <div>
      <Progress percent={62} color="green" />
      <span>99</span>
    </div>,
    "Defending",
    <div>
      <span className="right">99</span>
      <Progress percent={52} color="grey" />
    </div>,
  ],
  [
    <div>
      <Progress percent={77} color="yellow" />
      <span>99</span>
    </div>,
    "Physical",
    <div>
      <span className="right">99</span>
      <Progress percent={77} color="yellow" />
    </div>,
  ],
];

const PlayersComparison = () => (
  <div className="playersComparisonComponent">
    <Grid stackable columns={3} className="topRow">
      <Grid.Column width={4}>
        <div className="columnItem">
          <img src={messiBigImg} />
          <div>Lionel Messi</div>
        </div>
      </Grid.Column>
      <Grid.Column width={8}>
        <div className="centerItem">
          <img src={playerComparisonImg} />
          <div className="text c-1">Pace</div>
          <div className="text c-2">Physical</div>
          <div className="text c-3">Defense</div>
          <div className="text c-4">Shooting</div>
          <div className="text c-5">Passing</div>
          <div className="text c-6">Dribbling</div>
        </div>
      </Grid.Column>
      <Grid.Column width={4}>
        <div className="columnItem">
          <img src={addPlayerBigImg} />
          <div>Add player</div>
        </div>
      </Grid.Column>
    </Grid>
    <div className="titleText">PLAYER INFO COMPARISON</div>
    <div>
      {data.map((r) => (
        <Grid stackable columns={3} className="bottomRow">
          <Grid.Column>{r[0]}</Grid.Column>
          <Grid.Column>{r[1]}</Grid.Column>
          <Grid.Column>{r[2]}</Grid.Column>
        </Grid>
      ))}
    </div>
  </div>
);

export default PlayersComparison;
