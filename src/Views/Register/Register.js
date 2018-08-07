import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

import './Register_styles.css';




class Register extends Component {

    inputs = [
        {
            label: "First Name",
            property: "client_firstName"
        },
        {
            label: "Last Name",
            property: "client_lastName"
        },
        {
            label: "Email",
            property: "client_email"
        },
        {
            label: "Password",
            property: "client_password"
        },
        {
            label: "Phone",
            property: "client_phone1"
        },

    ];

    constructor(){
        super();

        const inputProperties = this.refreshState();

        this.state = {
            ...inputProperties,
            client_firstName: '',
            client_lastName: '',
            client_email: '',
            client_password: '',
            client_phone1: '',
        }
    }


    handleChange(e, name){
        const value = e.target.value;
        this.setState({[name]: value})
    }

    refreshState(){
        return this.inputs.reduce((map, input) => {
            return {
                ...map,
                [input.property] : ''
            }
        }, {});
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const {client_id, client_firstName, client_lastName, client_email, client_password, client_phone1} = this.state;
    //     const newClient = {client_id, client_firstName, client_lastName, client_email, client_password, client_phone1};
    //     if(this.onSubmit){
    //         this.onSubmit(e, newClient)
    //     }

    //     axios.post('/api/client_info', newClient)
    //         .then(response => { 
    //                 this.setState(this.refreshState())
    //             })
    //         .catch(err => {
    //             console.warn('Could not register', err);
    //         })
    // }






    render(){
        const inputs = this.inputs
        .map((input, i) => (
            <div key={`new-client-${i}`}>
                <div>
                    <label>
                        {input.label}:
                        <br /><input
                            type='text'
                            value={this.state[input.property]}
                            onChange={e => this.handleChange(e, input.property)}
                            name={input.property} />
                    </label>
                </div>
            </div>
        ));



        return(
            <div>
                <h2>Register</h2>

                <form className='register-form'>
                    <div className='input-box'>

                        {inputs}

                    </div>

                    <div className='reg-button-box'>
                        <button type='submit' className='register-button'>Register</button>
                        <Link to='/'>
                            <button className='register-button'>Cancel</button>
                        </Link>
                    </div>    

                </form>

            </div>
        )
    };






}

export default Register;