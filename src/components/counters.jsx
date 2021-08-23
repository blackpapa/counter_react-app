import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  reset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.reset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        <ul>
          {this.state.counters.map((counter) => (
            <li key={counter.id}>
              <Counter counter={counter} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
