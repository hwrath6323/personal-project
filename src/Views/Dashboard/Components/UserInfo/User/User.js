import React from 'react';
import './User_styles.css';



const User = (props) => {


        return(
            <div className="user-box" class='wrapper'>  
                    <div className="user-form" class='content'>
                        <br />(firstname) (lastname)
                        <br />Email: (email)
                    {/* <br />{props.client_password} */}
                        <br />Phone: (phone)
                    </div>
                    
                    <div className='edit-button'>
                        <button>Edit</button>
                    </div>
            </div>
        )


};

export default User;


{/* <br />{props.client_firstName} {props.client_lastName}
<br />{props.client_email}
<br />{props.client_password}
<br />{props.client_phone1} */}