
//code for zooming into the pictures
document.querySelectorAll('.grid-container img').forEach(image => {
  image.onclick = () => {

    const overlay = document.createElement('div');
    overlay.classList.add('full-screen');

    const bigImg = document.createElement('img');
    bigImg.src = image.src;

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
  };
});

document.querySelectorAll('#slide-grid img').forEach(image => {
  image.onclick = () => {

    const overlay = document.createElement('div');
    overlay.classList.add('full-screen');

    const bigImg = document.createElement('img');
    bigImg.src = image.src;

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
  };
});

