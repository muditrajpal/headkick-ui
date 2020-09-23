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

const initialState = {
  loading: false,
  results: [],
  value: '',
}

const options = [
  { key: 1, text: 'EN', value: 1 },
  { key: 2, text: 'SPN', value: 2 },
  { key: 3, text: 'POR', value: 3 },
]

const GridExampleVerticallyDivided = () => (
  <Grid className='gridview' divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column width={10}>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
      <Grid.Column width={6}>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://via.placeholder.com/300.png/09f/fff' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
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
          size='large'
          onClick={() => setVisible(!visible)
          }
        >
          <Icon name='content' size='large' style={{ marginLeft: '0.5em' }} />
        </Menu.Item>
        <Menu.Item as='a' header style={{fontSize : '24px', color : '#0D1757'}}>
          HEADKICK
        </Menu.Item>
        <Menu.Item >
          <Search style={{ paddingLeft: '500px' }} class="text" placeholder="Search news, blogs, matches, schedules..">
          </Search>
        </Menu.Item>
        <Menu.Item>
          <Dropdown style={{border : '1px solid #DEDEDF', fontSize : '14px'}} text={options[0]['text']} options={options} simple item />
        </Menu.Item>
        <Menu.Item >
          <button class="ui basic button large" style={{marginRight: '0.5em', border : '1px solid #0D1757', borderInlineStyle: 'solid', color : '#0D1757'}}>Sign in</button>
        </Menu.Item>
        <Menu.Item>
          <button class="ui button large" style={{marginRight: '0.5em', backgroundColor : '#0D1757', color : '#FFFFFF'}}>Sign up</button>
        </Menu.Item>
    </Menu>

    <Segment text style={{ marginTop: '76px' }}>
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
    
  </div>
  
)}

export default App