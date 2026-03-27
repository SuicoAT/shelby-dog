const BASE_URL = "https://pub-acf50fa6e259456c8f7497cc1f47d4dc.r2.dev";

const gallery = document.getElementById("gallery");

async function loadImages() {
  const res = await fetch(BASE_URL);
  const text = await res.text();

  const parser = new DOMParser();
  const html = parser.parseFromString(text, "text/html");

  const links = html.querySelectorAll("a");

  const images = [];

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href.match(/\.(jpg|jpeg|png)$/i)) {
      images.push(href);
    }
  });

  // neueste zuerst
  images.sort().reverse();

  images.forEach(file => {
    const img = document.createElement("img");
    img.src = `${BASE_URL}/${file}`;
    img.className = "gallery-img";

    img.onclick = () => {
      document.getElementById("modal").style.display = "flex";
      document.getElementById("modal-img").src = img.src;
    };

    gallery.appendChild(img);
  });
}

loadImages();

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
