var model = document.getElementById("Sign-up-model");
var signUpButton = document.getElementById("SignUp");
var closeBtn = document.getElementsByClassName("close")[0];

signUpButton.onclick = function () {
  model.style.display = "block";
};

closeBtn.onclick = function () {
  model.style.display = "none";
};

window.onclick = function (event) {
  if (event.target != model) {
    model.style.display = "none";
  }
};

var modal1 = document.getElementById("Sign-in-model");
var signInButton = document.getElementById("Signin");
var closeBtn1 = document.getElementsByClassName("close1")[0];

signInButton.onclick = function () {
  modal1.style.display = "block";
};

closeBtn1.onclick = function () {
  modal1.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

function signupRedirectButton() {
  modal1.style.display = "none";
  model.style.display = "block";
};

var modal2 = document.getElementById("createpost-model");
var createPostButton = document.getElementById("create");
var closeBtn2 = document.getElementsByClassName("close2")[0];

createPostButton.onclick = function () {
  modal2.style.display = "block";
};

closeBtn2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

