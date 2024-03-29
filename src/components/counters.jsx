import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
        <button
          onClick={() => {
            this.props.onAdd(this.props.counters);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          add
        </button>
      </div>
    );
  }
}

export default Counters;
