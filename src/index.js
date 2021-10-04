import smoothscroll from 'smoothscroll-polyfill';
import { getRoute, navigateToRoute, ROUTES } from './router';
import './sass/main.sass';

const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
const isSafari = navigator.userAgent.indexOf('Safari') > -1;

if (isSafari && !isChrome) {
  smoothscroll.polyfill();
}

ROUTES.forEach((route) => {
  const button = document.querySelector(`#low-header .${route}`);
  if (!button) return;
  button.onclick = navigateToRoute(route);
});

ROUTES.forEach((route) => {
  const button = document.querySelector(`#hero .${route}`);
  if (!button) return;
  button.onclick = navigateToRoute(route);
});

// navigate to current route
const route = getRoute();
navigateToRoute(route);

var header = document.getElementById('low-header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= innerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
