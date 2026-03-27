document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("gallery");

  fetch("https://api.github.com/repos/SuicoAT/shelby-dog/contents/photos")
    .then(res => res.json())
    .then(files => {
      files.forEach(file => {
        if (file.type === "file") {
          const img = document.createElement("img");
          img.src = file.download_url;
          gallery.appendChild(img);
        }
      });
    })
    .catch(err => {
      console.error("Fehler:", err);
    });

});
