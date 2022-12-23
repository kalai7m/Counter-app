import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.formatCountClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    let { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
  formatCountClass() {
    let classname = "badge m-2 badge-";
    classname += this.props.counter.value === 0 ? "warning" : "primary";
    //console.log(this.props.counter.value, classname);
    return classname;
  }
}

export default Counter;
