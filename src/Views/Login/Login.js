import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login_styles.css';


class Login extends Component {



    render(){
        return(
            <div classname='login-content'>  
                    <div className='login-box'>

                        <div className='input-header'>
                            Login
                        </div>

                        <div className='login-inputs'>
                            <input placeholder='e-mail' type='text'/>
                            <br /><input placeholder='password' type='password'/>
                        </div>

                        <div className='login-buttons'>
                            <br /><Link to={'/dashboard'}>
                                <button>
                                    Login
                                </button>
                            </Link>
                            <Link to={'/register'}>
                                <button>
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
        )
    }


}

export default Login;