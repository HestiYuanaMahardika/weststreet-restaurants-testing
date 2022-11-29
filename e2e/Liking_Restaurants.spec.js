Feature('Liking Restaurant');

Scenario('Menampilkan salah satu restaurant favorite dan membatalkannya', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.restaurant-link-button');
  await I.grabTextFrom(locate('.restaurant-link-button').first());
  I.click(locate('.restaurant-link-button').first());
  I.wait(2);
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
  I.click(locate('.restaurant-link-button').first());
  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorites');
  I.dontSeeElement('.restaurant-link-button');
});
