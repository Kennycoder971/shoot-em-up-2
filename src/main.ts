import Game from "./Game";

const canvas = document.querySelector(".game") as HTMLCanvasElement;

const game = Game.getInstance(canvas);

game.initialize().then(() => {
  console.log("Game initialized");
});
