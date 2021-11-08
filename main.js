const toggleButton = document.querySelector(".header-right>a i");
console.log(toggleButton);

// ********* prima soluzione *******
// toggleButton.addEventListener("click", function(){
//     document.querySelector(".hamburger-menu").style.display = "block";

// });


// *********** seconda soluzione *********
// toggleButton.addEventListener("click", function(){
//     document.querySelector(".hamburger-menu").className = "hamburger-menu active";
// });

// *********** terza soluzione ********
toggleButton.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.add("active")
});

const toggleButtonClose = document.querySelector(".close i");
console.log(toggleButtonClose);

// ************ prima soluzione *********
// toggleButtonClose.addEventListener("click", function(){
//     document.querySelector(".hamburger-menu").style.display = "none";

// });

// *********** seconda soluzione **********
// toggleButtonClose.addEventListener("click", function(){
//     document.querySelector(".hamburger-menu").className = "hamburger-menu";

// });

// *********** terza soluzione *********
toggleButtonClose.addEventListener("click", function(){
    document.querySelector(".hamburger-menu").classList.remove("active")
});