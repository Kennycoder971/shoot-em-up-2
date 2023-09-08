class State {
  public static instance: State | null = null;
  public score = 0;
  public health = 10;
  public difficulty = 1;
  public enemies = [];
  public bullets = [];
  public player = null;
  public screenWidth = 800;
  public screenHeight = 600;
  private constructor() {}

  public static getInstance() {
    if (!State.instance) {
      State.instance = new State();
    }
    return State.instance;
  }
}
const state = State.getInstance();
export default state;
