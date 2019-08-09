import React, { Component } from "react";

import "./styles/App.css";
import Glasses from "../Glasses";
import WineList from "./WineList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: [],
      glass: {}
    };
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()

      .then(res => {
        const bob = res.express;
        // console.log(bob);
        // bob.forEach(function(element) {
        //   console.log(element);
        // });
        // const hand = bob.map(result => this.setState({ glass: result }));
        // this.setState({ glass: hand });
        // const glasses = new Glasses(bob);
        this.setState({ glasses: bob });

        //keep doing this function to make an array from your data. also look into changing the schema
        // const steve = Array.from(bob);
        // console.log(steve);
        // const steve = bob.wines.glass;
        // console.log(steve)
        // const jim = bob.wines.glass;
        // console.log(jim);
        // alert(jim);
        // const removeSlash = bob.forEach(result =>
        //  console.log(result)
        // );

        // console.log(removeSlash)

        // const slash = bob.winenum
        // console.log(slash)
        // const glasses = new Glasses(bob)
        // this.setState({glasses})
        // const steve = data.bob
        // this.setState({data:steve})
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WineList glasses={this.state.glasses} />
        // Render the newly fetched data inside of dude
        {/* <p className="App-intro">{this.state.glasses}</p> */}
      </div>
    );
  }
}

export default App;
