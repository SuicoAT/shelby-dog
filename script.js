fetch('data.json')
  .then(res => res.json())
  .then(data => {

    data.sort((a,b) => new Date(b.date) - new Date(a.date));

    const gallery = document.getElementById('gallery');

    data.forEach(item => {
      const img = document.createElement('img');
      img.src = 'photos/' + item.file;

      img.onclick = () => {
        document.getElementById('lightbox').classList.remove('hidden');
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('info').innerHTML =
          `<p>${item.date} – ${item.location}</p>
           <p>${item.text}</p>`;
      };

      gallery.appendChild(img);
    });

    document.getElementById('close').onclick = () => {
      document.getElementById('lightbox').classList.add('hidden');
    };

});
