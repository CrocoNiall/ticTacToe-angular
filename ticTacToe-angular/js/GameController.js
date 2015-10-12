angular.module('ticTacToeApp')
  .controller('GameController', GameController)

function GameController(){
  
  this.board = [
    [ { value: '-', index: 1}, { value: '-', index: 2}, { value: '-', index: 3 } ],
    [ { value: '-', index: 4 }, { value: '-', index: 5 }, { value: '-', index: 6 } ],
    [ { value: '-', index: 7 }, { value: '-', index: 8 }, { value: '-', index: 9 } ]
    ];


  this.winningCombinations = [ [0,1,2],[3,4,5],
                               [6,7,8],[0,3,6], 
                               [1,4,7],[2,5,8],
                               [0,4,8],[2,4,6] ];
  this.currentPlayer = 'x';


}