function showProductsList(products) {
  let htmlToAppend = "";

  for (let i = 0; i < products.length; i++) {
    //     htmlToAppend += `<div class="container pt-2">

    //     <div class="row">
    //         <div class="col-lg-8 mx-auto">
    //             <!-- List group-->
    //             <ul class="list-group shadow">
    //                 <!-- list group item-->
    //                 <li class="list-group-item">
    //                     <!-- Custom content-->
    //                     <div class="media align-items-lg-center flex-column flex-lg-row p-3">
    //                         <div class="media-body order-2 order-lg-1">

    //                           <img src="${products[i].image}" alt="Generic placeholder image" width="100" class="py-4 ml-lg-5 order-1 order-lg-2">
    //                           <div class="font-weight-bold price">$ ${products[i].price}</div>

    //                           <h5 class="mt-0 font-weight-bold mb-2">${products[i].title}
    //                           </h5>

    //                             <p class="font-italic text-muted mb-0 small">${products[i].description}</p>
    //                             <div class="d-flex align-items-center justify-content-between mt-1">

    //                                 <ul class="list-inline small">
    //                                     <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
    //                                     <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
    //                                     <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
    //                                     <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
    //                                     <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
    //                                 </ul>
    //                             </div>
    //                         </div>
    //                     </div> <!-- End -->
    //                 </li> <!-- End -->
    //             </ul> <!-- End -->
    //         </div>
    //     </div>
    // </div>`;
    htmlToAppend += `<section>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow-0 border rounded-3">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="${products[i].image}"
                    class="w-50" />
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
                
                <div class="mb-2 text-muted small">
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
                  <button class="btn btn-primary btn-sm" type="button">Details</button>
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

document.addEventListener("DOMContentLoaded", () => {
  getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + EXT_TYPE).then(
    function (resultObj) {
      if (resultObj.status === "ok") {
        products = resultObj.data.products;
        showProductsList(products);
      }
    }
  );
});
