import Character from "./Character";
import KeyInputs from "./KeyInputs";
import Sprite from "./Sprite";
import state from "./gameState";
import { checkPlayerMapCollisions } from "./utils/collisions";
class Player extends Character {
  public static instance: Player | null = null;
  public velocityX: number = 0;
  public velocityY: number = 0;
  public speed: number = 10;
  public keyInputs: KeyInputs;

  private constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public sprite: Sprite | null,
    public health: number,
    public hasWeapon: boolean
  ) {
    super(x, y, width, height, null, health, hasWeapon);

    this.keyInputs = KeyInputs.getInstance();
  }

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player(
        state.canvasWidth / 2 - 50,
        state.canvasHeight - 100,
        80,
        80,
        null,
        100,
        false
      );
    }
    return Player.instance;
  }

  public draw(context: CanvasRenderingContext2D) {
    if (!this.sprite) {
      context.fillStyle = "#fff";

      context.fillRect(this.x, this.y, this.width, this.height);
      return;
    }
    this.sprite.draw(context);

    // For debugging purposes
    if (state.debug) {
      context.strokeStyle = "#fff";
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    // End of debugging
  }

  public update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.sprite?.update(this.x, this.y);

    checkPlayerMapCollisions(this);

    if (this.keyInputs.isDown("left")) {
      this.velocityX = -this.speed;
    } else if (this.keyInputs.isDown("right")) {
      this.velocityX = this.speed;
    } else {
      this.velocityX = 0;
    }

    if (this.keyInputs.isDown("up")) {
      this.velocityY = -this.speed;
    } else if (this.keyInputs.isDown("down")) {
      this.velocityY = this.speed;
    } else {
      this.velocityY = 0;
    }
  }
}

export default Player;
const playerInstance = Player.getInstance();
export { playerInstance };
