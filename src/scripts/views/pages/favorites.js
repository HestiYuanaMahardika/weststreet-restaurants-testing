import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="content">
        <div class="bg-section">
          <h2 align="center"><i class="fa-regular fa-heart"></i>&nbsp; Favorite Restaurant &nbsp;<i class="fa-regular fa-heart"></i></h2>
        </div>

        <div id="explore-restaurants" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#explore-restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = 'Tidak ada restoran yang difavoritkan oleh konsumen';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
