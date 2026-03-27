async function loadImages() {
  const username = "SuicoAT";
  const repo = "shelby-dog";
  const path = "photos";

  try {
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("GitHub API Fehler");
    }

    const data = await res.json();
    const gallery = document.getElementById("gallery");

    gallery.innerHTML = ""; // wichtig

    data.forEach(file => {
      if (file.type === "file") {
        const wrapper = document.createElement("div");
        wrapper.className = "item";

        const img = document.createElement("img");
        img.src = file.download_url;

        wrapper.appendChild(img);
        gallery.appendChild(wrapper);
      }
    });

  } catch (err) {
    console.error("FEHLER:", err);
  }
}

loadImages();
