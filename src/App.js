import React from "react";
import "./App.css";
import MapGL, { Marker } from "react-map-gl";

import Flat from "./components/Flat";
import PriceMarker from "./components/PriceMarker";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2xhaXJlZnJvZnJvZnJvIiwiYSI6ImNrZTlhZXFhajAxd3IzMW1qdWxmNmJsbXIifQ.lbPzivrmR4KpokhRw3_10A";

const Hello = () => {
  const [firstname, setFirstname] = useState("my name");
  const [lastname, setLastname] = useState("my  lastname");

  const handleClick = () => {
    setFirstname("new name");
  };

  return <div>Hello {firstname}!</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlats: [],
      flats: [],
      selectedFlat: null,
      search: "",
      viewport: {
        latitude: 45.4972159, // Montreal
        longitude: -73.6103642, // Montreal
        zoom: 12,
        pitch: 0,
        bearing: 0,
      },
    };
  }

  selectFlat = (flat) => {
    this.setState((prevState) => ({
      selectedFlat: flat,
      viewport: {
        ...prevState.viewport,
        latitude: flat.lat,
        longitude: flat.lng,
      },
    }));
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/clairefro/flats-boilerplate/master/flats.json"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ flats: data, allFlats: data }));
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) =>
        new RegExp(event.target.value, "i").exec(flat.name)
      ),
    });
  };

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => (
              <Flat key={flat.id} flat={flat} selectFlat={this.selectFlat} />
            ))}
          </div>
        </div>
        <div className="map">
          <MapGL
            {...this.state.viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            transitionDuration={200}
          >
            {this.state.flats.map((flat) => (
              <Marker key={flat.id} longitude={flat.lng} latitude={flat.lat}>
                <PriceMarker
                  price={flat.price}
                  selected={flat === this.state.selectedFlat}
                />
              </Marker>
            ))}
          </MapGL>
        </div>
      </div>
    );
  }
}

export default App;
