import React from 'react';

const User = (props) => {


        return(
            <div className="user-box">  
                    <br />{props.client_firstName}
                    <br />{props.client_lastName}
                    <br />{props.client_email}
                    <br />{props.client_password}
                    <br />{props.client_phone1}
                    <div className="user-buttons">
                        <button>Edit</button>
                    </div>
            </div>
        )


};

export default User;