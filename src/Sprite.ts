export default class Sprite {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public image: HTMLImageElement | null
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  draw(context: CanvasRenderingContext2D) {
    if (!this.image) {
      context.fillStyle = "#fff";
      context.fillRect(this.x, this.y, this.width, this.height);
      return;
    }
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
