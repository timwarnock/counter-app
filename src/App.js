import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter, i = 1) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += i;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addCounter = c => {
    let counters = [...this.state.counters];
    const new_id =
      Math.max.apply(
        Math,
        counters.map(function(o) {
          return o.id;
        })
      ) + 1;
    counters.push({ id: new_id, value: 0 });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.addCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
