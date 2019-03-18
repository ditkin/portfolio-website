import './sass/main.sass';

document.querySelector('.about').addEventListener('click', () => {
  window.scroll({
    top: 800,
    left: 0,
    behavior: 'smooth',
  });
});

var header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= innerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
