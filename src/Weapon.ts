import Bullet from "./Bullet";

export default class Weapon {
  constructor(public bullets: Bullet[], public damage: number) {}
  public shoot() {}
  public update() {
    if (this.bullets.length === 0) return;
    this.bullets.forEach((bullet) => {
      bullet.update();
      if (bullet.y < 0 || bullet.y > 600) {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
      }
    });
  }

  public draw(context: CanvasRenderingContext2D) {
    if (this.bullets.length === 0) return;
    this.bullets.forEach((bullet) => bullet.draw(context));
  }
}
