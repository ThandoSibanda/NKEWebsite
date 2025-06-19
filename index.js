const menuToggle = document.querySelector('#nav-toggle');
const showcase   = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');      // animate burger ↔ close
  showcase.classList.toggle('active');      // slide menu in/out
});
const exploreButton = document.querySelector('#explore-btn');


function goToRandomPage() {
  const pageURLs = [
    'radio.html',
    'About.html',
  ];
  const randomIndex = Math.floor(Math.random() * pageURLs.length);
  const randomURL = pageURLs[randomIndex];
  window.location.href = randomURL;
}

exploreButton.addEventListener('click', goToRandomPage);
