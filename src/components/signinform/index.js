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
  MenuItem,
  Checkbox,
  Input
} from 'semantic-ui-react'
import './signinform.css';

export const signinform = () =>(
    <div className='form'>
        <Grid textAlign="center" style={{height : "100%"}}>
            <Grid.Row height={1}>
                <div className='welcometohk'>
                    Welcome to HeadKick!
                </div>
                <i class="large window close outline icon"/>
            </Grid.Row>

            <Grid.Row>
                <div className='logintocontinue'>Please login to continue.</div>
            </Grid.Row>

            <Grid.Row>
                <div className='email'>
                    Email
                </div>
            </Grid.Row>

            <Grid.Row>
                <Input focus placeholder='joe@schmoe.com' />
            </Grid.Row>
            
            <Grid.Row height={2}>
                <div className='email'>
                    Password
                </div>
            </Grid.Row>
            
            <Grid.Row>
                <Input focus placeholder='Enter 8 characters or more... ' icon={<Icon name='hide'/>}/>
            </Grid.Row>

            <Grid.Row columns={2}>
                <Grid.Column>
                    <div>
                        <Checkbox className='email' label='Save password'/>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div style={{color : "#1F94FF"}}>
                        Forgot password?
                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <button class="ui button" style={{width : '95%'}}>Login</button>
            </Grid.Row>
            
            <Divider horizontal fitted content="Or login with"></Divider>

            <Grid.Row columns={2}>
                <Grid.Column>
                    <button class="ui basic button"><Icon name='google'/> Google</button>
                </Grid.Column>
                <Grid.Column>
                    <button class="ui basic button"><Icon name='facebook square'/> Facebook</button>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <div>
                    <p>Don't have an account yet? <span style = {{color : "#1F94FF"}}>Sign up now!</span> </p>
                </div>
            </Grid.Row>
        </Grid>
    </div>
)