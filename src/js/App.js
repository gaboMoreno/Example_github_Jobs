import React, { Component } from 'react';
import PositionsList from './positionsList';
import fetchJsonp from 'fetch-jsonp';

import './../css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.description= "";
    this.location= "";
    this.full_time = false;

    this.state = {
      positions: [],
      loading:true
    }

    this.doSearch= this.doSearch.bind(this);
  }

  changeFilterText = (event) => {
    if(event.key !== "Enter")
      return;

    let propName = event.target.name;
    let value = event.target.value;
    this[propName] = value;
    this.getData();
  }


  changeFilterInput = (event) => {
    console.log(event.target.name );
     let propName = event.target.name;
     let value = event.target.checked;
     this[propName] = value;
     this.getData();
  }

  doSearch(){
    this.description = document.getElementById("description").value;
    this.location = document.getElementById("location").value;
    this.getData();
  }

  getData(){
    this.setState({loading: true});

    fetchJsonp(`https://jobs.github.com/positions.json?description=${this.description}&location=${this.location}&${this.full_time? "&full_time=true":""}`)
    .then(response => response.json())
    .then(positions => this.setState( (pre) => ({positions:positions, loading:false}) ) )
    .catch(error => console.log(error));
  }

  componentWillMount(){
    this.getData();
  }

  render() {
    return (
      <React.Fragment>
         <PositionsList loading={this.state.loading} positions={this.state.positions} doSearch={this.doSearch} changeFilterInput={this.changeFilterInput}  changeFilterText={this.changeFilterText}/>
      </React.Fragment>
    );
  }
}

export default App;
