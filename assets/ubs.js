$(document).ready(function() {
  $('.accordion').find('.first-one').attr("aria-expanded","false");
  $('.accordion').find('.first-one-a').attr("aria-hidden","true");
  $('.product-block--title,.product-block--price').wrapAll('<div class="main-title_price"></div>');
}); 