const gallery = document.getElementById("gallery");

// 🔥 GitHub Daten
const username = "SuicoAT";
const repo = "shelby-dog";
const folder = "photos";

const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${folder}`;

fetch(apiUrl)
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {

      if (file.type === "file" && file.download_url) {

        const wrapper = document.createElement("div");
        wrapper.className = "item";

        const img = document.createElement("img");
        img.src = file.download_url;
        img.loading = "lazy";

        // 👉 CLICK = Lightbox öffnen
        img.onclick = () => openLightbox(file.download_url);

        wrapper.appendChild(img);
        gallery.appendChild(wrapper);
      }

    });
  });

// 🔥 LIGHTBOX FUNKTION
function openLightbox(src) {

  const overlay = document.createElement("div");
  overlay.id = "lightbox";

  const img = document.createElement("img");
  img.src = src;

  overlay.appendChild(img);

  // 👉 Klick irgendwo schließt
  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
}
