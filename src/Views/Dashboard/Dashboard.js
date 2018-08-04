import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Dashboard extends Component {



    render(){
        return(
            <div className='dashboard-page'>
                <div className='dashboard-header'>
                    Dashboard
                    <Link to='/'>
                        <button>Logout</button>
                    </Link>
                </div>
            </div>
        )
    }


}

export default Dashboard;