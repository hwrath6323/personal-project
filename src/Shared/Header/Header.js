import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header_styles.css';

class Header extends Component {


    render(){
        return (
          <div className="header-box">
            <div className='name-text'>
              Ephemeris
            </div>
          </div>
        );
    }
}

export default Header;