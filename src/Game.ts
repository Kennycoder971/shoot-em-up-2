import UIElements from "./UIElements";
import { loadAssets } from "./utils/loaders";
import Player, { playerInstance } from "./Player";

export default class Game {
  public lastFrameTimeMs = 0;
  public accumulatedTime = 0;
  public maxTimeStep = 100;
  public static instance: Game | null = null;
  public context: CanvasRenderingContext2D;
  public uiElements: UIElements;
  player: Player | null = null;

  private constructor(public canvas: HTMLCanvasElement) {
    this.context = this.canvas.getContext("2d")!;
    this.uiElements = new UIElements();
    this.player = Player.getInstance();
    this.player = playerInstance;
  }

  public static getInstance(canvas: HTMLCanvasElement) {
    if (!Game.instance) {
      Game.instance = new Game(canvas);
    }
    return Game.instance;
  }

  public async initialize() {
    const images = await Promise.all([
      // load enemies images
      loadAssets("space-ships/en_", 1),
      // load player images
      loadAssets("space-ships/player_", 1),
    ]);

    const [enemies, players] = images;
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

  private render(): void {
    this.uiElements.renderBackgrounds(this.context);
    this.player?.draw(this.context);
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
