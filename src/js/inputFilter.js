import React, { Component } from 'react';

class InputFilter extends Component {
    render() {
      return (
          <React.Fragment>
            <div className="inputGroup">
              <label htmlFor="Description"> {this.props.label}</label>
              <input type="text"  
                     name={this.props.name} 
                     onKeyPress={this.props.onKeyPress} 
                     placeholder={this.props.placeholder}/>
            </div>
          </React.Fragment>
      )
    }
  }
  
  export default InputFilter;
  