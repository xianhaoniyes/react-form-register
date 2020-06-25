import React from 'react';
import './styles.css';
import { ERRORS } from './constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onInput = (field) => event => {
    if(!(ERRORS[field].regex).test(event.target.value)&&event.target.value.length>0)
      this.setState({
        [field+"Error"]: ERRORS[field].message
      });
    else
      this.setState({
        [field+"Error"]: null
      });
  }

  onSubmit = () => {
    if(this.state.usernameError===null &this.state.passwordError===null)
      alert("Success");
  }

  render() {
    return (
      <div className="App">
        <div className="logo">
          <img
            src="https://www.freelogoservices.com/blog/wp-content/uploads/little_caesars_character-1.png"
            width="100px"
          />
        </div>
        <form>
          <label for="username">
            <span className="label-star">*</span> Username:
            <input
              id="username"
              name="username"
              placeholder="6~10 characters"
              type="text"
              onChange={this.onInput("username")}
            />
          </label>
          {this.state.usernameError&&<p className="error">{this.state.usernameError}</p>}
          <label for="password">
            <span className="label-star">*</span> Password:
            <input
              id="password"
              name="password"
              placeholder="6~10 numbers"
              type="password"
              onChange={this.onInput("password")}
            />
          </label>
            {this.state.passwordError&&<p className="error">{this.state.passwordError}</p>}
          <button type="submit" onClick={this.onSubmit}>Register</button>
        </form>
      </div>
    );
  }
}
