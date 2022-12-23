import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counter];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(counters[index]);
    this.setState({
      counter: counters,
    });
  };

  handleReset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counter: counter,
    });
  };

  handleDelete = (counterId) => {
    console.log("event handler clicked: ", counterId);
    let counter = this.state.counter.filter((c) => c.id !== counterId);
    this.setState({ counter });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counter}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
