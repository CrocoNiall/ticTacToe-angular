angular.module('ticTacToeApp')
  .controller('GameController', GameController)

function GameController(){

  this.currentPlayer = 'x'
  this.xMoves = [];
  this.oMoves = [];
  this.xWinCount = 0;
  this.oWinCount = 0;
  this.winner = ''
  this.board = [
    [ { value: '', index: 0 }, { value: '', index: 1 }, { value: '', index: 2 } ],
    [ { value: '', index: 3 }, { value: '', index: 4 }, { value: '', index: 5 } ],
    [ { value: '', index: 6 }, { value: '', index: 7 }, { value: '', index: 8 } ]
    ];

  // this.resetGameBoard();

  // this.resetGameBoard = function(){
  //   this.board = [
  //     [ { value: '', index: 0 }, { value: '', index: 1 }, { value: '', index: 2 } ],
  //     [ { value: '', index: 3 }, { value: '', index: 4 }, { value: '', index: 5 } ],
  //     [ { value: '', index: 6 }, { value: '', index: 7 }, { value: '', index: 8 } ]
  //     ];
  // }



  this.resetGameBoard = function(){
    $('#winnerContainer').slideUp('slow')

      this.board = [
    [ { value: '', index: 0 }, { value: '', index: 1 }, { value: '', index: 2 } ],
    [ { value: '', index: 3 }, { value: '', index: 4 }, { value: '', index: 5 } ],
    [ { value: '', index: 6 }, { value: '', index: 7 }, { value: '', index: 8 } ]
    ];
    this.xMoves = []
    this.oMoves = []
  }


  this.winningCombinations = [ [0,1,2],[3,4,5],
                               [6,7,8],[0,3,6], 
                               [1,4,7],[2,5,8],
                               [0,4,8],[2,4,6] ];
  this.currentPlayer = 'x';

  this.move = function(cell){
    if(cell.value === ''){
      cell.value = this.currentPlayer
      if (this.currentPlayer === 'x'){ 
        this.xMoves.push(cell.index) 
        this.checkWinner(this.xMoves, 'x')
      }
      else if (this.currentPlayer === 'o'){ 
        this.oMoves.push(cell.index) 
        this.checkWinner(this.oMoves, 'o')
      }
      this.changePlayer(this.currentPlayer)
    }
  }

  this.changePlayer = function(current){
    current === 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x'

  }

  this.checkWinner = function(playerArray, player){

    for (i = 0; i < this.winningCombinations.length; i++) {
      winCounter = 0;

      for (var j = 0; j < this.winningCombinations[i].length; j++) {
        if(playerArray.indexOf(this.winningCombinations[i][j]) !== -1){
          winCounter++;
        }

        if(winCounter === 3){
          this.setWinner();
          this.incramentPlayerCount(player);
        }
      }
    }
  }

  this.setWinner = function(){
    $('#winnerContainer').slideDown('slow')

  }

  this.checkGameWinner = function(){
    if(this.xWinCount === 3){
      this.setGameWinner()
    }
    if(this.oWinCount === 3){
      this.setGameWinner()
    }

  }

  this.setGameWinner = function(){
    $('#innerContainer').slideUp('slow')
    $('#gameWinner').slideDown('slow')
  }

  this.incramentPlayerCount = function(player) {
    this.winner = player
    player === 'x' ? this.xWinCount++ : this.oWinCount++
    this.checkGameWinner()
  }

}