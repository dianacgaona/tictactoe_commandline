class HumanPlayer {
  constructor(name, sym) {
    this.name = name;
    this.sym = sym;
  }
}
//   rl.on('line', (line) => {
//   let move =line.trim();
//   console.log("move", move);
// })

module.exports = HumanPlayer;

// using new lines to display on the terminal to give it an interface feeling
//consider using instructions at the beginning of the game to help players navigate the game
