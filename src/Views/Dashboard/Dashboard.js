import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import UserInfo from './Components/UserInfo/UserInfo';
import UserCalendar from './Components/UserCalendar/UserCalendar';

import './Dashboard_styles.css';


class Dashboard extends Component {



    render(){
        return(
            <div className='dashboard-page'>
                <div className='dashboard-header'>
                    Dashboard
                    <button className="logout-button">
                        <Link to='/'>Logout</Link>
                    </button>
                </div>

                <div className='user-box'>
                    <UserInfo />
                </div>

                <div className='calendar-box'>
                    <UserCalendar />
                </div>

            </div>
        )
    }


}

export default Dashboard;