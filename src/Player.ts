import Character from "./Character";
import Sprite from "./Sprite";

export default class Player extends Character {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public velocity: number,
    public sprite: Sprite | null,
    public health: number,
    public hasWeapon: boolean
  ) {
    super(x, y, width, height, velocity, sprite, health, hasWeapon);
  }

  public draw(context: CanvasRenderingContext2D) {
    if (!this.sprite) {
      context.fillStyle = "#fff";
      context.fillRect(this.x, this.y, this.width, this.height);
      return;
    }
    this.sprite.draw(context);
  }
}
