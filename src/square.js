import React, { Component } from 'react';
import './App.css';


class Square extends Component {
        clickBox = () => {
            const { index } = this.props
            this.props.clickBox(index)
        }




    render(){
        const { value } = this.props



  return (
    <div>
      <div id='square' onClick = { this.clickBox }>
      { value }
      </div>
    </div>
        );
    }
}

export default Square;
