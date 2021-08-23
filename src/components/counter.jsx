import React, { Component } from "react";

class Counter extends Component {
  state = { value: 0 };
  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button className={this.getBadgeClass()}>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }

  getBadgeClass() {
    let classes = "btn btm-sm m-2 btn-";
    return (classes += this.state.value === 0 ? "secondary" : "primary");
  }
}

export default Counter;
