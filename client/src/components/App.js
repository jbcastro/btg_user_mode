import React, { Component } from "react";
import "./styles/App.css";

import MobileBlocks from "./MobileBlocks";
import MobileBar from "./MobileBar";
import MobileBlocksData from "./MobileBlocksData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: [],
      glass: {},
      filter: "",
      curItem: {},
      filteredWines: [],
      allInfo: [],
      mappedGlasses: {}
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

        //create array of searchable data
        let allSearchableData = glassesData.map(result => {
          return [
            result.description1,
            result.description2,
            result.description3,
            result.description4,
            result.description5,
            result.description6,
            result.description7,
            result.description8,
            result.description9,
            result.description10,
            result.appellation,
            result.area,
            result.color,
            result.counry,
            result.grape1,
            result.grape2,
            result.grape3,
            result.grapes,
            result.mise,
            result.name,
            result.place,
            result.year,
            result.vinyard
          ];
        });
        //make one array from many
        let allInfo1 = allSearchableData.flat(Infinity);
        //filter out non strings
        let allInfo2 = allInfo1.filter(item => typeof item === "string");
        //decapitalize allInfo
        let allInfo3 = allInfo2.map(str =>
          str.replace(/\b[a-z]/g, char => char.toUpperCase())
        );
        //fitler out duplicates
        let allInfoSet = new Set(allInfo3);
        let allInfo4 = [...allInfoSet];
        //give items keys
        let allInfo = allInfo4.map((value, index) => {
          return {
            key: index.toString(),
            value: value
          };
        });

        this.setState({ allInfo: allInfo });
        const glasses = this.state.glasses;
        const mappedGlasses = glasses.map(result => (
          <li key={result._id}>{result}</li>
        ));
        this.setState({ mappedGlasses: mappedGlasses });
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

  //filter to just wines that have the features ie certain grapes, area, etc
  onSelect = event => {
    let value = event.target.value;
    const id1 = event.target.id;
    let id = id1.toUpperCase();

    const glasses = this.state.glasses;

    const grapes = glasses.filter(result => {
      if (value === "grapes") {
        return result.grapes.toUpperCase() === id;
      } else if (value === "grape") {
        return (
          result.grape1.toUpperCase() === id ||
          result.grape2.toUpperCase() === id ||
          result.grape3.toUpperCase() === id
        );

        //safgasfg
      } else if (value === "year") {
        return result.year === id;
      } else if (value === "vinyard") {
        return result.vinyard === id;
      } else if (value === "vinyard") {
        return result.vinyard.toUpperCase() === id;
      } else if (value === "place") {
        return result.place.toUpperCase() === id;
      } else if (value === "area") {
        return result.area.toUpperCase() === id;
      } else if (value === "country") {
        return result.country.toUpperCase() === id;
      } else if (value === "appellation") {
        return result.appellation.toUpperCase() === id;
      } else if (value === "place") {
        return result.place.toUpperCase() === id;
      } else if (value === "mise") {
        return result.mise === id;
      } else if (value === "description") {
        return (
          result.description1.toUpperCase() === id ||
          result.description2.toUpperCase() === id ||
          result.description3.toUpperCase() === id ||
          result.description4.toUpperCase() === id ||
          result.description5.toUpperCase() === id ||
          result.description6.toUpperCase() === id ||
          result.description7.toUpperCase() === id ||
          result.description8.toUpperCase() === id ||
          result.description9.toUpperCase() === id ||
          result.description10.toUpperCase() === id
        );
      }
    });

    this.setState({ glasses: grapes });
  };

  onClear() {
    const unFilteredWines1 = this.state.unFilteredWines;

    this.setState({ glasses: unFilteredWines1 });
  }
  onSort = event => {};

  ///render portion

  //
  //
  //
  //

  render() {
    const allInfo = this.state.allInfo;

    if (allInfo.length === 0 && !this.state.mappedGlasses) {
      return (
        <div className="App">
          {/* <MobileBar
          onClear={this.onClear}
          onSort={this.onSort}
          glasses={this.state.glasses}
          unFilteredWines={this.state.unFilteredWines}
          onSelect={this.onSelect}
          allInfo={this.state.allInfo}
        /> */}
          {/* <MobileBlocksData
            glasses={this.state.glasses}
            wines={this.state.filteredWines}
            match={this.props.match}
            onSelect={this.onSelect}
            onClear={this.onClear}
            curItem={this.state.curItem}
          /> */}
          {/* <MobileBlocksData glasses={this.state.glasses} /> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          <MobileBar
            onClear={this.onClear}
            onSort={this.onSort}
            glasses={this.state.glasses}
            unFilteredWines={this.state.unFilteredWines}
            onSelect={this.onSelect}
            allInfo={this.state.allInfo}
          />
          <MobileBlocksData
            glasses={this.state.glasses}
            wines={this.state.filteredWines}
            onSelect={this.onSelect}
            onClear={this.onClear}
            curItem={this.state.curItem}
            mappedGlasses={this.state.mappedGlasses}
          />
          {/* <MobileBlocks onSelect={this.onSelect} /> */}
        </div>
      );
    }
  }
}

export default App;
