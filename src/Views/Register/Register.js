import React, {Component} from 'react';
import {Link} from 'react-router-dom';




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
                Register

                <form className='register-form'>
                    <div className='input-box'>

                        {inputs}

                        <Link to='/'>
                            <button>Cancel</button>
                        </Link>

                        <Link to='/'>
                            <button>Register</button>
                        </Link>

                    </div>
                </form>

            </div>
        )
    };






}

export default Register;