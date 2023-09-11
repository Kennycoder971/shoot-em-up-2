import Bullet from "./Bullet";
import Enemy from "./Enemies/Enemy";
import WaveManager from "./Enemies/WaveManager";
import Player from "./Player";

class State {
  public static instance: State | null = null;
  public player: Player;
  public score = 0;
  public health = 10;
  public difficulty = 1;
  public enemies: Enemy[] = [];
  public bullets: Bullet[] = [];
  public waveManager: WaveManager | null = null;
  public canvasWidth = 800;
  public canvasHeight = 600;
  public debug = true;

  private constructor() {
    this.player = Player.getInstance();
    this.waveManager = new WaveManager();
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

  public updateEnemies() {
    this.waveManager?.run();
    this.enemies.forEach((enemy) => {
      if (enemy.y > this.canvasHeight) {
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
      }
      enemy.update();
    });
  }

  public drawEnemies(context: CanvasRenderingContext2D) {
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
}
const state = State.getInstance();
export default state;
