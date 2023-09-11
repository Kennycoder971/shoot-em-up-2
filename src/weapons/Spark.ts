import Bullet from "../Bullet";
import Weapon from "../Weapon";
import state from "../gameState";

export class SparkBullet extends Bullet {
  constructor(direction: "up") {
    super(
      state.player.x + state.player.width / 2 - 5,
      state.player.y,
      15,
      15,
      0,
      0,
      20,
      direction
    );
  }

  public draw(context: CanvasRenderingContext2D) {
    if (SparkBullet.bulletImage) {
      context.drawImage(
        SparkBullet.bulletImage,
        this.x,
        this.y,
        this.width,
        this.height
      );
      return;
    }
    context.fillStyle = "#fff";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default class Spark extends Weapon {
  public bullets: SparkBullet[] = [];
  constructor() {
    super([], 1);
  }

  public shoot() {
    const bullet = new SparkBullet("up");
    this.bullets.push(bullet);
    state.bullets = [...this.bullets];
  }
}
