import Enemy from "./Enemy";
import state from "../gameState";

export default class RedUfo extends Enemy {
  public static image: HTMLImageElement;
  constructor() {
    super(
      Math.random() * state.canvasWidth,
      -100,
      80,
      80,
      Math.random() * 3 + 1,
      1
    );
  }

  update() {
    this.y += this.speed;
    this.x += this.speed;
    if (this.x + this.width > state.canvasHeight || this.x < 0) {
      this.speed *= -1;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    if (RedUfo.image) {
      context.drawImage(RedUfo.image, this.x, this.y, this.width, this.height);
      return;
    }

    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
