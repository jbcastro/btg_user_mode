import React, { Component } from "react";
import "./styles/App.css";

import MobileBlocks from "./MobileBlocks";
import MobileBar from "./MobileBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: [],
      glass: {},
      filter: "",
      curItem: {},
      filteredWines: [],
      unFilteredWines: []
    };

    this.onSelect = this.onSelect.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSort = this.onSort.bind(this);

    // this.filterWines = this.filterWines.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()

      .then(res => {
        const glassesData = res.express;

        this.setState({ glasses: glassesData });
        this.setState({ unFilteredWines: glassesData });
      })
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  //for adding and updating

  //making whatever is typed in as current item

  //filter to just wines that have the features ie certain grapes, area, etc
  onSelect = event => {
    let value = event.target.value;
    const id = event.target.id;

    // if(value==!null){
    //   return value.toLowerCase()
    // }
    const glasses = this.state.glasses;

    const grapes = glasses.filter(result => {
      if (value === "grapes") {
        return result.grapes === id;
      } else if (value === "grape") {
        return (
          result.grape1 === id || result.grape2 === id || result.grape3 === id
        );

        //safgasfg
      } else if (value === "year") {
        return result.year === id;
      } else if (value === "place") {
        return result.place === id;
      } else if (value === "area") {
        return result.area === id;
      } else if (value === "country") {
        return result.country === id;
      } else if (value === "appellation") {
        return result.appellation === id;
      } else if (value === "place") {
        return result.place === id;
      } else if (value === "mise") {
        return result.mise === id;
      } else if (value === "description") {
        return (
          result.description1 === id ||
          result.description2 === id ||
          result.description3 === id ||
          result.description4 === id ||
          result.description5 === id ||
          result.description6 === id
        );
      }
    });

    this.setState({ glasses: grapes });
  };

  onClear = event => {
    const unFilteredWines1 = this.state.unFilteredWines;

    this.setState({ glasses: unFilteredWines1 });
  };
  onSort = event => {};

  ///render portion

  //
  //
  //
  //

  render() {
    return (
      <div className="App">
        <MobileBar
          onClear={this.onClear}
          onSort={this.onSort}
          glasses={this.state.glasses}
          unFilteredWines={this.state.unFilteredWines}
        />
        <MobileBlocks
          glasses={this.state.glasses}
          wines={this.state.filteredWines}
          match={this.props.match}
          onSelect={this.onSelect}
          onClear={this.onClear}
          curItem={this.state.curItem}
        />
      </div>
    );
  }
}

export default App;
