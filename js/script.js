var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close"); 

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-show");
});
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
});
   
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
});

var slider  = document.querySelector(".slider");
var sliderItem1 = slider.querySelector(".slider-item:nth-child(1)");
var sliderItem2 = slider.querySelector(".slider-item:nth-child(2)");
var sliderItem3 = slider.querySelector(".slider-item:nth-child(3)");

var sliderControls  = document.querySelector(".slider-controls");
var controlsItem1 = sliderControls.querySelector("i:nth-child(1)");
var controlsItem2 = sliderControls.querySelector("i:nth-child(2)");
var controlsItem3 = sliderControls.querySelector("i:nth-child(3)");
controlsItem1.addEventListener( "click" , function(){
	sliderItem1.classList.add("current");
	controlsItem1.classList.add("active");
	sliderItem2.classList.remove("current");
	controlsItem2.classList.remove("active");
	sliderItem3.classList.remove("current");
	controlsItem3.classList.remove("active");
});

controlsItem2.addEventListener( "click" , function(){
	sliderItem1.classList.remove("current");
	controlsItem1.classList.remove("active");
	sliderItem2.classList.add("current");
	controlsItem2.classList.add("active");
	sliderItem3.classList.remove("current");
	controlsItem3.classList.remove("active");
});

controlsItem3.addEventListener( "click" , function(){
	sliderItem1.classList.remove("current");
	controlsItem1.classList.remove("active");
	sliderItem2.classList.remove("current");
	controlsItem2.classList.remove("active");
	sliderItem3.classList.add("current");
	controlsItem3.classList.add("active");
});