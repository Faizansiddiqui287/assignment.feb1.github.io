import React, { Component} from "react";
import logo from './logo.svg';
import './App.css';
import Card from "./card.js"
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";
import "./style.css"

class App extends Component{
 
  
  render(){
    return(
      <div className="App">
        <h1>Hello This is React JS</h1>
        
        <Card  name="Faizan" age={25}/>
        <Card name="David" age={28}/>
        <br/>
        <Card name="Ashish" age={28}/>
        <Card name="Rajat" age={26}/>
        {/* <Card /> */}
      </div>
    )
  }
}

export default App;
