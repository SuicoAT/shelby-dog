document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("gallery");

  fetch("https://api.github.com/repos/SuicoAT/shelby-dog/contents/photos")
    .then(res => res.json())
    .then(files => {

      console.log("Files:", files); // Debug

      files.forEach(file => {

        // 👉 Nur echte Bilder laden
        if (file.type === "file" && /\.(jpg|jpeg|png|webp)$/i.test(file.name)) {

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
