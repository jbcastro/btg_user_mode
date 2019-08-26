import React, { Component } from "react";

import "./styles/App.css";
import Glasses from "../Glasses";
import WineList from "./WineList";
import AddForm from "./AddForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: [],
      glass: {},
      filter:"",
      curItem: {}
    };
    this.handleSelect = this.handleSelect.bind(this);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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

  //set state as current item in order to delete

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
    //still working on this
    let id = this.state.curItem._id;

    fetch(`http://localhost:5000/express_backend/delete?_id=${id}`)
      .then(response => {
        return response.json();
      })
      .then((results) => {
        const remainder = this.state.glasses.filter((item) => {
          return item._id !== id;
        });
        this.setState({ glasses: remainder, curItem: {} });
      });
  };

  handleSubmit() {
    let name = this.state.curItem.name;
    fetch(`http://localhost:5000/express_backend/add?=${name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        winenum: this.state.curItem.winenum,
        name: this.state.curItem.winenum,
        grape1: "grape1",
        grape2: "grape2",
        grape3: "grape3",
        grapes: "grapes",
        year: "year",
        place: "place",
        area: "area",
        country: "country",
        appellation: "appellation",
        description1: "description1",
        description2: "description2",
        description3: "description3",
        description4: "description4",
        description5: "description5",
        description6: "description6",
        funfact: "funfact"
      })
    });
  }

  // handleSubmit = () => {
  //   let newItem = this.state.curItem;
  //   let id = this.state.curItem.name;

  //   if (!newItem.name) {
  //     return;
  //   }
  //   fetch(`http://localhost:5000/express_backend/add`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newItem)
  //   });
  // .then(res => res.json())
  // .then(json => {
  //   let newData;
  //   if (!newData._id) {
  //     newData = this.state.items;
  //     newItem._id = json._id;
  //     newData.push(newItem);
  //   } else {
  //     newData = this.state.items.map(item => {
  //       if (item._id === newItem._id) {
  //         item = newItem;
  //       }
  //       return item;
  //     });
  //   }
  // });
  // };
  onChange = event => {
    var newItem = this.state.curItem;
    newItem[event.target.name] = event.target.value;
    this.setState({ curItem: newItem });
  };

  render() {
    return (
      <div className="App">
        <WineList
          glasses={this.state.glasses}
          handleSelect={this.handleSelect}
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
