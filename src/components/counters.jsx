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

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        <ul>
          {this.state.counters.map((counter) => (
            <li key={counter.id}>
              <Counter
                counter={counter}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
