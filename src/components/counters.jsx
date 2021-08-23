import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        <ul>
          {this.props.counters.map((counter) => (
            <li key={counter.id}>
              <Counter
                counter={counter}
                onIncrement={this.props.onIncrement}
                onDelete={this.props.onDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
