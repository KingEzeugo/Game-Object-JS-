let game = {
   lives: 3,          // Initial lives
   coins: 0,          // Initial coins

   // Getter for points
   get points() {
      return this.coins * 10; // Return points based on coins
   },

   // Method to handle player death
   playerDies() {
      if (this.lives > 0) {
         this.lives -= 1;    // Subtract 1 from lives
      }
   },

   // Method to reset the game
   newGame() {
      this.lives = 3;        // Reset lives to 3
      this.coins = 0;        // Reset coins to 0
   }
};

console.log("Testing game object...");

// Un-comment the code below to test the game object
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0

// Do NOT remove the following line:
export default game;
