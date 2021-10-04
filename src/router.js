const ABOUT_ROUTE = 'about';
const PROJECTS_ROUTE = 'projects';

// cache element containers for each route
const ROUTE_PAGES = {
  [ABOUT_ROUTE]: document.getElementById(ABOUT_ROUTE),
  [PROJECTS_ROUTE]: document.getElementById(PROJECTS_ROUTE),
};

export const ROUTES = Object.keys(ROUTE_PAGES);

export function getRoute() {
  const hash = window.location.hash || '';
  const path = hash.slice(1);
  return ROUTES.includes(path) ? path : PROJECTS_ROUTE;
}

export function navigateToRoute(route) {
  if (!ROUTES.includes(route)) {
    throw Error('invalid route, must be one of ', ROUTES);
  }

  // hide all route containers
  ROUTES.forEach((routeKey) => (ROUTE_PAGES[routeKey].style.display = 'none'));

  // display the one we navigate to
  ROUTE_PAGES[route].style.display = 'block';

  // update the route in address bar to support stateful refresh
  window.location.hash = `#${route}`;
}
