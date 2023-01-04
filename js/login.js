let userName = document.getElementById("exampleInputName1");
let userEmail = document.getElementById("exampleInputEmail1");
let userPass = document.getElementById("exampleInputPassword1");
let loginForm = document.getElementById("loginForm");

document.getElementById("submit").addEventListener("click", () => {
  userName.value === "" || userEmail.value === "" || userPass.value === ""
    ? loginForm.classList.add("was-validated")
    : (localStorage.setItem("name", userName.value),
      localStorage.setItem("email", userEmail.value),
      (window.location = "index.html"));
});
