/* eslint-disable no-unused-vars */
import WeststreetSource from '../data/weststreet-source';

const PostCustomer = async (url, name, review) => {
  console.log(url);
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.customer__resto');
  const reviewItemContainer = document.querySelector('.detail-review-item');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
<div class="customer__restaurant">
  <div class="customer__review">
    <p class="customer__name">${name} </p>
    <p class="customer__date">${date} </p>
  </div>
  <div class="customer__body">${review}</div>
</div>
`;

  const reviewResponse = await WeststreetSource.postRestaurantCustomer(dataInput);

  reviewContainer.innerHTML += newReview;
  reviewItemContainer.innerHTML += newReview;
};

export default PostCustomer;
