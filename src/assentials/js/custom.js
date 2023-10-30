var step = ["step1", "step2", "step3", "step4", "step5"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < step.length; i++) {
    divId = step[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
// jQuery(document).ready(function($){
//   var swiper_nav = new Swiper(".detail_swiper_nav", {
//     loop: false,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
//   });
//   var swiper2 = new Swiper(".detail_swiper", {
//     loop: false,
//     spaceBetween: 10,
//     thumbs: {
//       swiper: swiper_nav,
//     },
//   });
// });