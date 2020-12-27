import React, { useState, useEffect } from 'react';
import { Segment, Button, Dropdown, Search } from 'semantic-ui-react';

import NewLoginModal from './../NewLoginModal';
import {SignUpProfileModal, SignUpFormModal} from '../SignUpModals';
import { useAuthState, useAuthDispatch } from './../../contexts/auth.context' 
import { logout as logoutUser } from 'actions/user.actions';

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

  const {userDetails} = useAuthState();


  const handleSearchInput =  (e) => {
    setSearchTerm(e.target.value)
  }

  const handleLanguageSelection = (e, data) => {
    setLanguage(data.value)
  }

  const handleSignInClick = () => {
    setLoginModalVisibility(true)
    setSignUpProfileModalVisibility(false);
    setSignUpFormModalVisibility(false)
  }

  const handleSignUpClick = () => {
    setLoginModalVisibility(false);
    setSignUpProfileModalVisibility(true)
  }

  const handleSignInClose = ()=>{
    setLoginModalVisibility(false)
    // setSignUpProfileModalVisibility(true);
    // setSignUpFormModalVisibility(false)
  }

  const handleSignUpClose = ()=>{
    setSignUpProfileModalVisibility(false);
    setSignUpFormModalVisibility(false)
  }
  const handleLogoutClick = () => {
    logoutUser(dispatch)
  }

  useEffect(() => {
    if(profileType) {
      setSignUpFormModalVisibility(true)
    }
  
  }, [profileType])

  useEffect(() => {
  //  reauthUser(dispatch)
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
        <NewLoginModal loginModalVisibility={loginModalVisibility} handleSignUpClick={handleSignUpClick} signUpProfileModalVisibility={signUpProfileModalVisibility}  setLoginModalVisibility={setLoginModalVisibility } handleSignInClose={handleSignInClose}/>
        <SignUpProfileModal signUpProfileModalVisibility={signUpProfileModalVisibility} setSignUpProfileModalVisibility={setSignUpProfileModalVisibility} setProfileType={setProfileType}  handleSignInClick={handleSignInClick} handleSignUpClose={handleSignUpClose}/>
        <SignUpFormModal signUpFormModalVisibility={signUpFormModalVisibility} setSignUpFormModalVisibility={setSignUpFormModalVisibility} profileType={profileType} setProfileType={setProfileType} handleSignInClick={handleSignInClick} handleSignUpClose={handleSignUpClose}/>
      </Segment>
  );
};

export default Navbar;
