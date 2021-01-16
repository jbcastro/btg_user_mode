import React, { Component, useState } from "react";
import "./styles/App.css";
// import MobileBar from "./MobileBar";
import MobileBlocksData from "./MobileBlocksData";
import CircularDeterminate from "./CircularDeterminate";
// import { MongoNetworkError } from "mongodb";
import { Drawer } from "@material-ui/core";
import TempDrawer from "./TempDrawer";
import CheckBoxes from "./CheckBoxes";
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
      colorSort: true,
      statusSort: true,
      yearSort: true,
      priceSort: true,
      unMutable: [],
      checkStates: {
        zero: false,
        twentyone: false,
        thirtyone: false,
        fortyone: false,
      },
    };

    this.onSelect = this.onSelect.bind(this);
    this.onRemoveFilterTerms = this.onRemoveFilterTerms.bind(this);
    this.onCoravinSearch = this.onCoravinSearch.bind(this);
    this.onSearchSelect = this.onSearchSelect.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onSort = this.onSort.bind(this);
    this.hideRemovedClick = this.hideRemovedClick.bind(this);
    this.priceCheck = this.priceCheck.bind(this);
    this.priceChange = this.priceChange.bind(this);
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
        this.setState({ unMutable: glassesData });
        //returns all searchable data into an array for the searchbar
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
            descAndGrape.push(
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
            descAndGrape.push(
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
        //sorts allinfo so when searching it shows up alphabetically
        allInfo.sort(function (a, b) {
          var valueA = a.value.toUpperCase();
          var valueB = b.value.toUpperCase();
          if (valueA < valueB) {
            return -1;
          }
          if (valueA > valueB) {
            return 1;
          }
          return 0;
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

  callBackendAPI = async () => {
    const response = await fetch("/api");
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
            filterWineOnClick.push(e);
          }
        }
      });
    } else if (id == "description") {
      let glassesList = glasses;

      glassesList.forEach(function (e) {
        let grapeList = e.description.map(capitilize);
        for (let i = 0; i < grapeList.length; i++) {
          if (grapeList[i] === value) {
            filterWineOnClick.push(e);
          }
        }
      });
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
    // this.setState({ glasses: filterWineOnClick });
    this.setState({ filterTermsWithId: termsToArray1 });
    this.setState({ filteredWines: difference });
    this.setState({ unMutable: filterWineOnClick });
    this.priceChange(filterWineOnClick);
  };

  //this function is called when items are removed
  //from the filtering terms
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
    let glassesList = unFilteredWines;

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
        let newArrayThatWillBeGlassesList = [];

        if (id == "grape") {
          glassesList.forEach(function (e) {
            // console.log(wineId);
            let grapeList = e.grape.map(capitilize);
            for (let i = 0; i < grapeList.length; i++) {
              if (grapeList[i] === value) {
                newArrayThatWillBeGlassesList.push(e);
              }
            }
          });
          const differenceBetweenNewArrayAndGlasses = glassesList.filter((x) =>
            newArrayThatWillBeGlassesList.includes(x)
          );
          glassesList = differenceBetweenNewArrayAndGlasses;
        } else if (id == "description") {
          glassesList.forEach(function (e) {
            let grapeList = e.description.map(capitilize);
            for (let i = 0; i < grapeList.length; i++) {
              if (grapeList[i] === value) {
                newArrayThatWillBeGlassesList.push(e);
              }
            }
          });
          const differenceBetweenNewArrayAndGlasses = glassesList.filter((x) =>
            newArrayThatWillBeGlassesList.includes(x)
          );
          glassesList = differenceBetweenNewArrayAndGlasses;
        } else if (id == "coravin") {
          if (value === "TRUE") {
            filterWineOnClick = glassesList.filter(
              (result) => result.coravin == true
            );
            glassesList = filterWineOnClick;
          } else {
            filterWineOnClick = glassesList.filter(
              (result) => result.coravin !== true
            );
          }
          glassesList = filterWineOnClick;
        } else {
          filterWineOnClick = glassesList.filter(
            (result) => filterNulls(result[id]) == value
          );
          glassesList = filterWineOnClick;
        }
      });
    }
    let difference = unFilteredWines.filter(
      (x) => !filterWineOnClick.includes(x)
    );

    // this.setState({ glasses: glassesList });
    this.setState({ filteredWines: difference });
    this.setState({ unMutable: glassesList });
    this.priceChange(glassesList);
  };
  ///
  ///
  ///since coravin is a boolean this is a seperate function to
  //filter wines that are coravin or not
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

    const filterCoravin = glasses.filter((result) => {
      if (value === "true") {
        return result.coravin === true;
      }
      if (value === "false") {
        return result.coravin === false;
      }
    });
    const uniqueTerms = new Set(filterTerms);
    const termsToArray = [...uniqueTerms];

    this.setState({ glasses: filterCoravin });
    this.setState({ filterTerms: termsToArray });
    this.setState({ unMutable: filterCoravin });
  };

  //for selecting items from the search bar
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
            filterWineOnClick.push(e);
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
            filterWineOnClick.push(e);
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
    this.setState({ unMutable: filterWineOnClick });
  };
  //clearnig all filters
  onClear() {
    const unFilteredWines1 = this.state.unFilteredWines;

    this.setState({ glasses: unFilteredWines1 });
    this.setState({ filterTerms: [] });
    this.setState({ filterTermsWithId: [] });
    this.setState({ filteredWines: [] });
    this.setState({ unMutable: unFilteredWines1 });
  }
  //sorting wines such as by color or status
  onSort = (event) => {
    const glasses = this.state.glasses;
    let termy = event.target.id;

    if (termy === "status") {
      const order = {
        removed: 1,
        added: 2,
        none: 3,
        hidden: 4,
      };
      const sorted = glasses.sort((a, b) => order[a.status] - order[b.status]);
      if (this.state.statusSort === false) {
        sorted.reverse();
      }
      this.setState({ glasses: sorted });
      this.setState((state) => ({ statusSort: !this.state.statusSort }));
      this.setState({ colorSort: true });
      this.setState({ priceSort: true });
      this.setState({ yearSort: true });
    }
    if (termy === "color") {
      const order = {
        red: 1,
        white: 2,
        sparkling: 3,
        dessert: 4,
      };
      const sorted = glasses.sort((a, b) => order[a.color] - order[b.color]);
      if (this.state.colorSort === false) {
        sorted.reverse();
      }
      this.setState({ glasses: sorted });
      this.setState((state) => ({ colorSort: !this.state.colorSort }));
      this.setState({ statusSort: true });
      this.setState({ priceSort: true });
      this.setState({ yearSort: true });
      this.setState({ unMutable: sorted });
    }
    if (termy === "year") {
      const sorted = glasses.sort(function (a, b) {
        var yearA = a.year;
        var yearB = b.year;
        if (yearA < yearB) {
          return -1;
        }
        if (yearA > yearB) {
          return 1;
        }
        return 0;
      });
      if (this.state.yearSort === false) {
        sorted.reverse();
      }
      this.setState({ glasses: sorted });
      this.setState({ unMutable: sorted });
      this.setState({ colorSort: true });
      this.setState({ statusSort: true });
      this.setState({ priceSort: true });
      this.setState((state) => ({ yearSort: !this.state.yearSort }));
    }
    if (termy === "price") {
      const sorted = glasses.sort(function (a, b) {
        var priceA = a.price;
        var priceB = b.price;
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
        return 0;
      });
      if (this.state.priceSort === false) {
        sorted.reverse();
      }
      this.setState({ glasses: sorted });
      this.setState({ unMutable: sorted });
      this.setState({ colorSort: true });
      this.setState({ statusSort: true });
      this.setState({ yearSort: true });
      this.setState((state) => ({ priceSort: !this.state.priceSort }));
    }
  };

  //hides recently removed wines. Great for a new employee who
  //is learning the list for the first time
  hideRemovedClick = (event) => {
    this.setState((state) => ({ hideRemoved: !this.state.hideRemoved }));
  };

  //hidden wines are wines that used to be on the list but have
  //been off for a while. This hides and shows them
  unHideHiddenClick = (event) => {
    this.setState((state) => ({ unHideHidden: !this.state.unHideHidden }));
  };

  //still working on a way to filter by price ranges. This is
  //not completed yet
  priceCheck = (state) => {
    const glasses = this.state.unMutable;
    this.setState({ checkStates: state });
    this.priceChange(glasses);
  };
  //still working on a way to filter by price ranges. This is
  //not completed yet
  priceChange(x) {
    let arr = [];
    const checkStates = this.state.checkStates;
    const glasses2 = x;
    console.log(x);

    if (
      checkStates.zero === false &&
      checkStates.twentyone === false &&
      checkStates.thirtyone === false &&
      checkStates.fortyone === false
    ) {
      this.setState({ glasses: glasses2 });
    } else {
      if (checkStates.zero === true) {
        const glasses = glasses2;
        const zero = glasses.filter((wine) => wine.price < 21);
        arr.push(zero);
      }
      if (checkStates.twentyone === true) {
        const glasses = glasses2;
        const twentyone = glasses.filter(
          (wine) => wine.price >= 21 && wine.price < 31
        );
        arr.push(twentyone);
      }
      if (checkStates.thirtyone === true) {
        const glasses = glasses2;
        const thirtyone = glasses.filter(
          (wine) => wine.price >= 31 && wine.price < 41
        );
        arr.push(thirtyone);
      }
      if (checkStates.fortyone === true) {
        const glasses = glasses2;
        const fortyone = glasses.filter((wine) => wine.price >= 41);
        arr.push(fortyone);
      }

      const flat = arr.flat();
      console.log(flat);
      this.setState({ glasses: flat });
    }
    // if (this.state.glasses !== prevProps.glasses) {
    // if (this.state.checkStates !== prevProps.checkStates) {
    //   if (this.state.glasses !== prevState.glasses) {
    //     console.log("dude");
    //   }
    // }
    // if (
    //   checkStates.zero === false &&
    //   checkStates.twentyone === false &&
    //   checkStates.thirtyone === false &&
    //   checkStates.fortyone === false
    // ) {
    //   this.setState({ glasses: glasses2 });
    // }
    // else {
    //   if (checkStates.zero === true) {
    //     const glasses = glasses2;
    //     const zero = glasses.filter((wine) => wine.price < 21);
    //     arr.push(zero);
    //   }
    //   if (checkStates.twentyone === true) {
    //     const glasses = glasses2;
    //     const twentyone = glasses.filter(
    //       (wine) => wine.price >= 21 && wine.price < 31
    //     );
    //     arr.push(twentyone);
    //   }
    //   if (checkStates.thirtyone === true) {
    //     const glasses = glasses2;
    //     const thirtyone = glasses.filter(
    //       (wine) => wine.price >= 31 && wine.price < 41
    //     );
    //     arr.push(thirtyone);
    //   }
    //   if (checkStates.fortyone === true) {
    //     const glasses = glasses2;
    //     const fortyone = glasses.filter((wine) => wine.price >= 41);
    //     arr.push(fortyone);
    //   }

    //   const flat = arr.flat();
    //   this.setState({ glasses: flat });
    // }
    // }
  }
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
            filterTermsWithId={this.state.filterTermsWithId}
            priceCheck={this.priceCheck}
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
            priceCheck={this.priceCheck}
            checkStates={this.state.checkStates}
          />
        </div>
      );
    }
  }
}

export default App;
