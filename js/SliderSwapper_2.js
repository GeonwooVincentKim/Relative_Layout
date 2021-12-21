// //slide-wrap
// var slideWrapper = document.querySelector('#slider-wrap');
// //current slideIndexition
// var slideIndex = 0;
// //items
// var slides = document.querySelectorAll('#slider-wrap ul li');
// //number of slides
// var totalSlides = slides.length;
// //get the slide width
// var sliderWidth = slideWrapper.clientWidth;
// //set width of items
// slides.forEach(function (element) {
//     element.style.width = sliderWidth + 'px';
// })
// //set width to be 'x' times the number of slides
// var slider = document.querySelector('#slider-wrap ul#slider');
// slider.style.width = sliderWidth * totalSlides + 'px';

// // next, prev
// var nextBtn = document.getElementById('next');
// var prevBtn = document.getElementById('previous');
// nextBtn.addEventListener('click', function () {
//     plusSlides(1);
// });
// prevBtn.addEventListener('click', function () {
//     plusSlides(-1);
// });

// // hover
// slideWrapper.addEventListener('mouseover', function () {
//     this.classList.add('active');
//     clearInterval(autoSlider);
// });
// slideWrapper.addEventListener('mouseleave', function () {
//     this.classList.remove('active');
//     autoSlider = setInterval(function () {
//         plusSlides(1);
//     }, 3000);
// });


// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlides(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     slideIndex = n;
//     if (slideIndex == -1) {
//         slideIndex = totalSlides - 1;
//     } else if (slideIndex === totalSlides) {
//         slideIndex = 0;
//     }

//     slider.style.left = -(sliderWidth * slideIndex) + 'px';
//     pagination();
// }

// //pagination
// slides.forEach(function () {
//     var li = document.createElement('li');
//     document.querySelector('#slider-pagination-wrap ul').appendChild(li);
// })

// function pagination() {
//     var dots = document.querySelectorAll('#slider-pagination-wrap ul li');
//     dots.forEach(function (element) {
//         element.classList.remove('active');
//     });
//     dots[slideIndex].classList.add('active');
// }

// pagination();
// var autoSlider = setInterval(function () {
//     plusSlides(1);
// }, 3000);
//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
  
  
  /*****************
   BUILD THE SLIDER
  *****************/
  //set width to be 'x' times the number of slides
  $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
  
    //next slide  
  $('#next').click(function(){
    slideRight();
  });
  
  //previous slide
  $('#previous').click(function(){
    slideLeft();
  });
  
  
  
  /*************************
   //*> OPTIONAL SETTINGS
  ************************/
  //automatic slider
  var autoSlider = setInterval(slideRight, 3000);
  
  //for each slide 
  $.each($('#slider-wrap ul li'), function() { 

     //create a pagination
     var li = document.createElement('li');
     $('#pagination-wrap ul').append(li);    
  });
  
  //counter
  countSlides();
  
  //pagination
  pagination();
  
  //hide/show controls/btns when hover
  //pause automatic slide when hover
  $('#slider-wrap').hover(
    function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
    function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
  );
  
  

});//DOCUMENT READY
  


/***********
 SLIDE LEFT
************/
function slideLeft(){
  pos--;
  if(pos==-1){ pos = totalSlides-1; }
  $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));  
  
  //*> optional
  countSlides();
  pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
  pos++;
  if(pos==totalSlides){ pos = 0; }
  $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
  
  //*> optional 
  countSlides();
  pagination();
}



  
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
  $('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
  $('#pagination-wrap ul li').removeClass('active');
  $('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
    
  