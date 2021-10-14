"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

AgentFlag = set_ui();
IEFlag = navigator.appVersion.indexOf("MSIE 7") > -1 || navigator.appVersion.indexOf("MSIE 8") > -1 ? true : false;
$(document).ready(function () {
  npos = $(window).scrollTop();
  SW = $(window).width();
  SH = $(window).height(); //header mouse event

  /*
  $('#header').find('.header_data').bind('mouseenter mouseleave',function(e){
  	if(npos >= 20 && SW > 768){
  		if($('#header').hasClass('deskFix')){
  			$('#header').removeClass('deskFix');
  		}else{
  			$('#header').addClass('deskFix');
  		}
  	}
  });
  */

  gnbCheck();

  if ($('.swiper-container').length > 0) {
    if (navigator.appVersion.indexOf("MSIE 7") > -1 || navigator.appVersion.indexOf("MSIE 8") > -1) {} else {
      var _ref;

      var swiper = new Swiper('.m_gnb', (_ref = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      }, _defineProperty(_ref, "paginationClickable", true), _defineProperty(_ref, "spaceBetween", 0), _defineProperty(_ref, "loop", true), _ref));
    }
  }

  logoEffect.init();
  $(document).on('touchstart click', function (e) {
    if ($(e.target).parents('div.av_pop').size() == 0) {
      videoPopClose();
    }
  });
}); //end ready

$(window).scroll(function () {
  npos = $(window).scrollTop();
  SW = $(window).width();
  SH = $(window).height();

  if (npos > 100) {
    $('.btn_top').stop(true).fadeIn(300);
  } else {
    $('.btn_top').stop(true).fadeOut(300);
  }

  gnbCheck();
}); //end scroll

$(window).resize(function () {
  npos = $(window).scrollTop();
  SW = $(window).width();
  SH = $(window).height();
  gnbCheck();

  if ($('#modalPopCon').html() == '') {} else {
    checkPopHeight();
  }
}); //end resize

var logoEffect = {
  target: null,
  scaleArr: null,
  posArr: null,
  firstSpeed: 1200,
  init: function init() {
    if (IEFlag) {
      logoEffect.target.find('.effectData').hide();
      logoEffect.target.find('.none').show();
    } else {
      logoEffect.target = $('#logoEffect');
      logoEffect.posArr = [31, 25, 21, 36];
      logoEffect.scaleArr = [20, 38, 29, 23]; //console.log('logo effect start');

      var _i = 0;
      logoEffect.target.find('.line').each(function () {
        var _delay = _i * 0.15 + 0.3; //var _delay = 0;


        var _pos = logoEffect.posArr[$(this).index()];

        if ($(this).index() == 0) {
          TweenMax.set($(this), {
            x: -150
          });
        } else if ($(this).index() == 1) {
          TweenMax.set($(this), {
            y: 150
          });
        } else if ($(this).index() == 2) {
          TweenMax.set($(this), {
            y: -150
          });
        } else if ($(this).index() == 3) {
          TweenMax.set($(this), {
            x: 150
          });
        } //				TweenMax.set($(this).find('.top'),{x:-5});
        //				TweenMax.set($(this).find('.bottom'),{y:5});


        TweenMax.to($(this), 0.9, {
          x: 0,
          y: 0,
          delay: 0,
          ease: Quad.easeOut,
          onComplete: function onComplete() {
            var _t = this.target;

            var _top = _t.find('.top');

            var _bottom = _t.find('.bottom');

            var _pos = logoEffect.scaleArr[_t.index()];

            var _w;

            var _h;

            var _delay = _t.index() * 0.15 + 0.8;

            var _delay02 = _t.index() * 0.15 + 1.8;

            if (_t.index() == 0) {
              _w = _pos;
              _h = 4;
            } else if (_t.index() == 1) {
              _w = 4;
              _h = _pos;
            } else if (_t.index() == 2) {
              _w = 4;
              _h = _pos;
            } else if (_t.index() == 3) {
              _w = _pos;
              _h = 4;
            }

            TweenMax.to(_t, 0.9, {
              width: _w,
              height: _h,
              ease: Quad.easeOut
            });
            TweenMax.to(_top, 0.9, {
              x: 0,
              alpha: 1,
              delay: _delay,
              ease: Quad.easeOut
            });
            TweenMax.to(_bottom, 0.9, {
              y: 0,
              alpha: 1,
              delay: _delay02,
              ease: Quad.easeOut
            });
          }
        });
        _i++;
      });
      logoEffect.target.find('.effectData').css({
        'visibility': 'visible'
      });
    }
  }
};

function gnbCheck() {
  if (npos >= 20 && SW > 768) {//$('#header').addClass('deskFix');
  } else {//$('#header').removeClass('deskFix');
    }

  if (SW < 768) {//$('#header').removeClass('deskFix');
  } else {//$('#header').removeClass('mobileFix');
    }
}

function gnbMobileCheck() {
  if ($('#header').hasClass('mobileFix')) {
    $('#header').removeClass('mobileFix');
    gnbMobileEffect.close();
    $("#gnbMobile").show();
  } else {
    $('#header').addClass('mobileFix');
    gnbMobileEffect.open();
    $("#gnbMobile").hide();
  }

  $('#header').find('.btn_m_share').removeClass('open');
  $('#header').removeClass('snsFix');
}

function snsMobileCheck() {
  if ($('#header').find('.btn_m_share').hasClass('open')) {
    $('#header').find('.btn_m_share').removeClass('open');
    $('#header').removeClass('snsFix');
  } else {
    $('#header').find('.btn_m_share').addClass('open');
    $('#header').addClass('snsFix');
  }

  $('#header').removeClass('mobileFix');
  gnbMobileEffect.close();
  $("#gnbMobile").show();
}

gnbMobileEffect = {
  speed: 100,
  timer: null,
  open: function open() {
    var len = $('#header').find('.gnb ul li').length;
    var _i = 0;
    gnbMobileEffect.timer = setInterval(function () {
      if (_i >= len - 1) {
        clearInterval(gnbMobileEffect.timer);
      }

      $('#header').find('.gnb ul li').eq(_i).addClass('effect');
      _i++;
    }, gnbMobileEffect.speed);
  },
  close: function close() {
    var _i = $('#header').find('.gnb ul li').length - 1;

    gnbMobileEffect.timer = setInterval(function () {
      if (_i == 0) {
        clearInterval(gnbMobileEffect.timer);
      }

      $('#header').find('.gnb ul li').eq(_i).removeClass('effect');
      _i--;
    }, gnbMobileEffect.speed);
  }
}; //parameter

function getParameter(key) {
  var url = location.href;
  var spoint = url.indexOf("?");
  var query = url.substring(spoint, url.length);
  var keys = new Array();
  var values = new Array();
  var nextStartPoint = 0;

  while (query.indexOf("&", nextStartPoint + 1) > -1) {
    var item = query.substring(nextStartPoint, query.indexOf("&", nextStartPoint + 1));
    var p = item.indexOf("=");
    keys[keys.length] = item.substring(1, p);
    values[values.length] = item.substring(p + 1, item.length);
    nextStartPoint = query.indexOf("&", nextStartPoint + 1);
  }

  item = query.substring(nextStartPoint, query.length);
  p = item.indexOf("=");
  keys[keys.length] = item.substring(1, p);
  values[values.length] = item.substring(p + 1, item.length);
  var value = "";

  for (var i = 0; i < keys.length; i++) {
    if (keys[i] == key) {
      value = values[i];
    }
  }

  return value;
}

; //end getParameter

function set_ui() {
  var UserAgent = navigator.userAgent;
  var UserFlag = true;

  if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
    //mobile!!
    UserFlag = false;
  }

  return UserFlag;
}

; //end set_ui
//pop Open

function popOpen(_url) {
  popDataRemove();
  popDataAdd(_url);
  $('html').addClass('fix');
  $('#modalPopCon').stop(true).fadeIn(300);
} //pop Close


function popClose() {
  popDataRemove();
  $('html').removeClass('fix');
  $('#modalPopCon').stop(true).fadeOut(300);
} //pop data remove


function popDataRemove() {
  $('#modalPopCon').html('');
} //pop data load


function popDataAdd(_url) {
  $.ajax({
    url: _url,
    type: "post",
    success: function success(result) {
      $('#modalPopCon').append("<p class='bg_close' onclick='popClose();'></p>");
      $('#modalPopCon').append(result); //checkPopHeight();		

      imgLoadCheck();
    },
    error: function error(result) {
      alert("Error");
    }
  });
}

function imgLoadCheck() {
  var imgs = [];
  $('#modalPopCon').find('img').each(function () {
    imgs.push($(this).attr('src'));
  });
  progress(imgs, function (percent) {}, function () {
    checkPopHeight();
  });
}

function checkPopHeight() {
  var _h = 0;

  var _th = $('#modalPopCon').find('.data_wrap > h3').innerHeight();

  $('#modalPopCon').find('.data_wrap > div').each(function () {
    _h = _h + $(this).innerHeight();
  });

  if (_h > SH - _th) {
    $('#modalPopCon').find('.data_wrap').css({
      'height': SH
    });
  } else {
    $('#modalPopCon').find('.data_wrap').css({
      'height': 'auto'
    });
  }
}

function progress(imageArr, callbackProgress, callbackComplete) {
  var count = 0;
  var length = imageArr.length;
  load(imageArr[count]);

  function load(url) {
    var image = new Image();

    function loadhandler() {
      var percent = ++count / length;
      callbackProgress(percent);

      if (count != length) {
        load(imageArr[count]);
      } else {
        callbackComplete();
      }
    }

    image.onload = loadhandler;
    image.onerror = loadhandler;
    image.src = url;
  }
} //store Open


function storeOpen(_url, _x, _y, _title) {
  $.ajax({
    url: _url,
    type: "post",
    success: function success(result) {
      $('#modalPopCon').append("<p class='bg_close' onclick='popClose();'></p>");
      $('#modalPopCon').append(result);
      $('html').addClass('fix');
      $('#modalPopCon').stop(true).fadeIn(300, function () {
        initialize(_x, _y, _title);
      });
    },
    error: function error(result) {
      alert("Error");
    }
  });
} //store Close


function storeClose() {
  $('#modalPopCon').html('');
  $('html').removeClass('fix');
  $('#modalPopCon').stop(true).fadeOut(300);
}
/*
$(document).on("click",function(e) { 
	if(!$('#container').hasClass('story')){
		if($('html').hasClass('fix')){
			if($(e.target).parents(".layer_pop .data_wrap").size() == 0) {
				popClose();
			}
		}	
	}
}); 
*/
// 쿠키 입력


function set_cookie(name, value, expirehours, domain) {
  var today = new Date();
  today.setTime(today.getTime() + 60 * 60 * 1000 * expirehours);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + today.toGMTString() + ";";

  if (domain) {
    document.cookie += "domain=" + domain + ";";
  }
} // SNS 연동


function send_sns(dest, text, url) {
  switch (dest) {
    case 1:
      // twitter
      href = "http://twitter.com/home?status=" + encodeURI(text) + " " + encodeURI(url);
      break;

    case 2:
      // facebook
      href = "http://www.facebook.com/sharer.php?u=" + encodeURI(text) + "&t=" + encodeURI(url);
      break;
  }

  window.open(href, 'sns', '');
  return false;
} // 이메일 선택 변경


function emailChg(v, id) {
  if (v != "") {
    $("#" + id).attr("readonly", true);
  } else {
    $("#" + id).attr("readonly", false);
  }

  $("#" + id).val(v);
} //공유하기 스크립트


function twitter_sharer(sharer_title, content_title, sharer_URL) {
  var sharer_str = encodeURI(sharer_title.replace(/#/gi, "") + content_title) + " : " + encodeURIComponent(sharer_URL);
  window.open("http://twitter.com/home?status=" + sharer_str, "twitter_sharer", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=640,height=360");
}

function facebook_sharer(sharer_title, content_title, sharer_URL) {
  var sharer_str = encodeURIComponent(sharer_title.replace(/#/gi, "") + content_title);
  var sharer_url = encodeURIComponent(sharer_URL);
  var win = window.open("http://www.facebook.com/sharer.php?u=" + sharer_url + "&t=" + sharer_str, "win", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=800,height=600");

  if (win == null || typeof win == "undefined" || win == null && win.outerWidth == 0 || win != null && win.outerHeight == 0 || win.test == "undefined") {
    alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.");

    if (win) {
      win.close();
    }

    return;
  } else if (win) {
    if (win.innerWidth === 0) {//alert("팝업 차단 기능이 설정되어있습니다\n\n차단 기능을 해제(팝업허용) 한 후 다시 이용해 주십시오.");
    }

    return;
  } else {
    return;
  }

  if (win) {
    // 팝업창이 떠있다면 close();
    win.close();
  }
}

function openPopVideo(_url, _id) {
  popDataRemove();
  $('html').addClass('fix');
  $('#videoPopCon').stop(true).fadeIn(300);
  $.ajax({
    url: _url,
    type: "post",
    success: function success(result) {
      $('#videoPopCon').find('> div > div').html(result);
      $('#m_p_player').find('iframe').attr('src', "http://www.youtube.com/embed/" + _id + "?wmode=opaque&rel=0&autoplay=1");
    },
    error: function error(result) {}
  });
  /*if(AgentFlag == true && IEFlag == false){		
  	if(window.player){
  		 player.pauseVideo();
  	}
  }*/
}
/*function playerStop(){
	if(AgentFlag == true && IEFlag == false){		
		if(window.player){
			 player.pauseVideo();
		}
	} 
}

function playerPlay(){
	if(AgentFlag == true && IEFlag == false){
		if(window.player){
			player.playVideo();
		}
	}	
}*/


function videoPopClose() {
  $('#videoPopCon').find('> div > div').html('');
  $('html').removeClass('fix');
  $('#videoPopCon').stop(true).fadeOut(300);
}