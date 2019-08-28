import React, { Component } from 'react';

export default class EditToggle extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <select onChange={e => this.props.update(e.target.value)} className="dropDownContainer ml0">
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    );
  }
}
