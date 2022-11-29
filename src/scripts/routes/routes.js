import Home from '../views/pages/home';
import Details from '../views/pages/details';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/details/:id': Details,
  '/favorites': Favorites,
};

export default routes;
