import React, { Component } from "react";
// import styled from "styled-components";

// This is the editing component
export class AddressWidget extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <TextField value={value} type='text' onChange={handleChange} />
    )
  }
}
