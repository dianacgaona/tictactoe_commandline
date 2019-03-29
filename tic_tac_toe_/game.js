const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  // prompt: 'OHAI> '
});
const Board = require("./board.js");
const HumanPlayer = require("./HumanPlayer.js");
class Game {
  constructor(player1, player2) {
    // this.player1 = "X"
    // this.player2 = "O"
    this.board = new Board();
    // this.currPlayer = this.player1;
    this.player1 = player1;
    this.player2 = player2;
    this.currPlayer = this.player1.sym;
  }

  switchPlayer() {
    if (this.currPlayer === this.player1.sym) {
      this.currPlayer = this.player2.sym;
    } else {
      this.currPlayer = this.player1.sym;
    }
  }

  yourTurn() {
    console.log(`${this.currPlayer.name} make a move!`);
    this.grid.printBoard();
    //this.getMove();
  }

  getMove() {
    let move = false;
    while (!move) {
      let chosenMove = this.currPlayer.getMove();
      if (this.grid.isValidMove(chosenMove)) {
        this.grid.markBoard(chosenMove, this.currPlayer.sym);
        move = true;
      } else {
        console.log(`Nuh uh Bud!`);
      }
    }
  }
  // play(){
  //     while (!this.grid.isGameOver()) {
  //       this.switchPlayer();
  //       this.yourTurn();
  //     }
  //
  //   }
  start() {
    this.board.printBoard();
  }

  play(move) {
    if (!this.board.isGameOver()) {
      if (this.board.isValidMove(move)) {
        this.board.markBoard(move, this.currPlayer);
        this.board.printBoard();
        this.switchPlayer();
      }
    } else {
      console.log(this.board.isGameOver());
    }
  }
}
let game = new Game(
  new HumanPlayer("Kickboxing Queen D", "X"),
  new HumanPlayer("Just Bayne", "O")
);
// )
game.start();
rl.on("line", line => {
  let move = line.trim();
  game.play(move);
});
