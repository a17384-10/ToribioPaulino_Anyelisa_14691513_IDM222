const body = document.body;
const toggle = document.getElementById('toggle');
const works = document.querySelector('.button');
const box = document.querySelector('.topbox');
const info = document.querySelectorAll('.info');
const resume = document.getElementById('resume')


/* dark + light mode settings */
toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
    }

    if (theme === 'dark') {
        toggle.textContent = 'toggle light mode';
        toggle.style.backgroundColor = '#bdf7ff';
        toggle.style.color = '#160333';
        works.style.backgroundColor = '#bdf7ff';
        works.style.color = '#160333';
        box.style.backgroundColor = '#48399cff';
        box.style.color = '#160333';
        resume.style.backgroundColor = '#48399cff';

        /* ask philip why the infos r not changing color */
        info.style.backgroundColor = '#48399cff';
        info.style.color = '#160333';      

    } else {
        toggle.textContent = 'toggle dark mode';
        toggle.style.backgroundColor = '#160333';
        toggle.style.color = '#bdf7ff';
        works.style.backgroundColor = '#160333';
        works.style.color = '#bdf7ff';
        box.style.backgroundColor = '#68e8ff';
        box.style.color = '#160333';
        info.style.backgroundColor = '#68e8ff';
        info.style.color = '#160333';

        /* ask philip why this is not changing back */
        resume.style.backgroundColor = '#68e8ff';
    }
});

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

