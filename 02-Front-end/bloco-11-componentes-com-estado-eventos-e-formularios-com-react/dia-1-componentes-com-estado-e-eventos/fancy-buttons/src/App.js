import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroDeCliques: 0,
      // buttonColor: " ",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(({numeroDeCliques}) => ({
      numeroDeCliques: numeroDeCliques + 1,
    }), () => {
      console.log(`${this.buttonColor(this.state.numeroDeCliques)}`);
    });
  }
    buttonColor(num) {
      return num % 2 === 0 ? 'green' : 'red';
    
    // if (this.state.numeroDeCliques % 2 === 0) {
    //   this.setState({ buttonColor: "red" });
    // } else {
    //   this.setState({buttonColor: "green"})
    // }
  }

  render() {
    const {numeroDeCliques} = this.state;
    return (
      <button
        onClick={this.handleClick}
        type= "button"
        style={{ backgroundColor: this.buttonColor(numeroDeCliques) }}>
          {numeroDeCliques}
      </button>
    );
  }
}

export default App;
