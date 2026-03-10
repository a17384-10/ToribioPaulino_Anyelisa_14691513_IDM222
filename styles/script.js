const body = document.body;
const toggle = document.getElementById('toggle');
const works = document.querySelector('#works');
const welcome = document.querySelector('.welcome');
const what = document.querySelector('#what');
const why = document.querySelector('#why');


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
        welcome.style.backgroundColor = '#48399cff';
        welcome.style.color = '#160333';
        what.style.backgroundColor = '#48399cff';
        what.style.color = '#160333';
        why.style.backgroundColor = '#48399cff';
        why.style.color = '#160333';

    } else {
        toggle.textContent = 'toggle dark mode';
        toggle.style.backgroundColor = '#160333';
        toggle.style.color = '#bdf7ff';
        works.style.backgroundColor = '#160333';
        works.style.color = '#bdf7ff';
        welcome.style.backgroundColor = '#68e8ff';
        welcome.style.color = '#160333';
        what.style.backgroundColor = '#68e8ff';
        what.style.color = '#160333';
        why.style.backgroundColor = '#68e8ff';
        why.style.color = '#160333';
    }
});

