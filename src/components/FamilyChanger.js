import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <select onChange={e => this.props.update(e.target.value)} disabled={this.props.allowEdit === "false"} className="dropDownContainer">
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    );
  }
}
