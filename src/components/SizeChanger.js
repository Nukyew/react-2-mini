import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <select onChange={e => this.props.update(parseInt(e.target.value, 10))} disabled={this.props.allowEdit === "false"} className="dropDownContainer">
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
