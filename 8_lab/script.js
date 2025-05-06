<script>
function initSlider(sliderId) {
  var sldr = $('#' + sliderId + ' .sldr'),
      slideWidth = $('#' + sliderId).outerWidth(),
      slideCount = sldr.find('img').length,
      prv_b = $('#' + sliderId + ' .prv_b'),
      nxt_b = $('#' + sliderId + ' .nxt_b'),
      sldrInterval = 3300,
      animateTime = 1000,
      course = 1,
      margin = -slideWidth;

  sldr.find('img:last').clone().prependTo(sldr);
  sldr.find('img').eq(1).clone().appendTo(sldr);
  sldr.css('margin-left', -slideWidth);

  function updateSlideWidth() {
    slideWidth = $('#' + sliderId).outerWidth();
    margin = -slideWidth;
    sldr.css('margin-left', margin);
  }

  $(window).resize(updateSlideWidth);

  function animate() {
    if (margin === -slideCount * slideWidth - slideWidth) {
      sldr.css({'marginLeft': -slideWidth});
      margin = -slideWidth * 2;
    } else if (margin === 0 && course === -1) {
      sldr.css({'marginLeft': -slideWidth * slideCount});
      margin = -slideWidth * slideCount + slideWidth;
    } else {
      margin = margin - slideWidth * course;
    }
    sldr.animate({'marginLeft': margin}, animateTime);
  }

  function sldrStop() { clearInterval(interval); }
  function sldrStart() { interval = setInterval(animate, sldrInterval); }

  prv_b.click(function() {
    if (sldr.is(':animated')) return false;
    let oldCourse = course;
    course = -1;
    animate();
    course = oldCourse;
  });

  nxt_b.click(function() {
    if (sldr.is(':animated')) return false;
    let oldCourse = course;
    course = 1;
    animate();
    course = oldCourse;
  });

  sldr.add(prv_b).add(nxt_b).hover(sldrStop, sldrStart);

  sldrStart();
  updateSlideWidth();
}

// Ініціалізація всіх трьох слайдерів
$(function(){
  initSlider('slider1');
  initSlider('slider2');
  initSlider('slider3');
});
</script>
