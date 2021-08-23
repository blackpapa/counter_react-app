import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getButtonClass()}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgeClass() {
    let classes = "badge bg-";
    return (classes += this.props.counter.value === 0 ? "warning" : "success");
  }

  getButtonClass() {
    let classes = "btn btn-sm m-2 btn-";
    return (classes +=
      this.props.counter.value === 0 ? "secondary" : "primary");
  }
}

export default Counter;
