console.log('testing')
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
  
    toggleButton.addEventListener("click", function () {
      navMenu.classList.toggle("menu-open");
      navMenu.classList.toggle("vertical");
    });
  });
  
  var elem = document.querySelector(".m-p-g");
  document.addEventListener("DOMContentLoaded", function () {
    var gallery = new MaterialPhotoGallery(elem);
  });