import React from "react";
import ReactDOM from 'react-dom'
import Counter from "./Counter";

class App extends React.Component {
  render () {
    return (
      <div>
        <counter/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))