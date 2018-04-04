import { expect } from 'chai';
import { describe, it } from 'mocha';
import validateImageUrl from 'frontend-voting-app/validators/image-url';

const validURLs = [
  'https://coolurl.jpeg',
  'https://i.pinimg.com/originals/a2/8c/7e/a28c7e05f1028fc09d44e7cc6a213f79.jpg',
  'http://big5kayakchallenge.com/wp-content/uploads/2018/01/cool-ricky-quotes-from-trailer-park-boys-trailer-park-boys-ricky-quotes-quotesgram-ricky-quotes-from-trailer-park-boys.png',
]

const invalidURLs = [
  'somestupidtext',
  'https://somestupidgif.gif',
  'https://somestupidwebsite.com'
]

describe('Image URL Validator', function() {
  it("returns true for valid image URL's ", () => {
    validURLs.forEach(validURL => {
      let validator = validateImageUrl();
      expect(validator('_', validURL)).to.equal(true); 
    });
  })

  it("returns message for invalid image URL's", () => {
    invalidURLs.forEach(invalidURL => {
      let validator = validateImageUrl();
      expect(validator('_', invalidURL)).to.equal("Please enter valid image URL");
    });
  });

  it("returns message for blank text", () => {
    let validator = validateImageUrl();
    expect(validator('_', "")).to.equal("Please enter valid image URL");
  });
});
