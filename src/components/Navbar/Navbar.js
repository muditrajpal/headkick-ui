import React, { useState, useEffect } from 'react';
import { Segment, Button, Dropdown, Search } from 'semantic-ui-react';

import NewLoginModal from './../NewLoginModal';
import {SignUpProfileModal, SignUpFormModal} from '../SignUpModals';


const languageOptions = [
  { key: 'en', value: 'en', text: 'EN' },
  { key: 'es', value: 'es', text: 'ESP' },
]

const Navbar = () => {
  const [searchTerm, setSearchTerm ]  = useState('');
  const [language, setLanguage ] = useState('en');
  const [loginModalVisibility, setLoginModalVisibility] = useState(false);
  const [signUpProfileModalVisibility, setSignUpProfileModalVisibility] = useState(false);
  const [signUpFormModalVisibility, setSignUpFormModalVisibility] = useState(false);
  const [profileType, setProfileType ] = useState('')

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
    console.log('handleSignUpClick t')
    setSignUpProfileModalVisibility(!loginModalVisibility)
    setSignUpProfileModalVisibility(true)
  }

  console.log('signUpFormModalVisibilitysignUpFormModalVisibility', )

  console.log('profileType', profileType)

  useEffect(() => {
    console.log('profileType selected', profileType)
    if(profileType) {
      setSignUpFormModalVisibility(true)
    }
  
  }, [profileType])

  return (
      <Segment className="navbar">
        <div className="navbarContent" floated='right'>
          <Search className="navbarSearch" value={searchTerm} onSearchChange={(e) =>handleSearchInput(e)}  icon='search' placeholder='Search news, blogs, matches, schedules...' />
          <Dropdown onChange={handleLanguageSelection} className="navbarLanguageSelection" fluid selection defaultValue={language} options={languageOptions}
/>
          <Button onClick={handleSignInClick} id="navbarSignIn" basic> Sign in</Button>
          <Button onClick={handleSignUpClick} id="navbarSignUp" basic> Sign up</Button>
        </div>
        <NewLoginModal loginModalVisibility={loginModalVisibility} setLoginModalVisibility={setLoginModalVisibility} />
        <SignUpProfileModal signUpProfileModalVisibility={signUpProfileModalVisibility} setSignUpProfileModalVisibility={setSignUpProfileModalVisibility} setProfileType={setProfileType}  />
        <SignUpFormModal signUpFormModalVisibility={signUpFormModalVisibility} setSignUpFormModalVisibility={setSignUpFormModalVisibility} profileType={profileType} setProfileType={setProfileType}  />
      </Segment>
  );
};

export default Navbar;
