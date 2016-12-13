import React, { Component } from 'react';

class SortButton extends Component {

  constructor() {
    super()
    this.handleUp = this.handleUp.bind(this)
    this.handleDown = this.handleDown.bind(this)
  }

  handleUp() {
    console.log("up")
    this.props.orderUp()
  }

  handleDown() {
    console.log("down")
    this.props.orderDown()
  }

  render() {
    return(
      <div> Sort repos alphabetically
        <div>
          <button onClick={this.handleUp}>A-Z</button>
          <button onClick={this.handleDown}>Z-A</button>
        </div>
      </div>
    )
  }
}
export default SortButton
