$(document).ready(function() {

//   $('#selectize').selectize({
//     create: true,
//     sortField: {
//         field: 'text',
//         direction: 'asc'
//     },
//     dropdownParent: 'body'
// });

  $('.js-example-basic-single').select2({
    placeholder: $(this).attr("data-placeholder")
  });

  // $('js-name').select2({
  //   placeholder: 'Ash',
  //   allowClear : true 
  // })


  var swiper = new Swiper('#company_slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    scrollbar: {
      el: '.company_scrollbar',
      hide: true,
    },
    navigation:{
      disabledClass: 'arrow-off',
      nextEl: '.next-slide',
      prevEl: '.prev-slide'
    }
  });


  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 20) {
        $(".header").addClass("header_active");
    } else {
        $(".header").removeClass("header_active");
    }
});
});