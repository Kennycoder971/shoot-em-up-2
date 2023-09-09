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
}
const state = State.getInstance();
export default state;
