document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("electronics").addEventListener("click", () => {
    localStorage.setItem("catID", 13);
    window.location = "products.html";
  });
  document.getElementById("jewels").addEventListener("click", () => {
    localStorage.setItem("catID", 12);
    window.location = "products.html";
  });
  document.getElementById("optionChosen").addEventListener("click", () => {
    if ((document.getElementById("her").checked = true)) {
      localStorage.setItem("catID", 14);
      window.location = "products.html";
    } else if ((document.getElementById("him").checked = true)) {
      localStorage.setItem("catID", 11);
      window.location = "products.html";
    }
  });
});
