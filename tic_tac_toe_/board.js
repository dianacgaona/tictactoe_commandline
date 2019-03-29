class Board {
  constructor() {
    this.grid = {
      a1: '',
      b1: '',
      c1: '',
      a2: '',
      b2: '',
      c2: '',
      a3: '',
      b3: '',
      c3: '',
    };
    // this.movesLeft = 9
  }

  printBoard() {
    console.clear();
    console.log(
      '\n' +
        '  ' +
        ' A' +
        ' | ' +
        'B' +
        ' | ' +
        'C' +
        '\n' +
        ' ' +
        '------------\n' +
        '1 | ' +
        ' ' +
        this.grid['a1'] +
        '| ' +
        this.grid['b1'] +
        ' | ' +
        this.grid['c1'] +
        '\n' +
        ' ' +
        ' -----------\n' +
        '2 | ' +
        ' ' +
        this.grid['a2'] +
        '| ' +
        this.grid['b2'] +
        ' | ' +
        this.grid['c2'] +
        '\n' +
        ' ' +
        ' -----------\n' +
        '3 |' +
        ' ' +
        this.grid['a3'] +
        " | " +
        this.grid["b3"] +
        " | " +
        this.grid["c3"] +
        "\n"
    );
  }
  markBoard(position, sym) {
    // this.grid = sym.toUpperCase();
    // console.log(this.grid[position], typeof this.grid[position]);
    // let mark = this.grid[position];
    if (this.grid[position] === "") {
      this.grid[position] = sym;
    } else {
      console.log(`Can't go there.`);
    }
  }
  // isEmpty(){
  //   if (!this.sym === ""
  //   console.log(typeof "")
  //
  // };

  isValidMove(input) {
    if (this.grid[input] === "") {
      return true;
    } else {
      return false;
    }
  }

  isGameOver() {
    //horizontal
    if (
      this.grid["a1"] === this.grid["b1"] &&
      this.grid["b1"] === this.grid["c1"]
    ) {
      return this.grid["a1"];
    }
    if (
      this.grid["a2"] === this.grid["b2"] &&
      this.grid["b2"] === this.grid["c2"]
    ) {
      return this.grid["a2"];
    }
    if (
      this.grid["a3"] === this.grid["b3"] &&
      this.grid["b3"] === this.grid["c3"]
    ) {
      return this.grid["a3"];
    }
    // Vertical
    if (
      this.grid["a1"] === this.grid["a2"] &&
      this.grid["a2"] === this.grid["a3"]
    ) {
      return this.grid["a1"];
    }
    if (
      this.grid["b1"] === this.grid["b2"] &&
      this.grid["b2"] === this.grid["b3"]
    ) {
      return this.grid["b1"];
    }
    if (
      this.grid["c1"] === this.grid["c2"] &&
      this.grid["c2"] === this.grid["c3"]
    ) {
      return this.grid["c1"];
    }
    // diagonal
    if (
      this.grid["a1"] === this.grid["b2"] &&
      this.grid["b2"] === this.grid["c3"]
    ) {
      return this.grid["a1"];
    }
    if (
      this.grid["a3"] === this.grid["b2"] &&
      this.grid["b2"] === this.grid["c1"]
    ) {
      return this.grid["a3"];
    }
  }
}
// let board1 = new Board()
// console.log(board1.isGameOver())
// board1.printBoard()
// console.log(markBoard('a1','x'))
module.exports = Board;
