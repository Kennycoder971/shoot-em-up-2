import UIElements from "./UIElements";
import { loadAssets } from "./utils/loaders";
import Player, { playerInstance } from "./Player";
import Sprite from "./Sprite";
import { SparkBullet } from "./weapons/Spark";
import state from "./gameState";
import RedUfo from "./Enemies/RedUfo";

export default class Game {
  public lastFrameTimeMs = 0;
  public accumulatedTime = 0;
  public maxTimeStep = 30;
  public static instance: Game | null = null;
  public context: CanvasRenderingContext2D;
  public uiElements: UIElements;
  public player: Player | null = null;

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
      loadAssets("space-ships/en_", 10),
      // load player images
      loadAssets("space-ships/player_", 10),
      // projectiles
      loadAssets("/projectiles/shoot_", 5),
    ]);

    const [enemies, players, projectiles] = images;

    RedUfo.image = enemies[8];

    if (this.player) {
      const playerSprite = new Sprite(
        this.player?.x,
        this.player?.y,
        this.player?.width,
        this.player?.height,
        players[5]
      );
      this.player?.setSprite(playerSprite);
    }

    SparkBullet.bulletImage = projectiles[0];
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

  private update(): void {
    this.player?.update();
    state.updateBullets();
    state.updateEnemies();
  }

  private render(): void {
    this.uiElements.renderBackgrounds(this.context);
    this.player?.draw(this.context);
    state.bullets.forEach((bullet) => bullet.draw(this.context));
    state.drawEnemies(this.context);
  }

  public endGame(): void {}

  public pauseGame(): void {}

  public resumeGame(): void {}

  public restartGame(): void {
    // Restart the game from the beginning
  }
}
