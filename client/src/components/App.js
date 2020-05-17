import React, { Component, useState } from "react";
import "./styles/App.css";
// import MobileBar from "./MobileBar";
import MobileBlocksData from "./MobileBlocksData";
import CircularDeterminate from "./CircularDeterminate";
import { MongoNetworkError } from "mongodb";
import { Drawer } from "@material-ui/core";
import TempDrawer from "./TempDrawer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: [],
      filteredWines: [],
      allInfo: [],
      hideRemoved: false,
      unHideHidden: true,
      unFilteredWines: [],
      filterTerms: [],
      filterTermsWithId: [],
    };

    this.onSelect = this.onSelect.bind(this);
    this.onRemoveFilterTerms = this.onRemoveFilterTerms.bind(this);
    this.onCoravinSearch = this.onCoravinSearch.bind(this);
    this.onSearchSelect = this.onSearchSelect.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSort = this.onSort.bind(this);
    this.hideRemovedClick = this.hideRemovedClick.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()

      .then((res) => {
        const glassesData = res.express;
        const order = {
          removed: 1,
          added: 2,
          none: 3,
          hidden: 4,
        };
        glassesData.sort((a, b) => order[a.status] - order[b.status]);
        this.setState({ glasses: glassesData });
        this.setState({ unFilteredWines: glassesData });

        let allSearchableData = glassesData.map((result) => {
          return [
            {
              value: result.name,
              id: "name",
              key: "",
            },
            {
              value: result.place,
              id: "place",
              key: "",
            },
            {
              value: result.added,
              id: "added",
              key: "",
            },
            {
              value: result.appellation,
              id: "appellation",
              key: "",
            },
            {
              value: result.color,
              id: "color",
              key: "",
            },
            {
              value: result.country,
              id: "country",
              key: "",
            },
            {
              value: result.description,
              id: "description",
              key: "",
            },
            {
              value: result.grapes,
              id: "grapes",
              key: "",
            },
            {
              value: result.grape,
              id: "grape",
              key: "",
            },
            {
              value: result.mise,
              id: "mise",
              key: "",
            },
            {
              value: result.status,
              id: "status",
              key: "",
            },
            {
              value: result.vinyard,
              id: "vinyard",
              key: "",
            },
            {
              value: result.year,
              id: "year",
              key: "",
            },
          ];
        });
        let descAndGrape = [];
        const allInfo0 = allSearchableData.flat(Infinity);
        allInfo0.map((item) => {
          if (item.id == "description") {
            descAndGrape.unshift(
              item.value.map((result) => [
                {
                  value: result,
                  id: "description",
                  key: "",
                },
              ])
            );
          }
        });
        allInfo0.map((item) => {
          if (item.id == "grape") {
            descAndGrape.unshift(
              item.value.map((result) => [
                {
                  value: result,
                  id: "grape",
                  key: "",
                },
              ])
            );
          }
        });

        const descAndGrapeArray = descAndGrape.flat(Infinity);
        const allInfo19 = allInfo0.concat(descAndGrapeArray);
        //make one array from many

        //filter out non strings
        const allInfo1 = allInfo19.filter((item) => {
          return typeof item.value === "string";
        });
        const allInfo2 = allInfo1.filter(
          (thing, index, self) =>
            index ===
            self.findIndex((t) => t.value === thing.value && t.id === thing.id)
        );
        //filter out strings that have no characters
        const allInfo3 = allInfo2.filter((result) => {
          return result.value.length > 0;
        });
        //give items keys
        const allInfo = allInfo3.map((value, index) => {
          return {
            key: index.toString(),
            value: value.value,
            id: value.id,
          };
        });

        this.setState({ allInfo: allInfo });
        const glasses = this.state.glasses;
        const mappedGlasses = glasses.map((result) => (
          <li key={result._id}>{result}</li>
        ));
        this.setState({ mappedGlasses: mappedGlasses });
      })
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server.
  //(Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  //filter to just wines that have the features ie certain grapes,
  // area, etc
  onSelect = (e) => {
    let id = e.target.id;
    let value1 = e.target.value;
    let value = value1.toUpperCase();

    let unFilteredWines = this.state.unFilteredWines;

    let filterTermsWithId1 = this.state.filterTermsWithId;
    let newTerm = { id: id, value: value };

    filterTermsWithId1.push(newTerm);
    const uniqueTerms1 = new Set(filterTermsWithId1);
    const termsToArray1 = [...uniqueTerms1];
    // console.log(termsToArray1);

    const glasses = this.state.glasses;
    let filterTerms = this.state.filterTerms;
    function filterNulls(item) {
      if (typeof item === "string") {
        return item.toUpperCase();
      }
    }

    filterTerms.push(value);
    const uniqueTerms = new Set(filterTerms);
    const termsToArray = [...uniqueTerms];

    let capitilize = function (element, index, array) {
      return element.toUpperCase();
    };

    let filterWineOnClick = [];
    if (id == "grape") {
      let glassesList = glasses;

      glassesList.forEach(function (e) {
        let grapeList = e.grape.map(capitilize);
        for (let i = 0; i < grapeList.length; i++) {
          if (grapeList[i] === value) {
            filterWineOnClick.unshift(e);
          }
        }
      });
      console.log("grape" + filterWineOnClick);
    } else if (id == "description") {
      let glassesList = glasses;

      glassesList.forEach(function (e) {
        let grapeList = e.description.map(capitilize);
        for (let i = 0; i < grapeList.length; i++) {
          if (grapeList[i] === value) {
            filterWineOnClick.unshift(e);
          }
        }
      });
      console.log("desc" + filterWineOnClick);
    } else if (id == "coravin") {
      let glassesList = glasses;
      if (value === "TRUE") {
        filterWineOnClick = glassesList.filter(
          (result) => result.coravin == true
        );
      } else {
        filterWineOnClick = glassesList.filter(
          (result) => result.coravin !== true
        );
      }
    } else {
      let glassesList = glasses;
      filterWineOnClick = glassesList.filter(
        (result) => filterNulls(result[id]) == value
      );
    }
    let difference = unFilteredWines.filter(
      (x) => !filterWineOnClick.includes(x)
    );

    this.setState({ filterTerms: termsToArray });
    this.setState({ glasses: filterWineOnClick });
    this.setState({ filterTermsWithId: termsToArray1 });
    this.setState({ filteredWines: difference });
  };
  ///

  onRemoveFilterTerms = (result) => {
    let newFilterTermsWithId = this.state.filterTermsWithId;
    let newFilterTerms = this.state.filterTerms;
    let filteredWines = this.state.filteredWines;
    let stringer = result.toString();

    let unFilteredWines = this.state.unFilteredWines;
    let glasses = this.state.glasses;

    let newTermArray = newFilterTerms.filter(
      (item) => item.toString() !== stringer
    );
    let newIdArray = newFilterTermsWithId.filter(
      (item) => item.value !== result
    );

    let removedTermWithId = newFilterTermsWithId.filter(
      (item) => item.value === result
    );

    this.setState({ filterTermsWithId: newIdArray });
    this.setState({ filterTerms: newTermArray });
    let capitilize = function (element, index, array) {
      return element.toUpperCase();
    };
    function filterNulls(item) {
      if (typeof item === "string") {
        return item.toUpperCase();
      }
    }

    let filterWineOnClick = [];
    let newTermArrayLength = newTermArray.length;

    if (newTermArrayLength == 0) {
      filterWineOnClick = unFilteredWines;
      this.setState({ glasses: filterWineOnClick });
    }

    ////////////////////////////
    //////////////
    else {
      newIdArray.forEach(function (item) {
        let id = item.id;
        let value = item.value;
        if (id == "grape") {
          let glassesList = unFilteredWines;

          glassesList.forEach(function (e) {
            let grapeList = e.grape.map(capitilize);
            for (let i = 0; i < grapeList.length; i++) {
              if (grapeList[i] === value) {
                filterWineOnClick.unshift(e);
              }
            }
          });
          console.log("grape" + filterWineOnClick);
        } else if (id == "description") {
          let glassesList = unFilteredWines;

          glassesList.forEach(function (e) {
            let grapeList = e.description.map(capitilize);
            for (let i = 0; i < grapeList.length; i++) {
              if (grapeList[i] === value) {
                filterWineOnClick.unshift(e);
              }
            }
          });
          console.log("desc" + filterWineOnClick);
        } else if (id == "coravin") {
          let glassesList = unFilteredWines;
          if (value === "TRUE") {
            filterWineOnClick = glassesList.filter(
              (result) => result.coravin == true
            );
          } else {
            filterWineOnClick = glassesList.filter(
              (result) => result.coravin !== true
            );
          }
        } else {
          let glassesList = unFilteredWines;
          filterWineOnClick = glassesList.filter(
            (result) => filterNulls(result[id]) == value
          );
        }
      });
      let difference = unFilteredWines.filter(
        (x) => !filterWineOnClick.includes(x)
      );

      this.setState({ glasses: filterWineOnClick });
      this.setState({ filteredWines: difference });
    }
  };
  ///
  ///
  ///
  onCoravinSearch = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    let filterTerms = this.state.filterTerms;
    const glasses = this.state.glasses;
    if (value === "true") {
      filterTerms.push(id);
    } else if (value === "false") {
      filterTerms.push(id);
    }

    // let filterTerms = this.state.filterTerms;

    // console.log(value);

    const filterCoravin = glasses.filter((result) => {
      if (value === "true") {
        // filterTermsWithId.push(newTerm);
        return result.coravin === true;
      }
      if (value === "false") {
        // filterTermsWithId.push(newTerm);
        return result.coravin === false;
      }
    });
    const uniqueTerms = new Set(filterTerms);
    const termsToArray = [...uniqueTerms];
    // // const uniqueTermsId = new Set(filterTermsWithId);
    // // const termsToArrayId = [...uniqueTermsId];

    this.setState({ glasses: filterCoravin });
    this.setState({ filterTerms: termsToArray });
    // this.setState({ filterTermsWithId: termsToArrayId });
  };

  //for selecting items on search v
  onSearchSelect = (e) => {
    let id = e.id;
    let value1 = e.value;
    let value = value1.toUpperCase();

    let unFilteredWines = this.state.unFilteredWines;

    let filterTermsWithId1 = this.state.filterTermsWithId;
    let newTerm = { id: id, value: value };

    filterTermsWithId1.push(newTerm);
    const uniqueTerms1 = new Set(filterTermsWithId1);
    const termsToArray1 = [...uniqueTerms1];
    // console.log(termsToArray1);

    const glasses = this.state.glasses;
    let filterTerms = this.state.filterTerms;
    function filterNulls(item) {
      if (typeof item === "string") {
        return item.toUpperCase();
      }
    }

    filterTerms.push(value);
    const uniqueTerms = new Set(filterTerms);
    const termsToArray = [...uniqueTerms];

    let capitilize = function (element, index, array) {
      return element.toUpperCase();
    };

    let filterWineOnClick = [];
    if (id == "grape") {
      let glassesList = glasses;

      glassesList.forEach(function (e) {
        let grapeList = e.grape.map(capitilize);
        for (let i = 0; i < grapeList.length; i++) {
          if (grapeList[i] === value) {
            filterWineOnClick.unshift(e);
          }
        }
      });
      console.log("grape" + filterWineOnClick);
    } else if (id == "description") {
      let glassesList = glasses;

      glassesList.forEach(function (e) {
        let grapeList = e.description.map(capitilize);
        for (let i = 0; i < grapeList.length; i++) {
          if (grapeList[i] === value) {
            filterWineOnClick.unshift(e);
          }
        }
      });
      console.log("desc" + filterWineOnClick);
    } else if (id == "coravin") {
      let glassesList = glasses;
      if (value === "TRUE") {
        filterWineOnClick = glassesList.filter(
          (result) => result.coravin == true
        );
      } else {
        filterWineOnClick = glassesList.filter(
          (result) => result.coravin !== true
        );
      }
    } else {
      let glassesList = glasses;
      filterWineOnClick = glassesList.filter(
        (result) => filterNulls(result[id]) == value
      );
    }
    let difference = unFilteredWines.filter(
      (x) => !filterWineOnClick.includes(x)
    );

    this.setState({ filterTerms: termsToArray });
    this.setState({ glasses: filterWineOnClick });
    this.setState({ filterTermsWithId: termsToArray1 });
    this.setState({ filteredWines: difference });
  };

  onClear() {
    const unFilteredWines1 = this.state.unFilteredWines;

    this.setState({ glasses: unFilteredWines1 });
    this.setState({ filterTerms: [] });
    this.setState({ filterTermsWithId: [] });
    this.setState({ filteredWines: [] });
  }
  onSort = (event) => {
    const glasses = this.state.unFilteredWines;
    const termy = event.target.id;

    if (termy == "color") {
      const sorted = glasses.sort(function (a, b) {
        var colorA = a.color.toUpperCase();
        var colorB = b.color.toUpperCase();
        if (colorA < colorB) {
          return -1;
        }
        if (colorA > colorB) {
          return 1;
        }
        return 0;
      });
      this.setState({ glasses: sorted });
    } else if (termy == "status") {
      const order = {
        removed: 1,
        added: 2,
        none: 3,
        hidden: 4,
      };
      let sorted = glasses.sort((a, b) => order[a.status] - order[b.status]);
      this.setState({ glasses: sorted });
    }
  };
  hideRemovedClick = (event) => {
    this.setState((state) => ({ hideRemoved: !this.state.hideRemoved }));
  };
  unHideHiddenClick = (event) => {
    this.setState((state) => ({ unHideHidden: !this.state.unHideHidden }));
  };

  ///render portion

  //
  //
  //
  //

  render() {
    const allInfo = this.state.allInfo;

    if (allInfo.length === 0) {
      return (
        <div className="App">
          <CircularDeterminate />
        </div>
      );
    } else {
      return (
        <div className="App">
          <TempDrawer
            onClear={this.onClear}
            onSort={this.onSort}
            glasses={this.state.glasses}
            unFilteredWines={this.state.unFilteredWines}
            onSearchSelect={this.onSearchSelect}
            allInfo={this.state.allInfo}
            hideRemovedClick={this.hideRemovedClick}
            filterTerms={this.state.filterTerms}
            unHideHidden={this.state.unHideHidden}
            unHideHiddenClick={this.unHideHiddenClick}
            onRemoveFilterTerms={this.onRemoveFilterTerms}
            onSelect={this.onSelect}
          />

          {/* <AppBarSearch
          allInfo={this.state.allInfo} /> */}
          <MobileBlocksData
            glasses={this.state.glasses}
            wines={this.state.filteredWines}
            onSelect={this.onSelect}
            onClear={this.onClear}
            curItem={this.state.curItem}
            mappedGlasses={this.state.mappedGlasses}
            hideRemoved={this.state.hideRemoved}
            onCoravinSearch={this.onCoravinSearch}
            unHideHiddenClick={this.unHideHiddenClick}
            unHideHidden={this.state.unHideHidden}
          />
        </div>
      );
    }
  }
}

export default App;
