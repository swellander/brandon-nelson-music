import React, { Component } from "react";
import AddressWidget from './AddressWidget';
import { TextField } from '@material-ui/core';
// import styled from "styled-components";

// This is the editing component
export class AddressWidgetControl extends Component {
  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    );
  }
}