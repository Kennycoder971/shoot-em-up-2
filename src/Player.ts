import Character from "./Character";
import Sprite from "./Sprite";
import state from "./gameState";
class Player extends Character {
  public static instance: Player | null = null;
  private constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public velocity: number,
    public sprite: Sprite | null,
    public health: number,
    public hasWeapon: boolean
  ) {
    super(x, y, width, height, velocity, null, health, hasWeapon);
  }

  public static getInstance() {
    if (!Player.instance) {
      Player.instance = new Player(
        state.canvasWidth / 2 - 25,
        state.canvasHeight - 100,
        50,
        50,
        10,
        null,
        100,
        false
      );
    }
    return Player.instance;
  }

  public draw(context: CanvasRenderingContext2D) {
    console.log("draw player");

    if (!this.sprite) {
      context.fillStyle = "#fff";

      context.fillRect(this.x, this.y, this.width, this.height);
      return;
    }
    this.sprite.draw(context);
  }
}

export default Player;
const playerInstance = Player.getInstance();
export { playerInstance };
