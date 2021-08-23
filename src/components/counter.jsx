import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getBadgeClass()}
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  //   formatCount() {
  //     const { value } = this.state;
  //     return value === 0 ? "zero" : value;
  //   }

  getBadgeClass() {
    let classes = "btn btn-sm m-2 btn-";
    return (classes +=
      this.props.counter.value === 0 ? "secondary" : "primary");
  }
}

export default Counter;
