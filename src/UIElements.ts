import state from "./gameState";

type star = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: string;
};

export default class UIElements {
  privateCurrentBackgrounds: HTMLImageElement[] = [];
  public numStars = 30;
  public stars: star[] = [];
  constructor() {
    this.createStars();
  }

  public createStars(): void {
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * state.canvasWidth,
        y: Math.random() * state.canvasHeight,
        radius: Math.random() * 3,
        speed: Math.random() * 5 + 1,
        color: "#fff",
      });
    }
  }

  public renderBackgrounds(context: CanvasRenderingContext2D): void {
    context.fillStyle = "#000";
    context.fillRect(0, 0, state.canvasWidth, state.canvasHeight);

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      context.fillStyle = "#fff";
      context.fill();
      star.y += star.speed;
      if (star.y > state.canvasHeight) {
        star.y = 0;
      }
    }
  }
}
