const toggleButton = document.querySelector(".header-right>a i");
console.log(toggleButton);

toggleButton.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").style.display = "block";

});

const toggleButtonClose = document.querySelector(".close i");
console.log(toggleButtonClose);

toggleButtonClose.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").style.display = "none";

});