import API_ENDPOINT from '../globals/api-endpoint';

class WeststreetSource {
  static async getRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
    // return responseJson.results;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
    // return response.restaurant;
    // return response.json();
  }

  static async reviewRestaurant() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = response.json();
    return responseJson;
  }

  static async postRestaurantCustomer(data) {
    const response = await fetch(API_ENDPOINT.POST_CUSTOMER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default WeststreetSource;
