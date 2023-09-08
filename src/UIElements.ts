export default class UIElements {
  private background1: HTMLImageElement | null = null;
  private background2: HTMLImageElement | null = null;
  privateCurrentBackgrounds: HTMLImageElement[] = [];

  constructor() {}

  public setBackGrounds(
    background1: HTMLImageElement,
    background2: HTMLImageElement
  ): void {
    this.background1 = background1;
    this.background2 = background2;
  }

  public renderBackgrounds(context: CanvasRenderingContext2D): void {
    if (this.background1 && this.background2) {
      context.drawImage(this.background1, 0, 0);
      context.drawImage(this.background2, 0, 0);

      return;
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }
}
