import React from "react";

class Newinpt extends React.Component {
  render() {
    const { value, type, name, onInputChange } = this.props;
    return (
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={onInputChange}
        />
    );
  }
}

export default Newinpt;
