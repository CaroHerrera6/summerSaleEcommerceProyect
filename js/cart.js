function myPurchase() {
  let myCart = "";

  for (let i = 0; i < cartContent.length; i++) {
    myCart += `<div class="row mb-4 d-flex justify-content-between align-items-center mx-4 my-2 py-4 border shadow">
    <div class="col-md-2 col-lg-2 col-xl-2"><img
                        src="${cartContent[i].images}"
                        class="img-fluid rounded-3 book-img">
                    </div>
                    
                    <div class="col-md-3 col-lg-3 col-xl-3">
                     <h5 class="text-black mb-2"> ${cartContent[i].name}</h5>
                      
                      $ <span class="text-black mb-0" name="precio">${cartContent[i].price}</span>
                    </div>
                    
                   <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">$ <span class="col" name="subtotal" id="sub${i}"></span>      
                   
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <input name="cantidad" type="number" min="1"value="1" onchange="calcAmount()" id="cant${i}" style="width:2em"/>
                    </div>         
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-muted"><i class="fas fa-times" name="delete"></i></a>
                    </div>
                  </div>`;
  }
  document.getElementById("shoppingContent").innerHTML = myCart;
}

document.addEventListener("DOMContentLoaded", () => {
  cartContent = JSON.parse(localStorage.getItem("shoppingList"));
  myPurchase();
});
