var userName = prompt("Please enter your name:");
if (userName) {
document.getElementById("siapa").textContent = userName;
}

var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function validateForm() {
  var nama = document.getElementById("nama").value;
  var birth = document.getElementById("birth").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  var sent = document.getElementById("sent").value;

  if (nama === "" || birth === "" || (!male && !female) || sent === "") {
    alert("Mohon lengkapi semua input!");
    return false;
  }

  return true;
}

function resetForm() {
  document.getElementById("form").reset();
}

document.getElementById("form").addEventListener("submit", function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }else{
    resetForm();
  }
});
