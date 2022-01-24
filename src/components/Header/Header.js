import React from 'react'
import WestpacLogo from '../../resources/Westpac-logo.png'
import "./Header.css"
import {Link} from "react-router-dom"
import  SearchIcon from "@material-ui/icons/Search";


const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={WestpacLogo} alt="Logo"></img>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">

      <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">About Us</span>

          </div>
      </Link>
      <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Notifications</span>

          </div>
      </Link>

        <Link to="/" className="header__link">
            <div className="header__option">
              <span  className="header__optionLineOne">Hello Pulkit</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
        </Link>


      </div>
    </nav>
  )
}

export default Header;
