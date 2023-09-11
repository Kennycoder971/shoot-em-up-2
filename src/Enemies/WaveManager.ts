import state from "../gameState";
import Enemy from "./Enemy";
import RedUfo from "./RedUfo";

export default class WaveManager {
  public enemies: Enemy[] = [];
  public enemiesKilled = 0;
  public waveNumber = 0;
  public waveSize = 2;
  public difficulty = 1;

  constructor() {}

  createWave() {
    for (let i = 0; i < Math.floor(this.waveSize * this.difficulty); i++) {
      const health = Math.floor(Math.random() * this.difficulty) + 1;
      let x = Math.random() * state.canvasWidth - 60;
      if (x < 50) {
        x = 50;
      }
      const y = -100;

      this.enemies.push(new RedUfo(x, y, health));
    }

    state.enemies = this.enemies;
  }

  startWave() {
    this.waveNumber++;
    this.createWave();
  }

  run() {
    if (state.enemies.length === 0) {
      this.startWave();
      this.difficulty += 0.2;
    }
  }
}
