import React, { Component } from 'react';
import './App.css';
import Square from './square.js';

//setting initial state as an array of 9 items to create the tic-tac-toe board//

class Board extends Component {
    constructor(props){
        super(props)
            this.state = {
                spaces: [],
                player1: 'X',
                player2: 'O',
                counter: 1,
            }
    }


    startGame = () => {
        const { spaces } = this.state
        alert("Player 1 starts")
        this.setState({
            spaces: ['', '', '', '', '', '', '', '', ''],

        })

    }
    resetGame = () => {
        const { spaces } = this.state

        this.setState({
            spaces: [],
        })
    }

clickBox = (spacesIndex) => {
    let { spaces, player1, player2, counter } = this.state
        if (counter % 2 === 1 && spaces[spacesIndex] === ""){
            spaces[spacesIndex] = "X"
            counter ++
        }
    else if(counter % 2 === 0 && spaces[spacesIndex] === ""){
            spaces[spacesIndex] = "O"
            counter++

    }

        this.setState({spacesIndex, counter})
        if(
            spaces[0] === 'X' && spaces[1] === 'X' && spaces [2] === 'X'||
            spaces[3] === 'X' && spaces[4] === 'X' && spaces [5] === 'X' ||
            spaces[6] === 'X' && spaces[7] === 'X' && spaces [8] === 'X' ||
            spaces[0] === 'X' && spaces[3] === 'X' && spaces [6] === 'X' ||
            spaces[1] === 'X' && spaces[4] === 'X' && spaces [7] === 'X' ||
            spaces[2] === 'X' && spaces[5] === 'X' && spaces [8] === 'X' ||
            spaces[0] === 'X' && spaces[4] === 'X' && spaces [8] === 'X' ||
            spaces[6] === 'X' && spaces[4] === 'X' && spaces [2] === 'X'){
        return alert('Player 1 Wins!')
    } else if(
        spaces[0] === 'O' && spaces[1] === 'O' && spaces [2] === 'O' ||
        spaces[3] === 'O' && spaces[4] === 'O' && spaces [5] === 'O' ||
        spaces[6] === 'O' && spaces[7] === 'O' && spaces [8] === 'O' ||
        spaces[0] === 'O' && spaces[3] === 'O' && spaces [6] === 'O' ||
        spaces[1] === 'O' && spaces[4] === 'O' && spaces [7] === 'O' ||
        spaces[2] === 'O' && spaces[5] === 'O' && spaces [8] === 'O' ||
        spaces[0] === 'O' && spaces[4] === 'O' && spaces [8] === 'O' ||
        spaces[6] === 'O' && spaces[4] === 'O' && spaces [2] === 'O'){
            return alert('Player 2 Wins!')
    } else if(
        spaces[0] != '' && spaces[1] != '' && spaces[2] != '' && spaces[3] != '' && spaces[4] != '' && spaces[5] != '' && spaces[6] != '' && spaces[7] != '' && spaces[8] != '')
            return alert('You both lose!')
        }
        // if (spaces[3,4,5] === ['X','X','X'])
        // return alert('you won!')





    render(){
        let { spaces } = this.state

        let fillBoard = spaces.map((value, index) => {
            return (<Square
            clickBox = { this.clickBox }
            value = {value}
            index = {index}
            key = { index} />)

        })






  return (
    <div id="displayboard">
    {fillBoard}
    <button onClick = {this.startGame}>Start Game</button>
    </div>
        );
    }
}

export default Board;
