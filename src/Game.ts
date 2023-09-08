import UIElements from "./UIElements";
import { loadAssets } from "./utils/loaders";
import state from "./gameState";
export default class Game {
  public lastFrameTimeMs = 0;
  public accumulatedTime = 0;
  public maxTimeStep = 100;
  public static instance: Game | null = null;
  public context: CanvasRenderingContext2D;
  public uiElements: UIElements;

  private constructor(public canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext("2d")!;
    this.uiElements = new UIElements();

    console.log(state);
  }

  public static getInstance(canvas: HTMLCanvasElement) {
    if (!Game.instance) {
      Game.instance = new Game(canvas);
    }
    return Game.instance;
  }

  public async initialize() {
    const images = await Promise.all([
      // load background
      loadAssets("backgrounds/bg", 8),
      // load enemies
      loadAssets("space-ships/en_", 10),
    ]);

    const [backgrounds, enemies] = images;
    this.uiElements.setBackGrounds(backgrounds[6], backgrounds[7]);
  }

  // Game loop
  public startGameLoop(): void {
    // Calculate the number of seconds passed since the last frame

    const gameLoop = (timeStamp: number) => {
      const deltaTime = timeStamp - this.lastFrameTimeMs;

      if (this.accumulatedTime > this.maxTimeStep) {
        this.update();
        this.render();
        this.accumulatedTime = 0;
      }
      this.accumulatedTime += deltaTime;
      this.lastFrameTimeMs = timeStamp;
      requestAnimationFrame(gameLoop);
    };

    gameLoop(0);
  }

  // Update game state (called in the game loop)
  private update(): void {
    // Update game objects, handle input, check collisions, etc.
  }

  // Render the game (called in the game loop)
  private render(): void {
    this.uiElements.renderBackgrounds(this.context);
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
