function showMyTitle(h1) {
  let titleToAppend = "";
  let title = h1.catName;

  titleToAppend += `${title.toUpperCase()}`;

  document.getElementById("title").innerHTML = titleToAppend;
}

function showProductsList(products) {
  let htmlToAppend = "";

  for (let i = 0; i < products.length; i++) {
    htmlToAppend += `<section>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow-0 border rounded-3 margin">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="${products[i].image}"
                    class="" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6 col-xl-6">
                <h5>${products[i].title}</h5>
                <div class="d-flex flex-row">
                  <div class="text-danger mb-1 me-2">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  
                </div>
                
                <div class="mb-2 text-muted small description">
                 ${products[i].description}
                </div>
                
              </div>
              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div class="d-flex flex-row align-items-center mb-1">
                  <h4 class="mb-1 me-1">$ ${products[i].price}</h4>
                  <span class="text-danger"><s>$ ${(
                    products[i].price * 1.1
                  ).toFixed(2)}</s></span>
                </div>
                <h6 class="text-success"> + shipping</h6>
                <div class="d-flex flex-column mt-4">
                  <button onclick="setProdID(${
                    products[i].id
                  })" class="btn btn-primary btn-sm" type="button">Details</button>
                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>`;
  }
  document.getElementById("container").innerHTML = htmlToAppend;
}
function setProdID(id) {
  localStorage.setItem("ProdID", id);
  window.location = "product-info.html";
}

document.addEventListener("DOMContentLoaded", () => {
  getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(
    function (resultObj) {
      if (resultObj.status === "ok") {
        products = resultObj.data.products;
        showProductsList(products);
        h1 = resultObj.data;
        showMyTitle(h1);
      }
    }
  );
});
