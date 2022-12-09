let review = [];

// Function that shows the main selected product
function showMyProduct(productInfo) {
  let productToAppend = "";

  productToAppend += `
  <section>
  <div class="container">
    <div class="row">
      <div class="col-md-5 mb-4 mb-md-0">
      <div data-image="">
            <img class="img-fluid w-70" src="${
              productInfo.image
            }" alt="product-image">
          </div>
          </div>
      <div class="col-lg-6 col-md-7 offset-lg-1">
        <h1 class="mb-4">${productInfo.title}</h1>
        <p><strong> </strong></p>
        <p><strong>Sizes: </strong>Small, Medium, Large</p>
        <p class="price py-4">$ ${productInfo.price}
           <s class="price discount">$ ${(productInfo.price * 1.1).toFixed(
             2
           )}</s>
        </p>
        <button class="snipcart-add-item btn btn-main mb-5">Add to Cart
        </button>
        <div class="content">
          <p>${productInfo.description}</p>
        </div>
      </div>
    </div>
  </div>
  </section>
`;

  document.getElementById("product").innerHTML = productToAppend;
}

// Function that shows the comments contained in the JSONs
function showMyComment(comment) {
  let commentToAppend = "";

  for (let i = 0; i < comment.length; i++) {
    commentToAppend += `
    <ul class="list-group mb-1">
      <li class="list-group-item">
        <p style="font-weight: 600">${
          comment[i].user
        } <span class="star" id="stars">${showMyScore(
      comment[i].score
    )}</>   <span class = "text-muted" id="date">-- ${
      comment[i].dateTime
    } --</span></p>
         <span class="italic">${comment[i].description}</span>
      </li>
    </ul>
    `;
  }
  document.getElementById("comment-container").innerHTML = commentToAppend;
}

// Function that converts the score into rating stars
function showMyScore(score) {
  let scoreToAppend = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      scoreToAppend += '<i class="fa-solid fa-star"></i>';
    } else {
      scoreToAppend += `<i class="fa-regular fa-star"></i>`;
    }
  }
  return scoreToAppend;
}

//Function that allows to make a new comment
function giveAReview(review) {
  let rate = document.getElementById("floatingTextarea2");
  review.push(rate.value);
  rate.value = "";
  showMyComment(review);
}

//Function that shows the new comment
function showMyReview(review) {
  let reviewToAppend = "";
  let customer = document.getElementById("floatingTextarea3").value;
  //la fecha

  let score = document.getElementById("score").value;
  reviewToAppend += `<ul class="list-group mb-1">
      <li class="list-group-item">
        <p style="font-weight: 600">${customer} <span class="star" id="stars">${showMyScore(
    score
  )}</>   <span class = "text-muted" id="">--  --</span></p>
         <span class="italic">${review}</span>
      </li>
    </ul>`;
  document.getElementById("new-comment").innerHTML = reviewToAppend;
}

document.addEventListener("DOMContentLoaded", () => {
  getJSONData(
    PRODUCT_INFO_URL + localStorage.getItem("ProdID") + EXT_TYPE
  ).then(function (resultObj) {
    if (resultObj.status === "ok") {
      productInfo = resultObj.data;
      showMyProduct(productInfo);
    }
  });
  getJSONData(
    PRODUCT_COMMENT_URL + localStorage.getItem("ProdID") + EXT_TYPE
  ).then(function (resultObj) {
    if (resultObj.status === "ok") {
      comment = resultObj.data;
      showMyComment(comment);
    }
  });

  document.getElementById("send").addEventListener("click", () => {
    giveAReview(review);
  });
});
