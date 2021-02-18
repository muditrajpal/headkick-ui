import React from "react";
import { Grid } from "semantic-ui-react";
import teamLogo from "assets/imgs/w.png";
import playerImage from "assets/imgs/messiBigImg.png";

const SubstituteView = () => (
  <Grid stackable columns={2} className="substituteView">
    <div className="titleText">Substitute</div>
    <Grid.Column  className="bordered">
      <div className="titleTop">
        <img src={teamLogo} className="imagelogoListItem" />
        <span>Wanderers F.C.</span>
      </div>
      <Grid stackable columns={3} className="bottomBox">
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>

      </Grid>
    </Grid.Column>
    
    <Grid.Column className="bordered">
      <div className="titleTop">
        <img src={teamLogo} className="imagelogoListItem" />
        <span>Wanderers F.C.</span>
      </div>
      <Grid stackable columns={3} className="bottomBox">
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        <Grid.Column>
            <img src={playerImage}/>
            <div className="name">
            Anssumane Fati
            </div>
            <div className="text">
                LB <span>|</span> 2
            </div>
        </Grid.Column>
        
      </Grid>
    </Grid.Column>
  </Grid>
);

export default SubstituteView;
