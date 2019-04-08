import './sass/main.sass';

const scrollToAbout = () =>
  window.scroll({
    top: 800,
    left: 0,
    behavior: 'smooth',
  });

document
  .querySelector('#low-header .about')
  .addEventListener('click', scrollToAbout);
document.querySelector('#hero .about').addEventListener('click', scrollToAbout);

var header = document.getElementById('low-header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= innerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
