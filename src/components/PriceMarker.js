import React, { Component } from "react";

import "./PriceMarker.css";

class PriceMarker extends Component {
  render() {
    return (
      <div
        className={`marker ${this.props.selected ? "selected" : null}`}
      >{`$${this.props.price}`}</div>
    );
  }
}

export default PriceMarker;
