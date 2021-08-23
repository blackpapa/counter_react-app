import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button onClick={props.onReset} className="btn-primary btn-sm m-2">
        Reset
      </button>
      <ul>
        {this.props.counters.map((counter) => (
          <li key={counter.id}>
            <Counter
              counter={counter}
              onIncrement={props.onIncrement}
              onDelete={props.onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counters;
