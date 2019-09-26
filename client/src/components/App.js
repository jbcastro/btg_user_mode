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
      unFilteredWines: [],
      allInfo: []
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

        function getAllInfo1(item) {
          var fullName = item.description1;
          return fullName;
        }
        function getAllInfo2(item) {
          var fullName = item.description2;
          return fullName;
        }

        function getAllInfo3(item) {
          var fullName = item.description3;
          return fullName;
        }
        function getAllInfo4(item) {
          var fullName = item.description4;
          return fullName;
        }
        function getAllInfo5(item) {
          var fullName = item.description5;
          return fullName;
        }
        function getAllInfo6(item) {
          var fullName = item.description6;
          return fullName;
        }
        function getAllInfo7(item) {
          var fullName = item.description7;
          return fullName;
        }
        function getAllInfo8(item) {
          var fullName = item.description8;
          return fullName;
        }
        function getAllInfo9(item) {
          var fullName = item.description9;
          return fullName;
        }
        function getAllInfo10(item) {
          var fullName = item.description10;
          return fullName;
        }

        const descriptionz1 = glassesData.map(getAllInfo1);
        const descriptionz2 = glassesData.map(getAllInfo2);
        const descriptionz3 = glassesData.map(getAllInfo3);
        const descriptionz4 = glassesData.map(getAllInfo4);
        const descriptionz5 = glassesData.map(getAllInfo5);
        const descriptionz6 = glassesData.map(getAllInfo6);
        const descriptionz7 = glassesData.map(getAllInfo7);
        const descriptionz8 = glassesData.map(getAllInfo8);
        const descriptionz9 = glassesData.map(getAllInfo9);
        const descriptionz10 = glassesData.map(getAllInfo10);

        const descriptionz = descriptionz1.concat(
          descriptionz2,
          descriptionz3,
          descriptionz4,
          descriptionz5,
          descriptionz6,
          descriptionz7,
          descriptionz8,
          descriptionz9,
          descriptionz10
        );
        const uniqueSet = new Set(descriptionz);
        const backToArray = [...uniqueSet];
        console.log(backToArray);

        const list1 = backToArray.filter(value => {
          return value != null;
        });
        console.log(list1);

        const lists = list1.map((value, index) => {
          return {
            key: index.toString(),
            value: value
          };
        });

        this.setState({ allInfo: lists });
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
          onSelect={this.onSelect}
          allInfo={this.state.allInfo}
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
