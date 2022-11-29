/* eslint-disable no-tabs */
/* eslint-disable no-use-before-define */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="content">
    <div class="bg-section">
    <h2 align="center"><i class="fa-solid fa-store"></i>&nbsp; ${restaurant.name} &nbsp;<i class="fa-solid fa-store"></i></h2>
  </div>
  <img class="lazyload restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4><i class="fa-solid fa-medal"></i>&nbsp; Rating</h4>
    <p> ⭐️ ${restaurant.rating}</p><br>
    <h4><i class="fa-solid fa-location-dot"></i>&nbsp; Address</h4>
    <p>${restaurant.address}, ${restaurant.city}</p><br>
    <h4><i class="fa-solid fa-magnifying-glass"></i>&nbsp; Categories</h4>
    <p>${categoriesRestaurant(restaurant)}</p><br>
  </div><br><br><br>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="content">
    <div class="bg-section">
    <h2 align="center"><i class="fa-solid fa-utensils"></i>&nbsp; Menu's &nbsp;<i class="fa-solid fa-utensils"></i></h2>
  </div>
  <div class="restaurant__menu">
    <div>
      <ul>
        <h3 align="center"><i class="fa-solid fa-bowl-rice"></i>&nbsp; Food's</h3><br>
        <ul>${foodsRestaurant(restaurant)}</ul>
      </ul>
      <ul>
        <h3 align="center"><i class="fa-sharp fa-solid fa-wine-glass"></i>&nbsp; Drink's</h3><br>
        <ul>${drinksRestaurant(restaurant)}</ul>
      </ul>
    </div>
  </div>
  <br>

  <div class="customer__resto">
    <div class="content">
      <div class="bg-section">
      <h2 align="center"><i class="fa-solid fa-users"></i>&nbsp; Customer Reviews &nbsp;<i class="fa-solid fa-users"></i></h2>
    </div>
    ${customerReviews(restaurant)}
  </div>
  <br>
  <br>

  <div class="write__review">
    <h3>Submit your review :</h3>
    <div id="formReviewContainer">
      <form>
        <label for="inputName"><i class="fa-solid fa-user"></i>&nbsp; Name</label>
        <input type="text" name="nama" id="inputName" placeholder="Your name ..." />
        <label for="inputReview"><i class="fa-regular fa-pen-to-square"></i>&nbsp; Review</label>
        <textarea name="review" id="inputReview" placeholder="Description ..."></textarea>
        <button type="submit" id="submitReview">Submit Review</button>
      </form>
    </div>
  </div>
`;

function categoriesRestaurant(restaurant) {
  return restaurant.categories.map((category) => category.name).join(', ');
}

function foodsRestaurant(restaurant) {
  return restaurant.menus.foods
    .map(
      (food) => `
			<li>${food.name}</li>
		`,
    )
    .join('');
}

function drinksRestaurant(restaurant) {
  return restaurant.menus.drinks
    .map(
      (drink) => `
			<li>${drink.name}</li>
		`,
    )
    .join('');
}

function customerReviews(restaurant) {
  return restaurant.customerReviews
    .map(
      (reviews) => `
			<div class="customer__restaurant">
				<div class="customer__review">
					<p class="customer__name"><i class="fa-solid fa-user"></i>&nbsp; ${reviews.name}</p>
					<p class="customer__date"><i class="fa-solid fa-calendar-days"></i>&nbsp; ${reviews.date}</p>
				</div>
				<div class="customer__body"><i class="fa-regular fa-pen-to-square"></i>&nbsp; ${reviews.review}</div>
			</div>
		`,
    )
    .join('');
}

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item" tabindex="0">
    <div class="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
           <figcaption>${restaurant.city}</figcaption>
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <center>
      <h3><a class="restaurant-link-button" href="${`/#/details/${restaurant.id}`}">${restaurant.name}</a></h3><br>
      </center>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
