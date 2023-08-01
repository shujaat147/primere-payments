document.addEventListener("DOMContentLoaded", function () {
 const items = document.querySelectorAll('.carousel .carousel-item');

 items.forEach((el, index) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;
  for (let i = 1; i < minPerSlide; i++) {
   if (!next) {
    next = items[0];
   }
   const cloneChild = next.cloneNode(true);
   el.appendChild(cloneChild.children[0]);
   next = next.nextElementSibling;
  }

  // Add the 'middle-item' class to the center item
  if (index === Math.floor(items.length / 2)) {
   el.classList.add('middle-item');
  }
 });
});

$('#recipeCarousel').on('slid.bs.carousel', function (event) {
 const items = document.querySelectorAll('.carousel .carousel-item');
 const nextActiveSlide = $(event.relatedTarget).index();
 const $btns = $('.carousel-buttons');
 const $active = $btns.find("[data-bs-slide-to='" + nextActiveSlide + "']");
 $btns.find('.active').removeClass('active');
 $active.addClass('active');

 // Remove 'middle-item' class from all items
 items.forEach((el) => {
  el.classList.remove('middle-item');
 });

 // Add 'middle-item' class to the new center item
 items[nextActiveSlide].classList.add('middle-item');
});
