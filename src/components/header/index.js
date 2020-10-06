import React from 'react'
import {
  Icon,
  Container,
  Divider,
  Dropdown,
  Grid,
  Search,
  Menu,
  Segment,
  Sidebar, 
  MenuItem
} from 'semantic-ui-react'
import './header.css';

const options = [
    { key: 1, text: 'EN', value: 1 },
    { key: 2, text: 'SPN', value: 2 },
    { key: 3, text: 'POR', value: 3 },
  ]

export const header = () =>(
  
    <Grid textAlign="center" divided="vertically" style={{width : "100%"}}>
      <Grid.Row>
        <Grid.Column width={6}>
          <Menu.Item as='a' header className='Header'>
             HEADKICK
          </Menu.Item>
        </Grid.Column>

        <Grid.Column width={4} >
             <Search style={{width : "90%"}} class="text" placeholder="Search news, blogs, matches, schedules..">
             </Search>
        </Grid.Column>

        <Grid.Column width={1}>
          <Dropdown text={options[0]['text']} options={options} simple item />
        </Grid.Column>  

        <Grid.Column width={2}>
          <button class="ui basic button">Sign in</button>
        </Grid.Column>

        <Grid.Column width={2}>
          <button class="ui button">Sign up</button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)