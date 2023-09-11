import Bullet from "./Bullet";
import Player from "./Player";

class State {
  public static instance: State | null = null;
  public player: Player;
  public score = 0;
  public health = 10;
  public difficulty = 1;
  public enemies = [];
  public bullets: Bullet[] = [];
  public canvasWidth = 800;
  public canvasHeight = 600;
  public debug = true;

  private constructor() {
    this.player = Player.getInstance();
  }

  public static getInstance() {
    if (!State.instance) {
      State.instance = new State();
    }
    return State.instance;
  }

  public updateBullets() {
    this.bullets.forEach((bullet) => {
      if (bullet.y < 0 || bullet.y > this.canvasHeight) {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
      }
      bullet.update();
    });
  }
}
const state = State.getInstance();
export default state;
