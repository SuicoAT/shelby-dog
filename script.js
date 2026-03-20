const gallery = document.getElementById('gallery');

fetch('photos/')
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(text, "text/html");

    const links = htmlDoc.querySelectorAll("a");

    const images = [];

    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href.match(/\.(jpg|jpeg|png)$/i)) {
        images.push(href);
      }
    });

    images.reverse(); // neueste zuerst

    images.forEach(src => {
      const img = document.createElement('img');
      img.src = 'photos/' + src;

      img.onclick = () => {
        document.getElementById('lightbox').classList.remove('hidden');
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('info').innerHTML = `<p>${src}</p>`;
      };

      gallery.appendChild(img);
    });
  });
