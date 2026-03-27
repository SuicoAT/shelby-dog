async function loadImages() {
  const username = "SuicoAT"; // dein GitHub Username
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
      gallery.appendChild(img);
    }
  });
}

loadImages();
