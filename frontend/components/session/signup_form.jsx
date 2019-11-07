import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "", 
            email: "", 
            password: "", 
            processed: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const signup = this.props.signup;
        const user = Object.assign({}, this.state);
        signup(user);
        this.setState({ processed: true });
    }

    renderErrors() {
        if (this.state.processed) {
            return (
                <div>
                    <ul>
                        {
                            this.props.errors.map( (error, i) => (
                                <li key={`error-${i}`}>{error}</li>
                            ))
                        }
                    </ul>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>

                    {this.renderErrors()}
                    <div className="signup-form">
                        <br/>
                        <h2>CREATE AN ACCOUNT</h2>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto:500&display=swap');
                        </style>
                        <br/>
                        
                        <p>Your credit card information will not be saved.</p>
                        <p>Register for fast and easy checkout and to save account order information.</p>
                    
                        <br />
                        <label>FIRST NAME</label>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                            <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                            />
                        
                        <label>LAST NAME</label>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                            <input
                                type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                            />
                        
                        <label>EMAIL*</label>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        
                        <label>PASSWORD*</label>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        <br/>
                        <input type="submit" className="submit" value="REGISTER" />
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                        </style>
                        <p>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
                        <p id="required-fields">* REQUIRED FIELDS</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;