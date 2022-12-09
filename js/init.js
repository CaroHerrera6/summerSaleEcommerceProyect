const MYAPI = "https://fakestoreapi.com/products";
const PRODUCTS_URL =
  "https://caroherrera6.github.io/sumerSaleApi/cats_products/";
const PRODUCT_INFO_URL =
  "https://caroherrera6.github.io/sumerSaleApi/products/";
const PRODUCT_COMMENT_URL =
  "https://caroherrera6.github.io/sumerSaleApi/product_comments/";

const EXT_TYPE = ".json";

let getJSONData = function (url) {
  let result = {};

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = "ok";
      result.data = response;

      return result;
    })
    .catch(function (error) {
      result.status = "error";
      result.data = error;
      return result;
    });
};
