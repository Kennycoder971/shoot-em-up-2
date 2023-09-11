import Character from "./Character";
import KeyInputs from "./KeyInputs";
import Sprite from "./Sprite";
import Weapon from "./Weapon";
import state from "./gameState";
import { checkPlayerMapCollisions } from "./utils/collisions";
import Spark from "./weapons/Spark";
class Player extends Character {
  public static instance: Player | null = null;
  public velocityX: number = 0;
  public velocityY: number = 0;
  public speed: number = 10;
  public keyInputs: KeyInputs;
  public weapons: Weapon[];
  public equipedWeapon: Weapon;
  public frameCount = 0;

  private constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public sprite: Sprite | null,
    public health: number,
    public hasWeapon = true
  ) {
    super(x, y, width, height, null, health, hasWeapon);

    this.weapons = [new Spark()];
    this.keyInputs = KeyInputs.getInstance();
    this.equipedWeapon = this.weapons[0];
  }

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player(
        350, // Screen width / 2 - player width / 2
        500, // Screen height - player height
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
    this.frameCount++;
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.sprite?.update(this.x, this.y);
    this.shoot();
    this.checkPlayerInput();
    checkPlayerMapCollisions(this);
  }

  public shoot() {
    if (this.frameCount % 5 === 0) {
      this.equipedWeapon.shoot();
    }
  }

  public checkPlayerInput() {
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
