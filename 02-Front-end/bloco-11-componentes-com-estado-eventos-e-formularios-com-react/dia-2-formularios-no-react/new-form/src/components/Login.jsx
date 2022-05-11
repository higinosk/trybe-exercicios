import React from "react";
import Newinpt from "./Newinpt";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  changeInput = (event) => {
    //copia o this de onde estava
    const key = event.target.name;
    const { value } = event.target;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
  }

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">
            Email
            <Newinpt
              name="email"
              type="email"
              value={email}
              onInputChange={this.changeInput}
            />
          </label>
          <label htmlFor="password">
            Password
            <Newinpt
              name="password"
              type="password"
              value={password}
              onInputChange={this.changeInput}
            />
          </label>
        </form>
      </section>
    );
  }
}

export default Login;
