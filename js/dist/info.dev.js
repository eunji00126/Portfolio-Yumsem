"use strict";

$(document).ready(function () {
  //rotate 이미지 rotation 기능
  var agr = 0;

  function loopRotation() {
    var _t = $('.rotate');

    TweenMax.to(_t, 1.2, {
      rotation: agr,
      ease: Quad.easeOut,
      onComplete: function onComplete() {
        setTimeout(loopRotation, 2000);
      }
    });
    agr += 30;
  }

  loopRotation(); //info_sub_txt1 이미지 나타내기

  $('.info_sub_txt1').each(function (i) {
    var zz = $(this);
    setTimeout(function () {
      zz.animate({
        'opacity': '1',
        'padding-top': '0px'
      }, i * 1000);
    });
  }); //scroll시 나타나는 애니메이션

  $(window).scroll(function (index) {
    //info 영역 나타내기
    $('.info_image3').delay(index * 1000).animate({
      'opacity': '1'
    }, 1000);
    $('.info_image4').delay(index * 8000).animate({
      'opacity': '1'
    }, 4000); //alpha 이미지 parallax 애니메이션

    var scroll = $(this).scrollTop();
    var values1 = -scroll / 1;
    var values2 = -scroll / 3;
    $('.alpha_scroll-1').css({
      'transform': 'translate3d(0,' + values1 + 'px,0)'
    });
    $('.alpha_scroll-2').css({
      'transform': 'translate3d(0,' + values2 + 'px,0)'
    });
  });

  window.onload = function () {
    // Scroll Animation (sa, 스크롤 애니메이션)
    var saDefaultMargin = 300;
    var saTriggerMargin = 0;
    var saTriggerHeight = 0;
    var saElementList = document.querySelectorAll('.sa');

    var saFunc = function saFunc() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var element = _step.value;

          if (!element.classList.contains('show')) {
            if (element.dataset.saMargin) {
              saTriggerMargin = parseInt(element.dataset.saMargin);
            } else {
              saTriggerMargin = saDefaultMargin;
            }

            if (element.dataset.saTrigger) {
              saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
            } else {
              saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
            }

            if (window.innerHeight > saTriggerHeight) {
              var delay = element.dataset.saDelay ? element.dataset.saDelay : 0;
              setTimeout(function () {
                element.classList.add('show');
              }, delay);
            }
          }
        };

        for (var _iterator = saElementList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    window.addEventListener('load', saFunc);
    window.addEventListener('scroll', saFunc);
  };

  var gallery = $('#isotope_list');
  gallery.isotope({
    itemSelector: '.gallery_obj',
    masonry: {
      columnWidth: 150
    }
  });

  function $isotope_filter(selector) {
    return gallery.isotope({
      filter: selector
    });
  }

  var tab_all = $('.tab_all');
  var item_2 = $('.item-2');
  var item_3 = $('.item-3');
  var item_4 = $('.item-4');
  var item_5 = $('.item-5');
  var item_6 = $('.item-6');
  tab_all.on('click', function () {
    $isotope_filter('.gallery_obj');
  });
  item_2.on('click', function () {
    $isotope_filter('.item-2');
  });
  item_3.on('click', function () {
    $isotope_filter('.item-3');
  });
  item_4.on('click', function () {
    $isotope_filter('.item-4');
  });
  item_5.on('click', function () {
    $isotope_filter('.item-5');
  });
  item_6.on('click', function () {
    $isotope_filter('.item-6');
  });
});