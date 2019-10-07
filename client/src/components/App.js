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
          console.log(result);
          return [
            {
              value: result.name,
              id: "name",
              key: ""
            },
            {
              value: result.place,
              id: "place",
              key: ""
            },
            {
              value: result.added,
              id: "added",
              key: ""
            },
            {
              value: result.appellation,
              id: "appellation",
              key: ""
            },
            {
              value: result.color,
              id: "color",
              key: ""
            },
            {
              value: result.country,
              id: "country",
              key: ""
            },
            {
              value: result.description1,
              id: "description",
              key: ""
            },
            {
              value: result.description2,
              id: "description",
              key: ""
            },
            {
              value: result.description3,
              id: "description",
              key: ""
            },
            {
              value: result.description4,
              id: "description",
              key: ""
            },
            {
              value: result.description5,
              id: "description",
              key: ""
            },
            {
              value: result.description6,
              id: "description",
              key: ""
            },
            {
              value: result.description7,
              id: "description",
              key: ""
            },
            {
              value: result.description8,
              id: "description",
              key: ""
            },
            {
              value: result.description9,
              id: "description",
              key: ""
            },
            {
              value: result.description10,
              id: "description",
              key: ""
            },
            {
              value: result.grape1,
              id: "grape",
              key: ""
            },
            {
              value: result.grape2,
              id: "grape",
              key: ""
            },
            {
              value: result.grape3,
              id: "grape",
              key: ""
            },
            {
              value: result.grapes,
              id: "grapes",
              key: ""
            },
            {
              value: result.mise,
              id: "mise",
              key: ""
            },
            {
              value: result.status,
              id: "status",
              key: ""
            },
            {
              value: result.vinyard,
              id: "vinyard",
              key: ""
            },
            {
              value: result.year,
              id: "year",
              key: ""
            }
          ];
        });

        //make one array from many
        let allInfo1 = allSearchableData.flat(Infinity);

        //filter out non strings
        let allInfo2 = allInfo1.filter(item => typeof item.value === "string");

        //decapitalize allInfo
        // let allInfo3 = allInfo2.map(str =>
        //   str.replace(/\b[a-z]/g, char => char.toUpperCase())
        // );
        //fitler out duplicates
        let allInfoSet = new Set(allInfo2);

        let allInfo4 = [...allInfoSet];

        //give items keys
        let allInfo = allInfo4.map((value, index) => {
          return {
            key: index.toString(),
            value: value.value,
            id: value.id
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
    let id = event.target.id;
    let value1 = event.target.value;
    let value = value1.toUpperCase();

    const glasses = this.state.glasses;

    const filterWineOnClick = glasses.filter(result => {
      if (id === "grapes") {
        return result.grapes.toUpperCase() === value;
      } else if (id === "grape") {
        return (
          result.grape1.toUpperCase() === value ||
          result.grape2.toUpperCase() === value ||
          result.grape3.toUpperCase() === value
        );

        //safgasfg
      } else if (id === "year") {
        return result.year === value;
      } else if (id === "vinyard") {
        return result.vinyard === value;
      } else if (id === "place") {
        return result.place.toUpperCase() === value;
      } else if (id === "area") {
        return result.area.toUpperCase() === value;
      } else if (id === "country") {
        return result.country.toUpperCase() === value;
      } else if (id === "appellation") {
        return result.appellation.toUpperCase() === value;
      } else if (id === "place") {
        return result.place.toUpperCase() === value;
      } else if (id === "mise") {
        return result.mise === value;
      } else if (id === "description") {
        return (
          result.description1.toUpperCase() === value ||
          result.description2.toUpperCase() === value ||
          result.description3.toUpperCase() === value ||
          result.description4.toUpperCase() === value ||
          result.description5.toUpperCase() === value ||
          result.description6.toUpperCase() === value ||
          result.description7.toUpperCase() === value ||
          result.description8.toUpperCase() === value ||
          result.description9.toUpperCase() === value ||
          result.description10.toUpperCase() === value
        );
      }
    });

    this.setState({ glasses: filterWineOnClick });
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

    if (allInfo.length === 0) {
      return <div className="App"></div>;
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
