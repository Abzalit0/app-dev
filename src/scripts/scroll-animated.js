$(window).scroll(function () {
  var wt = $(window).scrollTop();
  var wh = $(window).height();
  var et = $(".choose").offset().top;
  var eh = $(".choose").outerHeight();
  var dh = $(document).height();
  if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
    $(".animation").addClass("active");
  } else {
    $(".animation").removeClass("active");
  }
});
