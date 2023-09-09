import Bullet from "../Bullet";
import Sprite from "../Sprite";
import Weapon from "../Weapon";
import state from "../gameState";

export class SparkBullet extends Bullet {
  static sprite: Sprite;
  constructor(direction: "up") {
    super(
      state.player.x + state.player.width / 2,
      state.player.y,
      3,
      7,
      0,
      0,
      null,
      10,
      direction
    );
  }

  public static setSprite(sprite: Sprite) {
    SparkBullet.sprite = sprite;
  }
}

export default class Spark extends Weapon {
  public bullets: SparkBullet[] = [];
  constructor() {
    super([], 1);
  }
}
