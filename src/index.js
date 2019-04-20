import smoothscroll from 'smoothscroll-polyfill';
import './sass/main.sass';

const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
const isSafari = navigator.userAgent.indexOf('Safari') > -1;

if (isSafari && !isChrome) {
  smoothscroll.polyfill();
}

const scrollToAbout = () =>
  window.scrollTo({
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
