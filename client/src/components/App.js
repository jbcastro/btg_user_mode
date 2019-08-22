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
        this.setState({ curItem: data });
      });
  };
  // handleSelect = event => {
  //   const found = this.state.glasses.find(item => {
  //     return item._id === event.target.id;
  //   });
  //   this.setState({ curItem: found });
  // };
  //delete item
  handleOnClick = event => {
    //still working on this
    let id = this.state.curItem.express._id;

    fetch(`http://localhost:5000/express_backend/delete?_id=${id}`)
      .then(response => {
        return response.json();
      })
      .then(results => {
        const remainder = this.state.items.filter(item => {
          return item._id !== id;
        });
        this.setState({ items: remainder, curItem: {} });
      });
  };

  handleSubmit = event => {
    //this will be for adding wines
  };
  onChange = event => {
    //this is for when wines are being insterted
  };

  render() {
    return (
      <div className="App">
        <WineList
          glasses={this.state.glasses}
          handleSelect={this.handleSelect}
          handleOnClick={this.handleOnClick}
        />
        <AddForm
          handleSubmit={this.handleSubmit}
          curItem={this.state.curItem}
        />
      </div>
    );
  }
}

export default App;
