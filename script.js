async function loadImages() {
  const username = "SuicoAT";
  const repo = "shelby-dog";
  const path = "photos";

  const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

  const res = await fetch(url);
  const data = await res.json();

  const gallery = document.getElementById("gallery");

  data.forEach(file => {
    if (file.type === "file") {
      const img = document.createElement("img");
      img.src = file.download_url;

      img.onclick = () => openLightbox(file.download_url);

      gallery.appendChild(img);
    }
  });
}

function openLightbox(src) {
  const overlay = document.createElement("div");
  overlay.id = "lightbox";

  overlay.innerHTML = `
    <img src="${src}">
  `;

  overlay.onclick = () => overlay.remove();

  document.body.appendChild(overlay);
}

loadImages();
