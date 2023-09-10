export default class Bullet {
  public static bulletImage: HTMLImageElement | null = null;
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public velocityX: number,
    public velocityY: number,
    public speed: number,
    public direction: "up" | "down"
  ) {}

  public draw(context: CanvasRenderingContext2D) {
    if (!Bullet.bulletImage) {
      context.fillStyle = "#fff";
      context.fillRect(this.x, this.y, this.width, this.height);
      return;
    }

    context.drawImage(
      Bullet.bulletImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  public update() {
    if (this.direction === "up") {
      this.y -= this.speed;
    }

    if (this.direction === "down") {
      this.y += this.speed;
    }
  }
}
