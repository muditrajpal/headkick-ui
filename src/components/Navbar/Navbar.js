import React, { useState} from 'react';
import { Segment, Button, Dropdown, Search } from 'semantic-ui-react';

import NewLoginModal from './../NewLoginModal';


const languageOptions = [
  { key: 'en', value: 'en', text: 'EN' },
  { key: 'es', value: 'es', text: 'ESP' },
]

const Navbar = () => {
  const [searchTerm, setSearchTerm ]  = useState('');
  const [language, setLanguage ] = useState('en');
  const [loginModalVisibility, setLoginModalVisibility] = useState(false)

  const handleSearchInput =  (e) => {
    setSearchTerm(e.target.value)
  }

  const handleLanguageSelection = (e, data) => {
    setLanguage(data.value)
  }

  const handleSignInClick = () => {
    setLoginModalVisibility(!loginModalVisibility)
  }

  return (
      <Segment className="navbar">
        <div className="navbarContent" floated='right'>
          <Search className="navbarSearch" value={searchTerm} onSearchChange={(e) =>handleSearchInput(e)}  icon='search' placeholder='Search news, blogs, matches, schedules...' />
          <Dropdown onChange={handleLanguageSelection} className="navbarLanguageSelection" fluid selection defaultValue={language} options={languageOptions}
    // onChange={(e, {value}) => this.updateDropdownList('forWhat',[value:value, text:"works"])}
/>
          <Button onClick={handleSignInClick} id="navbarSignIn" basic> Sign in</Button>
          <Button id="navbarSignUp" basic> Sign up</Button>
        </div>
        <NewLoginModal loginModalVisibility={loginModalVisibility} setLoginModalVisibility={setLoginModalVisibility} />
      </Segment>
  );
};

export default Navbar;
