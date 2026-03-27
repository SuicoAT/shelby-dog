document.addEventListener("DOMContentLoaded", () => {

  console.log("🔥 Script gestartet");

  const gallery = document.getElementById("gallery");

  if (!gallery) {
    console.error("❌ gallery nicht gefunden");
    return;
  }

  fetch("https://api.github.com/repos/SuicoAT/shelby-dog/contents/photos")
    .then(res => res.json())
    .then(files => {

      console.log("📦 Files:", files);

      files.forEach(file => {

        if (file.type === "file" && /\.(jpg|jpeg|png|webp)$/i.test(file.name)) {

          const wrapper = document.createElement("div");
          wrapper.className = "item";

          const img = document.createElement("img");

          // 🔥 WICHTIG: RAW URL verwenden
          img.src = file.download_url;

          img.onload = () => console.log("✅ geladen:", file.name);
          img.onerror = () => console.error("❌ Fehler bei:", file.name);

          wrapper.appendChild(img);
          gallery.appendChild(wrapper);

        }

      });

    })
    .catch(err => console.error("❌ FETCH ERROR:", err));

});
