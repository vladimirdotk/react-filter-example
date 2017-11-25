import React, { Component } from 'react';
import './Input.css'

class Input extends Component {

  render() {
    return (
      <input className="Input" type="text" onChange={this.props.handleChange}/>
    )
  }

}

Input.defaultProps = {
  handleChange: () => {},
}

export default Input