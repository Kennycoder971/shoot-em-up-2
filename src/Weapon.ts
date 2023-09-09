import Bullet from "./Bullet";

export default class Weapon {
  constructor(public bullets: Bullet[], public damage: number) {}
}
