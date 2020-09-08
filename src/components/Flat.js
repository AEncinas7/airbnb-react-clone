import React from "react";

import "./Flat.css";

//
// {
//     "id": 145,
//     "name": "The Stay Chez Claudette",
//     "imageUrl": "https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/images/chez-claudette-tripadvisor.jpg",
//     "price": 164,
//     "priceCurrency": "CAD",
//     "lat": 45.5264082,
//     "lng": -73.5900536
//   }
//
class Flat extends React.Component {
  selectFlat = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const { imageUrl, price, name, priceCurrency } = this.props.flat;
    return (
      <div className="flat" onClick={this.selectFlat}>
        <div
          className="flat-picture"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
        <div className="flat-title">
          {name} {price}
          {priceCurrency}
        </div>
      </div>
    );
  }
}

export default Flat;
