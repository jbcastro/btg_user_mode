import React, { Component } from "react";
import "./styles/App.css";
import Glasses from "../Glasses";
import WineList from "./WineList";
import AddForm from "./AddForm";
import Button from "@material-ui/core/Button";
import FilterForm from "./FilterForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: [],
      glass: {},
      filter: "",
      curItem: {},
      filteredWines: []
    };
    this.handleSelect = this.handleSelect.bind(this);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    // this.filterWines = this.filterWines.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()

      .then(res => {
        const glassesData = res.express;

        this.setState({ glasses: glassesData });
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

  //set state as current item in order to delete or update
  handleSelect = event => {
    let id = event.target.id;

    fetch(`http://localhost:5000/express_backend/get?_id=${id}`)
      .then(res => res.json())

      .then(data => {
        const noExpress = data.express;
        this.setState({ curItem: noExpress });
      });
  };

  //delete item
  handleOnClick = () => {
    let id = this.state.curItem._id;

    fetch(`http://localhost:5000/express_backend/delete?_id=${id}`)
      .then(response => {
        return response.json();
      })
      .then(results => {
        const remainder = this.state.glasses.filter(item => {
          return item._id !== id;
        });
        this.setState({ glasses: remainder, curItem: {} });
      });
  };

  //for adding and updating
  handleSubmit() {
    let name = this.state.curItem.name;
    let newWine = this.state.curItem;
    fetch(`http://localhost:5000/express_backend/add?=${name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWine)
    })
      .then(res => res.json())
      .then(json => {
        let glassesArray;
        if (!newWine._id) {
          glassesArray = this.state.glasses;

          newWine._id = json._id;
          glassesArray.push(newWine);
          this.setState({ glasses: glassesArray });
        } else {
          glassesArray = this.state.glasses.map(item => {
            if (item._id === newWine._id) {
              item = newWine;
            }
            return item;
          });
        }
        this.setState({ glasses: glassesArray });
      });
  }

  //making whatever is typed in as current item
  onChange = event => {
    var newItem = this.state.curItem;
    newItem[event.target.name] = event.target.value;
    this.setState({ curItem: newItem });
  };

  onSelect = event => {
    let value = event.target.value;
    const id = event.target.id;

    const glasses = this.state.glasses;

    var grapes = glasses.filter(
      result => result.value !== id
      // console.log(result.value);
    );
    this.setState({ glasses: grapes });

    const grapez = glasses.map(
      result => result.grape1 + result.grape2 + result.grape3
    );
    // console.log(grapez);

    console.log(grapes);

    console.log(value);
    // console.log(id);
  };

  // filterWines = wineFilter => {
  //   //todo
  //   let filteredWines = this.state.glasses;
  //   filteredWines = filteredWines.filter(wine => {
  //     let wineName = filteredWines.name.toLowerCase();
  //     return wineName.indexOf(wineFilter.toLowerCase()) !== -1;
  //   });
  //   this.setState({ filteredWines });
  // };
  // handleChange = event => {
  //   this.setState({ wineFilter: event.target.value });
  //   this.props.onChange(event.target.value);
  // };

  render() {
    return (
      <div className="App">
        {/* <FilterForm
          onChange={this.filterWines}
          wineFilter={this.state.wineFilter}
        /> */}
        <WineList
          glasses={this.state.glasses}
          handleSelect={this.handleSelect}
          wines={this.state.filteredWines}
          match={this.props.match}
          onSelect={this.onSelect}
        />
        <AddForm
          handleSubmit={this.handleSubmit}
          curItem={this.state.curItem}
          onChange={this.onChange}
          handleOnClick={this.handleOnClick}
        />
      </div>
    );
  }
}

export default App;
