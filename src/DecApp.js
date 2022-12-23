import React, { Component } from "react";
import Counters from "./DecAppComponents/counters";
import { NavBar } from "./DecAppComponents/navbar";
class DecAppp extends Component {
  state = {
    counter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
    //console.log(counter);
  };
  handleDecrement = (counter) => {
    const c = [...this.state.counter];
    const ind = c.indexOf(counter);
    c[ind] = { ...counter };
    c[ind].value--;
    this.setState({ counter: c });
  };
  handleDelete = (counterId) => {
    const counter = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter });
    //console.log(this.state.counter[counterId - 1]);
  };
  handleReset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };
  handleAdd = () => {
    const counter = [...this.state.counter];
    counter.push({ id: counter.length + 1, value: 0 });
    this.setState({ counter });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar len={this.state.counter.length} />
        <div class="container">
          <Counters
            counter={this.state.counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DecAppp;
