let review = [];
let rate = document.getElementById("floatingTextarea2");

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
    )}</>   <span class = "text-muted date">-- ${
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
  review.push(rate.value);
  rate.value = "";
  showMyComment(review);
}

//Function that shows the new comment
function showMyReview(review) {
  let reviewToAppend = "";
  let customer = document.getElementById("floatingTextarea3").value;
  let today = showDate();
  let score = document.getElementById("score").value;
  reviewToAppend += `<ul class="list-group mb-1">
      <li class="list-group-item">
        <p style="font-weight: 600">${customer} <span class="star" id="stars">${showMyScore(
    score
  )}</>   <span class = "text-muted date">--${today}  --</span></p>
         <span class="italic">${rate.value}</span>
      </li>
    </ul>`;
  document.getElementById("new-comment").innerHTML = reviewToAppend;
}

//Function that shows the time and date of the comment
function showDate() {
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds
  );
}

//Function that shows the related products in a carrousel
function showRelated(similar) {
  let relatedToAppend = "";

  for (let i = 0; i < similar.length; i++) {
    relatedToAppend += `
    <div onclick="setInfoID(${similar[i].id})" class="cards md-mx-auto">
     <div class="card">
      <img src="${similar[i].image}" class="rounded">
    </div>
    <p class="mx-auto related-text">${similar[i].title}</p>
  
    </div>`;
  }
  document.getElementById("related").innerHTML = relatedToAppend;
}

document.addEventListener("DOMContentLoaded", () => {
  getJSONData(
    PRODUCT_INFO_URL + localStorage.getItem("ProdID") + EXT_TYPE
  ).then(function (resultObj) {
    if (resultObj.status === "ok") {
      productInfo = resultObj.data;
      similar = resultObj.data.related;
      showMyProduct(productInfo);
      giveAReview(review);
      showRelated(similar);
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
    showMyReview(review);
    document.getElementById("send").disabled = true;
    // if (review != "") {
    //   swal("Oops", "You can only review this product once", "Error");
    // }
  });
});
