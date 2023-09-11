
import React, { Component } from 'react'

export default class Child extends Component {

  render() {
    return (
      <>
      <h3> hello ya {this.props.pro.name} </h3>
      </>
    )
  }
}
