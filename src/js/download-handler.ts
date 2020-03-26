// DOWNLOAD SIGNATURE
const downloadAsset = (asset, btn) => {
  console.log(asset);

  btn.addEventListener("click", () => {
    console.log("clicked dl");

    // Create an anchor element so we can set the download name
    const link = document.createElement("a");

    // Name file will be saved as
    link.download = `convo-${asset.src}`;

    // Setting the download link to the file
    let imageUrl = asset.src;
    link.href = imageUrl;

    link.click();
  });
};
