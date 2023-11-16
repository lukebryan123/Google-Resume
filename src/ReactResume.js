import GoogleLogo from './images/google-logo.jpg';
import GearIcon from './images/settings-icon.png';
import Dots from './images/dots-menu-icon.png';
import LB from './images/Luke-Bryan.jpeg';
// import Header from './Assets/Header';
import MainPage from './Assets/MainPage';
import React, { useState } from 'react';
import { search } from './Assets/Search';

function ReactResume() {

  const callSearch = () => {
    // should be something to pass the searchText
    console.log("searched " + searchValue);
    runSearch();
  };

  let searchResults;

  const runSearch = () => {
    if (searchValue) {
        searchResults = search(searchValue.trim());
        // console.log(searchResults);
        // setSearchValue(searchValue + ' ');
        // setSearchValue(searchValue.trim());
        handleCounter(counter + 1)
    }
}

  const [searchValue, setSearchValue] = useState('');
  
  const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
  }

  const [counter, setCounter] = useState('');
  
  const handleCounter = (event) => {
    console.log(event);
    setCounter(Number(event) + 1);
  }

  const handleSearchKeyPress = (event) => {
    if (event.code === "Enter") {
      runSearch()
    }  
  }

    return (
  
      <div id="main-page">
        <header>
          {/* <Header /> */}
          <div id="left-header">
            <div id="logo-and-search">
                <img id="google-logo-top" src={GoogleLogo} alt="google logo"></img>
                <input 
                  id="search-bar" 
                  type="text" 
                  value={searchValue}
                  onKeyUp={handleSearchKeyPress} 
                  onChange={handleSearchChange}
                ></input>
                {/* DEEEFFFINITELY NEED TO STYLE THE SEARCH BUTTON */}
                <button onClick={callSearch} >search</button>
            </div>
            <ul id="header-media-options">
              <li className="active">
                  All
              </li>
              <li>
                  Images
              </li>
              <li>
                  Videos
              </li>
              <li>
                  Maps
              </li>
              <li>
                  More
              </li>
            </ul>
          </div>
          <div id="right-header">
              <ul>
                  <li><img className="icon" src={GearIcon} alt="Settings"></img></li>
                  <li><img className="icon" src={Dots} alt="Other Google Apps"></img></li>
                  <li><img id="user-image" src={LB} alt="User-profile"></img></li>
              </ul>
            </div>
        </header>
        <div id="main-page"><MainPage data={counter}/></div>
        <footer>
          <h5>02135, Boston MA <span> - <a href="mailto:lukembryan1@gmail.com">lukembryan1@gmail.com</a> </span></h5>
          <ul id="footer-links">
              <li>Help</li>
              <li>Send Feedback</li>
              <li>Privacy</li>
              <li>Terms</li>
          </ul>
      </footer>
    </div>

  );
}

// ReactResume.defaultProps = {
//   searchValue: "Luke Bryan",
//   counter: 0
// }
  
export default ReactResume;