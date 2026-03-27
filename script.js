document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("gallery");

  fetch("https://api.github.com/repos/SuicoAT/shelby-dog/contents/photos")
    .then(res => res.json())
    .then(files => {

      files
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file.name))
        .forEach(file => {

          const wrapper = document.createElement("div");
          wrapper.className = "item";

          const img = document.createElement("img");
          img.src = file.download_url;

          wrapper.appendChild(img);
          gallery.appendChild(wrapper);

        });

    })
    .catch(err => console.error(err));

});
