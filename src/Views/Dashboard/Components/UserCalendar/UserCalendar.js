import React, {Component} from 'react';
import Calendar from 'react-calendar';

import './UserCalendar_styles.css';




class UserCalendar extends Component {



    render(){
        return(
            <div className='calendar-container'>
                <div className='calendar-header'>
                    Calendar
                </div>

                {/* <div className='calendar-box'> */}
                    <Calendar />
                {/* </div> */}

                <div className='add-event-button'>
                    <button>Add Event</button>
                </div>    
            </div>
        )
    }


}

export default UserCalendar;