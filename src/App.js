import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circle from "./components/Circle/Circle";
class App extends Component {
  state = {
    activeCircle: "circle1",
  };

  handleSelected = (circle) => {
    this.setState({
      activeCircle: circle
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector handleSelected ={this.handleSelected} activeCircle={this.state.activeCircle} />
          <Circle handleSelected ={this.handleSelected} activeCircle={this.state.activeCircle}/>
        </main>
      </div>
    );
  }
}

export default App;
