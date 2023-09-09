import Sprite from "./Sprite";

export default class Bullet {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public velocityX: number,
    public velocityY: number,
    public sprite: Sprite | null,
    public speed: number,
    public direction: "up" | "down"
  ) {}

  public draw(context: CanvasRenderingContext2D) {
    if (!this.sprite) {
      context.fillStyle = "yellow";

      context.fillRect(this.x, this.y, this.width, this.height);
      return;
    }
    this.sprite.draw(context);
  }

  public setSprite(sprite: Sprite) {
    this.sprite = sprite;
  }
  public update() {
    if (this.direction === "up") {
      this.y -= this.speed;
    }

    if (this.direction === "down") {
      this.y += this.speed;
    }
  }
}
