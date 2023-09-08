function loadAssets(
  assetName: string,
  numAssets: number
): Promise<HTMLImageElement[]> {
  return new Promise((resolve, reject) => {
    const loadedAssets: HTMLImageElement[] = [];

    const loadAssetAtIndex = (index: number) => {
      const img = new Image();
      img.src = `assets/${assetName}${index}.png`;

      img.onload = () => {
        loadedAssets.push(img);

        if (loadedAssets.length === numAssets) {
          resolve(loadedAssets);
        } else {
          loadAssetAtIndex(index + 1);
        }
      };

      img.onerror = () => {
        reject(`Failed to load asset: ${assetName}${index}.png`);
      };
    };

    // Start loading the first asset
    loadAssetAtIndex(1);
  });
}

export { loadAssets };
