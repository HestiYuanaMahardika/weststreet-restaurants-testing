/* eslint-disable no-tabs */
import WeststreetSource from '../../data/weststreet-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <div class="bg-section">
          <h2 align="center"><i class="fa-solid fa-utensils"></i></i>&nbsp; All Restaurants &nbsp;<i class="fa-solid fa-utensils"></i></h2>
        </div>
        <div id="restaurants" class="restaurants"></div>
        <br>

        <div class="content">
          <div class="bg-section">
          <h2 align="center"><i class="fa-solid fa-users"></i>&nbsp; Provide &nbsp;<i class="fa-solid fa-users"></i></h2>
        </div>

        <section id="provide">
        <div class="provide-center">
          <article class="provide">
              <div class="provide-icon"><i class="fas fa-mug-hot"></i></div>
              <div class="provide-text">
                  <h2 class="provide-title">Drinks</h2>
                  <p class="provide-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!</p>
              </div>
          </article>
         
          <article class="provide">
              <div class="provide-icon"><i class="fas fa-utensils"></i></div>
              <div class="provide-text">
                  <h2 class="provide-title">Healthy Food</h2>
                  <p class="provide-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!</p>
              </div>
          </article>
         
          <article class="provide">
              <div class="provide-icon"><i class="fas fa-mortar-pestle"></i></div>
              <div class="provide-text">
                  <h2 class="provide-title">Organic Food</h2>
                  <p class="provide-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!</p>
              </div>
          </article>
          
          <article class="provide">
              <div class="provide-icon"><i class="fas fa-drumstick-bite"></i></div>
              <div class="provide-text">
                  <h2 class="provide-title">White Meat</h2>
                  <p class="provide-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!</p>
              </div>
          </article>
          
          <article class="provide">
              <div class="provide-icon"><i class="fas fa-fish"></i></div>
              <div class="provide-text">
                  <h2 class="provide-title">Sea Food</h2>
                  <p class="provide-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!</p>
              </div>
          </article>
         
          <article class="provide">
              <div class="provide-icon"><i class="fas fa-pepper-hot "></i></div>
              <div class="provide-text">
                  <h2 class="provide-title">Hot & Spicy</h2>
                  <p class="provide-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, temporibus!</p>
              </div>
          </article>
      </div>   
     </section>

      <section class="bg-menu bg-section" id="menu">
        <div class="container-fluid">
          <h2 align="center"><i class="fa-regular fa-heart"></i>&nbsp; Favorite Menu &nbsp;<i class="fa-regular fa-heart"></i></h2>
          <div class="row slideanim">
            <hr class="hr-menu"></hr>
              <div class="row">
                <div class="col-md-7 col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h4 class="list-group-item-heading"><i class="fa-solid fa-utensils"></i>&nbsp; Rendang<span class="badge pull-right">⭐️ 4.5</span></h4>
                      <p class="list-group-item-text">Daging sapi, santan kelapa, cabai, dan bumbu</p>
                    </li>
                    <li class="list-group-item">
                      <h4 class="list-group-item-heading"><i class="fa-solid fa-utensils"></i>&nbsp; Sate<span class="badge pull-right">⭐️ 4.5</span></h4>
                      <p class="list-group-item-text">Daging, kacang tanah, cabai, santan, dan kecap</p>
                    </li>
                    <li class="list-group-item">
                      <h4 class="list-group-item-heading"><i class="fa-solid fa-utensils"></i>&nbsp; Rawon<span class="badge pull-right">⭐️ 4.4</span></h4>
                      <p class="list-group-item-text">Daging sapi, cabai, bawang, taoge, dan telur</p>
                    </li>
                    <li class="list-group-item">
                      <h4 class="list-group-item-heading"><i class="fa-solid fa-utensils"></i>&nbsp; Bebek Betutu<span class="badge pull-right">⭐️ 4.4</span></h4>
                      <p class="list-group-item-text">Bebek, santan, bawang, ketumbar, merica, kemiri, cabai, serai, dan kemiri</p>
                    </li>
                    <li class="list-group-item">
                      <h4 class="list-group-item-heading"><i class="fa-solid fa-utensils"></i>&nbsp; Ayam Rica-Rica<span class="badge pull-right">⭐️ 4.4</span></h4>
                      <p class="list-group-item-text">Ayam, bawang merah, bawang putih, jahe, cabe merah dan cabe rawit</p>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </section>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await WeststreetSource.getRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
