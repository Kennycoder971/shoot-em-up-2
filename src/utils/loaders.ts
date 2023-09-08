async function loadAssets(path: string, numAssets: number) {
  const arr: HTMLImageElement[] = [];

  for (let i = 1; i < numAssets + 1; i++) {
    const img = new Image();
    img.src = `assets/${path}${i}.png`;
    img.onload = () => {
      arr.push(img);
    };
  }

  return new Promise((resolve) => {
    resolve(arr);
  });
}

export { loadAssets };
