export default class Sprite {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public image: HTMLImageElement | null;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.image = null;
  }

  draw(context: CanvasRenderingContext2D) {
    if (!this.image) return;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
