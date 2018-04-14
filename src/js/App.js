import React, { Component } from 'react';
import PositionsList from './positionsList';
import fetchJsonp from 'fetch-jsonp';
import logo from './../img/logo.svg';
import './../css/App.css';
import InputFilter from './inputFilter';


class App extends Component {
  constructor(props){
    super(props);

    this.description= "python";
    this.location= "new york";

    this.state = {
      positions: []
    }
  }

  changeFilter = (event) => {
    if(event.key !== "Enter")
      return;

    let propName = event.target.name;
    let value = event.target.value;
    this[propName] = value;
    this.getData();
  }

  getData(){
    fetchJsonp(`https://jobs.github.com/positions.json?description=${this.description}&location=${this.location}`)
    .then(response => response.json())
    .then(positions => this.setState( (pre) => ({positions:positions}) ) )
    .catch(error => console.log(error));
  }

  componentWillMount(){
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
         <InputFilter label="Description: " name="description" onKeyPress={this.changeFilter} placeholder="ex: Python"/>
         <InputFilter label="Location: "    name="location" onKeyPress={this.changeFilter} placeholder="ex: new york"/>
         <PositionsList positions={this.state.positions}/>
      </React.Fragment>
    );
  }
}

export default App;
