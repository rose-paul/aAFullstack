import React from 'react';
import { Link } from 'react-router-dom';

class CreateUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { user: {
            email: "",
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            gender: "unspecified",
            birthday: "unspecified"
        }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => (this.setState({ [field]: e.target.value }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user).then(() => this.props.history.push('/'))
    }

    render() {

        let errors = [];
        if (this.props.errors) {
            errors = this.props.errors;
        }

        return (
            <div>
                
                <h1>Backendgram</h1>
                
                <p>Sign up to see photos and videos from you friends.</p>
                
                <Link to="/login">Login</Link>
                    <h4>OR</h4>
                <form onSubmit={this.handleSubmit}>



                    {/* <ul className='errors'>
                        {
                            errors.map((error) => {
                                return <p>{error}</p>;
                            })}
                    </ul> */}


                    <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={this.handleInput('user[email]')}
                    placeholder="Email"
                    />
                    <br/>
                    <input 
                    type="text" 
                    value={this.state.first_name} 
                    onChange={this.handleInput('user[first_name]')}
                    placeholder="First name"
                    />
                    <br/>
                    <input 
                    type="text" 
                    value={this.state.last_name} 
                    onChange={this.handleInput('user[last_name]')}
                    placeholder="Last name"
                    />
                    <br/>
                    <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleInput('user[username]')}
                    placeholder="Username"
                    />
                    <br/>
                    <input 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleInput('user[password]')}
                    placeholder="Password"
                    />
                    <br/>
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default CreateUserForm;