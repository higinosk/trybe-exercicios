import React from "react";
import Newinpt from "./Newinpt";

class Registro extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
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

  render() {
    const { email, password, name } = this.state;

    return (
      <section>
        <h2>Registro</h2>
        <form action="">
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
          <label htmlFor="name">
              Name
          <Newinpt
            name="name"
            type="text"
            value={name}
            onInputChange={this.changeInput}
          />
          </label>
        </form>
      </section>
    );
  }
}
export default Registro;
