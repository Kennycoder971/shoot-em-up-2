import Enemy from "./Enemy";
import state from "../gameState";

export default class RedUfo extends Enemy {
  public static image: HTMLImageElement;
  constructor(public x: number, public y: number, public health: number = 1) {
    super(x, y, 60, 60, Math.random() * 3 + 2, Math.random() * 3 + 1, health);
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.x + this.width > state.canvasWidth || this.x < 0) {
      this.speedX *= -1;
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
