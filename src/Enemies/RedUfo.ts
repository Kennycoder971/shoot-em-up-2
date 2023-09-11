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
    if (this.x > state.canvasWidth || this.x < 0) {
      this.speedX *= -1;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    if (RedUfo.image) {
      context.save();
      context.translate(this.x, this.y);
      context.rotate((360 * Math.PI) / 360);
      context.drawImage(
        RedUfo.image,
        -13,
        -10,
        this.width + 25,
        this.height + 20
      );
      context.restore();

      return;
    }

    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
