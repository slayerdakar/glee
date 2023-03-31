$(function () {

  

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

  $(".product-tabs__top-item").on("click", function (e) {
    e.preventDefault();
    $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
    $(this).addClass("product-tabs__top-item--active");

    $(".product-tabs__content-item").removeClass(
      "product-tabs__content-item--active"
    );
    $($(this).attr("href")).addClass("product-tabs__content-item--active");
  });


  $(".product-slide__thumb").slick({
    asNavFor: ".product-slide__big",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $(".product-slide__big").slick({
    asNavFor: ".product-slide__thumb",
    draggable: false,
    arrows: false,
    fade: true,
  });

  $(".products__btn").on("click", function () {
    $(".products__btn").removeClass("products__btn--active");
    $(this).addClass("products__btn--active");
  });

  $(".design__btn").on("click", function () {
    $(".design__btn").removeClass("design__btn--active");
    $(this).addClass("design__btn--active");
  });

  $(".filter-category__btn").on("click", function () {
    $(".filter-category__btn").removeClass("filter-category__btn--active");
    $(this).addClass("filter-category__btn--active");
  });

  $(".product-content__filter-btn").on("click", function () {
    $(".product-content__filter-btn").removeClass(
      "product-content__filter-btn--active"
    );
    $(this).addClass("product-content__filter-btn--active");
  });

  $(".button-list").on("click", function () {
    $(".products-item").addClass("products-item--list");
    $(".product-content__inner").addClass("product-content__inner--active");
    $(".pagination").addClass("pagination--list");
  });

  $(".button-grid").on("click", function () {
    $(".products-item").removeClass("products-item--list");
    $(".product-content__inner").removeClass("product-content__inner--active");
    $(".pagination").removeClass("pagination--list");
  });

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    // fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000
  });

  $('.product-related__slider-inner').slick({
    dots: false,
    infinite: false,
    arrows:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $(".select-style, .product-one__item-num").styler({});

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true,
    starSvg:
      '<svg width="12px" height="11px" viewBox="0 0 12 11" version="1.1">  <g><path " d="M 6.601562 0.386719 C 6.492188 0.148438 6.257812 0 6.003906 0 C 5.746094 0 5.515625 0.148438 5.402344 0.386719 L 4.0625 3.230469 L 1.070312 3.683594 C 0.820312 3.722656 0.613281 3.902344 0.535156 4.152344 C 0.457031 4.398438 0.519531 4.671875 0.699219 4.851562 L 2.871094 7.070312 L 2.359375 10.199219 C 2.316406 10.457031 2.421875 10.71875 2.628906 10.871094 C 2.832031 11.023438 3.105469 11.042969 3.332031 10.921875 L 6.003906 9.449219 L 8.675781 10.921875 C 8.902344 11.042969 9.175781 11.027344 9.382812 10.871094 C 9.585938 10.714844 9.691406 10.457031 9.648438 10.199219 L 9.136719 7.070312 L 11.304688 4.851562 C 11.484375 4.671875 11.550781 4.398438 11.472656 4.152344 C 11.390625 3.902344 11.183594 3.722656 10.933594 3.683594 L 7.941406 3.230469 Z M 6.601562 0.386719 "/></g></svg>',
  });

  $(".star-list").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true,
    starSvg:
      '<svg width="12px" height="11px" viewBox="0 0 12 11" version="1.1">  <g><path " d="M 6.601562 0.386719 C 6.492188 0.148438 6.257812 0 6.003906 0 C 5.746094 0 5.515625 0.148438 5.402344 0.386719 L 4.0625 3.230469 L 1.070312 3.683594 C 0.820312 3.722656 0.613281 3.902344 0.535156 4.152344 C 0.457031 4.398438 0.519531 4.671875 0.699219 4.851562 L 2.871094 7.070312 L 2.359375 10.199219 C 2.316406 10.457031 2.421875 10.71875 2.628906 10.871094 C 2.832031 11.023438 3.105469 11.042969 3.332031 10.921875 L 6.003906 9.449219 L 8.675781 10.921875 C 8.902344 11.042969 9.175781 11.027344 9.382812 10.871094 C 9.585938 10.714844 9.691406 10.457031 9.648438 10.199219 L 9.136719 7.070312 L 11.304688 4.851562 C 11.484375 4.671875 11.550781 4.398438 11.472656 4.152344 C 11.390625 3.902344 11.183594 3.722656 10.933594 3.683594 L 7.941406 3.230469 Z M 6.601562 0.386719 "/></g></svg>',
  });

  var mixer = mixitup(".product-content__inner,.design__inner,.blog-page__content");

  var mixproducts = document.querySelector('[data-ref="mix-products"]');
  var config = {
    controls: {
      scope: "local",
    },
  };
  var mixer1 = mixitup(mixproducts, config);

});
