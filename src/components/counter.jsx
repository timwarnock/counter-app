import React, { Component } from "react";

class Counter extends Component {
  // no state, because this is a "controlled component"

  render() {
    return (
      <React.Fragment>
        <div id={"counter" + this.props.counter.id}>
          <span style={{ display: "inline-block", minWidth: 60 }}>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary m-1 btn-sm font-weight-bold"
          >
            +
          </button>
          <button
            onClick={() => this.props.onIncrement(this.props.counter, -1)}
            className="btn btn-secondary m-1 btn-sm font-weight-bold"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            remove
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
