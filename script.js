$('.info-card').click(function() {
	$(this).toggleClass('open');
  });
  
  $(function(){
	var book = $('#book');
	$('#view-cover').click(function(){
	  $(this).addClass('cur').siblings().removeClass('cur');
	  book.removeClass().addClass('view-cover');
	});
	$('#view-back').click(function(){
	  $(this).addClass('cur').siblings().removeClass('cur');
	  book.removeClass().addClass('view-back');
	});
	$('#open-book').click(function(){
	  if (book.attr('class') != 'open-book') {
		$(this).addClass('cur').siblings().removeClass('cur');
		book.removeClass().addClass('open-book');
	  } else {
		$(this).removeClass('cur');
		$('#view-cover').addClass('cur');
		book.removeClass().addClass('view-cover');
	  }
	});
	$('#view-rotate').click(function(){
	  $(this).addClass('cur').siblings().removeClass('cur');
	  book.removeClass().addClass('view-rotate');
	});
  });
  
// -------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
  var sliderSelector = ".swiper-container";
  var options = {
    init: false,
    loop: true,
    speed: 800,
    slidesPerView: 2,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    grabCursor: true,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    breakpoints: {
      1023: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    },
    on: {
      imagesReady: function () {
        this.el.classList.remove("loading");
      },
      slideChange: function () {
        videoStop();
      }
    }
  };

  var mySwiper = new Swiper(sliderSelector, options);
  mySwiper.init();

  $(document).on("click", ".js-videoPoster", function (ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest(".js-videoWrapper");
    videoPlay($wrapper);
  });

  function videoPlay($wrapper) {
    var $iframe = $wrapper.find(".js-videoIframe");
    var src = $iframe.data("src");
    $wrapper.addClass("videoWrapperActive");
    $iframe.attr("src", src);
  }

  function videoStop() {
    var $wrapper = $(".js-videoWrapper");
    var $iframe = $wrapper.find(".js-videoIframe");
    $wrapper.removeClass("videoWrapperActive");
    $iframe.attr("src", "");
  }
});

// -------------------------------------------------------------------------------------------------------------------------

