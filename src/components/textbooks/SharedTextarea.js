import React, { Component } from "react";

class SharedTextarea extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <label>Enter value : </label>
        <input type="textarea" 
          name="textValue"
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default SharedTextarea;