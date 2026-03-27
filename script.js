const gallery = document.getElementById("gallery");

// 🔥 WICHTIG: DEIN USERNAME + REPO
const username = "SuicoAT";
const repo = "shelby-dog";
const folder = "photos";

// GitHub API URL
const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${folder}`;

fetch(apiUrl)
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {

      // nur Bilder laden
      if (file.type === "file" && file.download_url) {

        // 👉 Wrapper (WICHTIG für Grid)
        const wrapper = document.createElement("div");
        wrapper.className = "item";

        // 👉 Bild
        const img = document.createElement("img");
        img.src = file.download_url;
        img.loading = "lazy"; // 🔥 Performance Boost

        wrapper.appendChild(img);
        gallery.appendChild(wrapper);
      }

    });
  })
  .catch(err => {
    console.error("Fehler beim Laden der Bilder:", err);
  });
