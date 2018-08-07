import React, {Component} from 'react';
import User from './User/User';
// import axios from 'axios';

import './UserInfo_styles.css';


class UserInfo extends Component {

    constructor(){
        super();

        this.state = {
            clientList: [],
            clientInfo: {
                id: 0,
                client_firstName: '',
                client_lastName: '',
                client_email: '',
                client_password: '',
                client_phone1: ''
            }

        }



        // this.getUserInfo = this.getUserInfo.bind(this);
    }

    // componentDidMount(){
    //     this.getUserInfo()
    // }

    // getUserInfo = (client_id) => {
    //     axios.get('/api/client_info' + client_id)
    //     .then(response => {
    //         this.setState({
    //             clientInfo: response.data,
    //         });
    //     });
    // }

    render(){
        return(
            <div className='user-info-container'>
                <div className='ui-container-header'>
                    User Info
                </div>

                <div className='info-box'>
                    {this.state.clientList
                        .map((item) => {
                            return(
                                <User {...item}
                                    className="user-info"
                                    key={item.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }


}

export default UserInfo;