import { loadAssets } from "./utils/loaders";

export default class Game {
  public static instance: Game | null = null;
  private constructor(public canvas: HTMLCanvasElement) {}

  public static getInstance(canvas: HTMLCanvasElement) {
    if (!Game.instance) {
      Game.instance = new Game(canvas);
    }
    return Game.instance;
  }

  public async initialize() {
    // L
    await Promise.all([
      // load enemies
      loadAssets("space-ships/en_", 10),
    ]);
  }

  // Game loop
  public startGameLoop(): void {
    // Start your game loop here (e.g., using requestAnimationFrame)
    const gameLoop = () => {
      // Update game state
      this.update();

      // Render game
      this.render();

      // Request the next frame
      requestAnimationFrame(gameLoop);
    };

    // Start the game loop
    gameLoop();
  }

  // Update game state (called in the game loop)
  private update(): void {
    // Update game objects, handle input, check collisions, etc.
  }

  // Render the game (called in the game loop)
  private render(): void {
    // Render game objects, UI elements, etc.
  }

  // Handle game over or game completion
  public endGame(): void {
    // Perform cleanup, show game over screen, handle high scores, etc.
  }

  // Other methods for pausing, resuming, and restarting the game
  public pauseGame(): void {
    // Pause the game
  }

  public resumeGame(): void {
    // Resume the game
  }

  public restartGame(): void {
    // Restart the game from the beginning
  }
}
