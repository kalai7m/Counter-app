import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    let { counter, onIncrement, onDelete, onDecrement, onReset, onAdd } =
      this.props;
    return (
      <React.Fragment>
        <button className="btn btn-sm btn-secondary" onClick={onReset}>
          Reset
        </button>
        <button className="btn btn-sm btn-success m-2" onClick={onAdd}>
          Add Counter
        </button>
        {!!counter && !counter.length && <p>No Counters</p>}
        {counter.map((c) => {
          return (
            <Counter
              key={c.id}
              counter={c}
              onIncrement={onIncrement}
              onDelete={onDelete}
              onDecrement={onDecrement}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counters;
