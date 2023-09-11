export default class Enemy {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public speed: number,
    public health: number
  ) {}

  public draw(context: CanvasRenderingContext2D) {}
  public update() {}
}
