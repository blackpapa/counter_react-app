import React from "react";
import Counter from "./counter";

const Counters = ({
  onReset,
  onIncrement,
  onDecrement,
  onDelete,
  counters,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn-primary btn-sm m-2">
        Reset
      </button>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <Counter
              counter={counter}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counters;
