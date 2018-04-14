import React, {Component} from 'react';


const PositionInfo = ( props ) =>(
    <li>{props.job.title}--------{props.job.location}</li>
  )
  
  class PositionsList extends Component{
    
    render(){
        return (
          <div>
            <h1>Positions List</h1>
            { this.props.positions.map(position => <PositionInfo key={position.id} job={position}/>) }
            { this.props.positions.length == 0 && <p> Sorry, no results avaliable </p>}
          </div>
        )

    }
  }

export default PositionsList;