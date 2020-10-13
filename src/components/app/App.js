import React from 'react'
import {
  Icon,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Search,
  Menu,
  Segment,
  Sidebar, MenuItem
} from 'semantic-ui-react'
import {GridExampleVerticallyDivided} from '../grid-view'
import {header} from '../Header'
import LoginMoal from '../loginModal'

const initialState = {
  loading: false,
  results: [],
  value: ''
}

const App = () => {

  const {loading, results, value} = initialState
  const [visible, setVisible] = React.useState(true)
  return (
  <div>
  
    <Menu fixed='top' className="borderless">
    <Menu.Item 
      as='a' 
      header
      className='Header'
      onClick={() => setVisible(!visible)
      }
    >
      <Icon name='content'/>
    </Menu.Item>
    {header()}
    </Menu>
      
    <Segment text style={{ marginTop: '74px' }}>
    <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            compact
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            {GridExampleVerticallyDivided()}
           </Sidebar.Pusher>
        </Sidebar.Pushable>
    </Segment>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 1' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 2' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Group 3' />
            <List link inverted>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
    {/* {LoginMoal()} */}
  </div>
  
)}

export default App