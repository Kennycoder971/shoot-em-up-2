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
  public numStars = 20;
  public stars: star[] = [];
  constructor() {
    this.createStars();
  }

  public createStars(): void {
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * state.screenWidth,
        y: Math.random() * state.screenHeight,
        radius: Math.random() * 3,
        speed: Math.random() * 2 + 1,
        color: "#fff",
      });
    }
  }

  public renderBackgrounds(context: CanvasRenderingContext2D): void {
    context.fillStyle = "#000";
    context.fillRect(0, 0, state.screenWidth, state.screenHeight);

    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      context.fillStyle = "#fff";
      context.fill();
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = state.screenHeight;
      }
    }
  }
}
