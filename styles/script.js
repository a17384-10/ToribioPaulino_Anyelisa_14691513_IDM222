//dark mode
window.addEventListener("DOMContentLoaded", function(){

  var toggleBtn = document.querySelector(".theme-toggle");

  // restore theme
  var savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
  }

  toggleBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
  document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

  });

});

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

