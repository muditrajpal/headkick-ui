import React, { useState, useEffect } from 'react';
import { Segment, Button, Dropdown, Search } from 'semantic-ui-react';
import localForage from 'localforage';
import history from "historyObj";

import NewLoginModal from './../NewLoginModal';
import {SignUpProfileModal, SignUpFormModal} from '../SignUpModals';
import { useAuthState, useAuthDispatch } from './../../contexts/auth.context' 
import { reauthUser, logoutUser } from 'actions/user.actions';

import { ReactComponent as ProfileIcon } from './../../assets/svgs/profileIcon.svg'
import { ReactComponent as CartIcon } from './../../assets/svgs/cartIcon.svg'

import { academyIcon } from './../../assets/svg'

const languageOptions = [
  { key: 'en', value: 'en', text: 'EN' },
  { key: 'es', value: 'es', text: 'ESP' },
]
const svgPathStyle=  { stroke: "white",fill:"red" };

const Navbar = (props) => {
  const [searchTerm, setSearchTerm ]  = useState('');
  const [language, setLanguage ] = useState('en');
  const [loginModalVisibility, setLoginModalVisibility] = useState(false);
  const [signUpProfileModalVisibility, setSignUpProfileModalVisibility] = useState(false);
  const [signUpFormModalVisibility, setSignUpFormModalVisibility] = useState(false);
  const [profileType, setProfileType ] = useState('')
  const dispatch = useAuthDispatch();

  const {userDetails} = useAuthState() 

  const handleSearchInput =  (e) => {
    setSearchTerm(e.target.value)
  }

  const handleLanguageSelection = (e, data) => {
    setLanguage(data.value)
  }

  const handleSignInClick = () => {
    setLoginModalVisibility(!loginModalVisibility)
  }

  const handleSignUpClick = () => {
    setSignUpProfileModalVisibility(!loginModalVisibility)
    setSignUpProfileModalVisibility(true)
  }

  const handleLogoutClick = async () => {
    const {token, email } = await localForage.getItem("currentUser");
    const payload = {token, email};
    const { status} = await logoutUser(dispatch, payload);
    if(status === 200) {
      history.push("/tournament/overview");
    }
  }

  useEffect(() => {
    if(profileType) {
      setSignUpFormModalVisibility(true)
    }
  
  }, [profileType])

  useEffect(() => {
    reauthUser(dispatch)
  }, [dispatch])

  return (
      <Segment className="navbar">
        <div className="navbarContent" floated='right'>
          <Search className="navbarSearch" value={searchTerm} onSearchChange={(e) =>handleSearchInput(e)}  icon='search' placeholder='Search news, blogs, matches, schedules...' />
          <Dropdown onChange={handleLanguageSelection} className="navbarLanguageSelection" fluid selection defaultValue={language} options={languageOptions}
          />
          { userDetails ? (<div className='navbarAuthButtons'>
            <CartIcon />
            <ProfileIcon />
            <Button onClick={handleLogoutClick} id="navbarLogout" basic>Logout</Button>
            </div>) : (<div className="navbarUnauthButtons">
            <Button onClick={handleSignInClick} id="navbarSignIn" basic>Sign in</Button>
            <Button onClick={handleSignUpClick} id="navbarSignUp" basic>Sign up</Button>
          </div>)
          }
        </div>
        <NewLoginModal loginModalVisibility={loginModalVisibility} setLoginModalVisibility={setLoginModalVisibility} />
        <SignUpProfileModal signUpProfileModalVisibility={signUpProfileModalVisibility} setSignUpProfileModalVisibility={setSignUpProfileModalVisibility} setProfileType={setProfileType}  />
        <SignUpFormModal signUpFormModalVisibility={signUpFormModalVisibility} setSignUpFormModalVisibility={setSignUpFormModalVisibility} profileType={profileType} setProfileType={setProfileType}  />
      </Segment>
  );
};

export default Navbar;
