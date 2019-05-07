import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './square.js';
import Board from './board.js';


class App extends Component {




    render(){

 return (
    <div>
    <h1>Tic-Tac-WHOAAAAAA</h1>

    <div id="container">
    <Board />
    </div></div>
        );
    }
}


export default App;
