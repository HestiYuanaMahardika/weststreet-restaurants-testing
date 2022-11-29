import UrlParser from '../../routes/url-parser';
import WeststreetSource from '../../data/weststreet-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import PostCustomer from '../../utils/post-customer';

const Details = {
  async render() {
    return `
    <div class="restaurant-detail">
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await WeststreetSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const submitReview = document.querySelector('#submitReview');
    const reviewName = document.querySelector('#inputName');
    const reviewContent = document.querySelector('#inputReview');

    submitReview.addEventListener('click', async (e) => {
      e.preventDefault();
      await PostCustomer(url, reviewName.value, reviewContent.value);

      reviewName.value = '';
      // reviewInput.value = '';
    });
  },
};

export default Details;
