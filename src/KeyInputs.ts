export default class KeyInputs {
  public static instance: KeyInputs | null = null;
  public keys: { [key: string]: boolean } = {};
  public keyMap: { [key: string]: string } = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    KeyW: "up",
    KeyS: "down",
    KeyA: "left",
    KeyD: "right",
    Space: "space",
  };

  private constructor() {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
      if (this.keyMap[event.code]) {
        this.keys[this.keyMap[event.code]] = true;
      }
    });

    document.addEventListener("keyup", (event: KeyboardEvent) => {
      if (this.keyMap[event.code]) {
        this.keys[this.keyMap[event.code]] = false;
      }
    });
  }

  public static getInstance() {
    if (!KeyInputs.instance) {
      KeyInputs.instance = new KeyInputs();
    }
    return KeyInputs.instance;
  }

  public isDown(key: string): boolean {
    return this.keys[key];
  }
}
