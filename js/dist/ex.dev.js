"use strict";

// window.onload = function () { 
//     startLoadFile(); 
//   }; 
//   function startLoadFile(){ 
//     $.ajax({
//        url: '../js/images_list.json',
//        type: 'GET',
//        dataType : 'json', 
//        success : function (data) 
//        { createImages(data) 
//       } 
//     }); 
//         } 
//   // JSON 포멧 데이터 처리 
//   function createImages(objImageInfo) {
//    var images = objImageInfo.images; 
//     var strDOM = ""; 
//     for (var i = 0; i < images.length; i++) { 
//     // N번째 이미지 정보를 구하기 
//     var image = images[i];
//     // N번째 이미지 패널을 생성 
//     strDOM += '<div class="image_panel">'; 
//     strDOM += ' '<img src="' + image.url + '">';
//     strDOM += ' '<p class="title">' + image.title + ''</p>';
//     strDOM += ''</div>';
//    } 
//     // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
//      var $imageContainer = $("#image_container"); 
//      $imageContainer.append(strDOM); 
//     }
(function () {
  var slideList = document.querySelector('.slide_list'); // Slide parent dom

  var slideContents = document.querySelectorAll('.slide_content'); // each slide dom

  var slideBtnNext = document.querySelector('.slide_btn_next'); // next button

  var slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button

  var pagination = document.querySelector('.slide_pagination');
  var slideLen = slideContents.length; // slide length

  var slideWidth = 400; // slide width

  var slideSpeed = 300; // slide speed

  var startNum = 0; // initial slide index (0 ~ 4)

  slideList.style.width = slideWidth * (slideLen + 2) + "px"; // Copy first and last slide

  var firstChild = slideList.firstElementChild;
  var lastChild = slideList.lastElementChild;
  var clonedFirst = firstChild.cloneNode(true);
  var clonedLast = lastChild.cloneNode(true); // Add copied Slides

  slideList.appendChild(clonedFirst);
  slideList.insertBefore(clonedLast, slideList.firstElementChild); // Add pagination dynamically

  var pageChild = '';

  for (var i = 0; i < slideLen; i++) {
    pageChild += '<li class="dot';
    pageChild += i === startNum ? ' dot_active' : '';
    pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
  }

  pagination.innerHTML = pageChild;
  var pageDots = document.querySelectorAll('.dot'); // each dot from pagination

  slideList.style.transform = "translate3d(-" + slideWidth * (startNum + 1) + "px, 0px, 0px)";
  var curIndex = startNum; // current slide index (except copied slide)

  var curSlide = slideContents[curIndex]; // current slide dom

  curSlide.classList.add('slide_active');
  /** Next Button Event */

  slideBtnNext.addEventListener('click', function () {
    if (curIndex <= slideLen - 1) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(-" + slideWidth * (curIndex + 2) + "px, 0px, 0px)";
    }

    if (curIndex === slideLen - 1) {
      setTimeout(function () {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = -1;
    }

    curSlide.classList.remove('slide_active');
    pageDots[curIndex === -1 ? slideLen - 1 : curIndex].classList.remove('dot_active');
    curSlide = slideContents[++curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
  });
  /** Prev Button Event */

  slideBtnPrev.addEventListener('click', function () {
    if (curIndex >= 0) {
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(-" + slideWidth * curIndex + "px, 0px, 0px)";
    }

    if (curIndex === 0) {
      setTimeout(function () {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d(-" + slideWidth * slideLen + "px, 0px, 0px)";
      }, slideSpeed);
      curIndex = slideLen;
    }

    curSlide.classList.remove('slide_active');
    pageDots[curIndex === slideLen ? 0 : curIndex].classList.remove('dot_active');
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
  });
  /** Pagination Button Event */

  var curDot;
  Array.prototype.forEach.call(pageDots, function (dot, i) {
    dot.addEventListener('click', function (e) {
      e.preventDefault();
      curDot = document.querySelector('.dot_active');
      curDot.classList.remove('dot_active');
      curDot = this;
      this.classList.add('dot_active');
      curSlide.classList.remove('slide_active');
      curIndex = Number(this.getAttribute('data-index'));
      curSlide = slideContents[curIndex];
      curSlide.classList.add('slide_active');
      slideList.style.transition = slideSpeed + "ms";
      slideList.style.transform = "translate3d(-" + slideWidth * (curIndex + 1) + "px, 0px, 0px)";
    });
  });
})();