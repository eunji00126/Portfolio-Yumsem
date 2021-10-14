"use strict";

// window.onload=function(){
// var menuA = {
//     "menu_wrapA1":["","얌샘김밥","소세지김밥","치즈김밥","불어묵김밥","참치샐러드김밥","진미채오징어김밥"],
//     "menu_wrapA2":["","날치알톡톡김밥","돈까스김밥","메가김밥","원조김밥","날치알크랩김밥"],
//     "menu_wrapB1":["","한입에 계란"],
//     "menu_wrapC1":["","콩나물국밥","스팸부대찌개","생등심돈까스","치즈돈까스","함박스테이크","오므라이스"],
//     "menu_wrapC2":["","김치찌개와 비빔밥","순두부찌개와 비빔밥","차돌된장찌개와 비빔밥","돈까스김치찌개","참치알밥","커리오므라이스"],
//     "menu_wrapC3":["","돈까스김치오므라이스","스팸김치볶음밥","게살듬뿍볶음밥","스팸계란덮밥","장조림버터비빔밥","제육덮밥"],
//     "menu_wrapC4":["","낙지알밥","바싹불고기덮밥","돈까스카레덮밥","버섯육개장","대만식불고기덮밥","해물순두부짬뽕"],
//     "menu_wrapD1":["","모다기","라돈모다기","비빔모다기","제육쌈모다기","얌샘라면","치즈라면"],
//     "menu_wrapD2":["","떡볶이","라볶이","유부우동","잔치국수","비빔쫄면","물쫄면"],
//     "menu_wrapD3":["","초계쫄면","물냉면(계절메뉴)","비빔냉면(계절메뉴)","콩국수(계절메뉴)","냉모밀(계절메뉴)","떡만둣국(계절메뉴)"],
//     "menu_wrapD4":["","어묵탕(사이드메뉴)","미니탕수육(사이드메뉴)","모둠튀김(사이드메뉴)","얌샘감자(사이드메뉴)","대만식땅콩비빔면","대만식새우완탕면"]
// }
//     for(i=1; i<7; i++){
//       this["menu_wrapA1"+i] = document.getElementById("ju_menuA"+i);
//       this["menu_wrapA1"+i].innerHTML = menuA.menu_wrapA1[i];
//     }
//     for(i=1; i<6; i++){
//       this["menu_wrapA2"+i] = document.getElementById("ju_menuB"+i);
//       this["menu_wrapA2"+i].innerHTML = menuA.menu_wrapA2[i];
//     }
//     for(i=1; i<2; i++){
//       this["menu_wrapB1"+i] = document.getElementById("ju_menuC"+i);
//       this["menu_wrapB1"+i].innerHTML = menuA.menu_wrapB1[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapC1"+i] = document.getElementById("ju_menuD"+i);
//       this["menu_wrapC1"+i].innerHTML = menuA.menu_wrapC1[i]; 
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapC2"+i]=document.getElementById("ju_menuE"+i);
//       this["menu_wrapC2"+i].innerHTML = menuA.menu_wrapC2[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapC3"+i]=document.getElementById("ju_menuF"+i);
//       this["menu_wrapC3"+i].innerHTML = menuA.menu_wrapC3[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapC4"+i]=document.getElementById("ju_menuG"+i);
//       this["menu_wrapC4"+i].innerHTML = menuA.menu_wrapC4[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapD1"+i]=document.getElementById("ju_menuH"+i);
//       this["menu_wrapD1"+i].innerHTML = menuA.menu_wrapD1[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapD2"+i]=document.getElementById("ju_menuI"+i);
//       this["menu_wrapD2"+i].innerHTML = menuA.menu_wrapD2[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapD3"+i]=document.getElementById("ju_menuJ"+i);
//       this["menu_wrapD3"+i].innerHTML = menuA.menu_wrapD3[i];
//     }
//     for(i=1; i<7; i++){
//       this["menu_wrapD4"+i]=document.getElementById("ju_menuK"+i);
//       this["menu_wrapD4"+i].innerHTML = menuA.menu_wrapD4[i];
//     }
//     var str = "";
//     for(i=1; i<=6; i++)
//       ju_menuB_img_6.innerHTML = str;
//     str ="";
//     for(i=1; i<=6; i++)
//       str += "<div id='ju_menuC_img"+i+"'></div>";
//       ju_menuC_img_6.innerHTML = str;
//     for(i=1; i<=6; i++){
//       this["ju_menuC_img"+i].style.background = "url(menu_images/img3row"+ i + ".jpg)";
//       this["ju_menuC_img"+i].style.backgroundSize = "100% 100%";
//     }
//     str ="";
//     for(i=1; i<=6; i++)
//       str += "<div id='ju_menuD_img"+i+"'></div>";
//       ju_menuD_img_6.innerHTML = str;
//     for(i=1; i<=6; i++){
//       this["ju_menuD_img"+i].style.background = "url(menu_images/img4row"+ i + ".jpg)";
//       this["ju_menuD_img"+i].style.backgroundSize = "100% 100%";
//     }
//     str ="";
//     for(i=1; i<=6; i++)
//       str += "<div id='ju_menuE_img"+i+"'></div>";
//       ju_menuE_img_6.innerHTML = str;
//     for(i=1; i<=6; i++){
//       this["ju_menuE_img"+i].style.background = "url(menu_images/img5row"+ i + ".jpg)";
//       this["ju_menuE_img"+i].style.backgroundSize = "100% 100%";
//     }
//     str ="";
//     for(i=1; i<=6; i++)
//     str += "<div id='ju_menuF_img"+i+"'></div>";
//     ju_menuF_img_6.innerHTML = str;
//   for(i=1; i<=6; i++){
//     this["ju_menuF_img"+i].style.background = "url(menu_images/img6row"+ i + ".jpg)";
//     this["ju_menuF_img"+i].style.backgroundSize = "100% 100%";
//   }
//   str ="";
//   for(i=1; i<=6; i++)
//   str += "<div id='ju_menuG_img"+i+"'></div>";
//   ju_menuG_img_6.innerHTML = str;
// for(i=1; i<=6; i++){
//   this["ju_menuG_img"+i].style.background = "url(menu_images/img7row"+ i + ".jpg)";
//   this["ju_menuG_img"+i].style.backgroundSize = "100% 100%";
// }
// str ="";
// for(i=1; i<=6; i++)
// str += "<div id='ju_menuH_img"+i+"'></div>";
// ju_menuH_img_6.innerHTML = str;
// for(i=1; i<=6; i++){
// this["ju_menuH_img"+i].style.background = "url(menu_images/img8row"+ i + ".jpg)";
// this["ju_menuH_img"+i].style.backgroundSize = "100% 100%";
// }
// str ="";
// for(i=1; i<=6; i++)
// str += "<div id='ju_menuI_img"+i+"'></div>";
// ju_menuI_img_6.innerHTML = str;
// for(i=1; i<=6; i++){
// this["ju_menuI_img"+i].style.background = "url(menu_images/img9row"+ i + ".jpg)";
// this["ju_menuI_img"+i].style.backgroundSize = "100% 100%";
// }
// str ="";
// for(i=1; i<=6; i++)
// str += "<div id='ju_menuJ_img"+i+"'></div>";
// ju_menuJ_img_6.innerHTML = str;
// for(i=1; i<=6; i++){
// this["ju_menuJ_img"+i].style.background = "url(menu_images/img10row"+ i + ".jpg)";
// this["ju_menuJ_img"+i].style.backgroundSize = "100% 100%";
// }
// str ="";
// for(i=1; i<=6; i++)
// str += "<div id='ju_menuK_img"+i+"'></div>";
// ju_menuK_img_6.innerHTML = str;
// for(i=1; i<=6; i++){
// this["ju_menuK_img"+i].style.background = "url(menu_images/img11row"+ i + ".jpg)";
// this["ju_menuK_img"+i].style.backgroundSize = "100% 100%";
// }
// str ="";
// }
$(document).ready(function () {
  var hero = $('#section1').position().top - 100;
  var about = $('#section2').position().top - 500;
  var hhistory = $("#section3").position().top - 500;
  var contact = $('#section4').position().top - 700;
  $('.tab-act').removeClass('active');
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll < about) {
      $("#home").addClass("active");
      $("#about").removeClass("active");
    } else if (about <= scroll && scroll < hhistory) {
      $("#home").removeClass("active");
      $("#about").addClass("active");
      $("#skill").removeClass("active");
    } else if (hhistory <= scroll && scroll < contact) {
      $("#about").removeClass("active");
      $("#skill").addClass("active");
      $("#work").removeClass("active");
    } else if (contact <= scroll) {
      $("#skill").removeClass("active");
      $("#work").addClass("active");
    } else if ($('.tab-act') === scroll) {
      $('.tab-act').offset().top;
    }
  });
}); //html 파일 내 특정요소 태그만 불러오기
// $.ajax({
//   dateType : "json",
//   url : "menu.html",
//   success : function(result){
//     $('.menu_list').html(result).find('li');
//     console.log(result); 
//     console.log(refine); 
//     console.log(typeof(refine)); 
//     $('.menu_list').html(refine).find('li');
//   }
// });
// $(document).ready(function(){
//   $.ajax({
//     type: 'post',
//     dataType :"json",
//     url : "../menu_list.json",
//     success : function(data){
//      for(var i=0; i<data.length; i++){
//        console.log(data[i].version + ":"+data[i].code);
//      }
//     },
//     error : function(){alert('error');}
//   })
// });
//  //JSON 변수
//  var addItemCount = 16,//한 번에 표시 할 항목 수
//      added = 0,//표시 된 항목 수
//      allData = [];//모든 json 데이터
//      $.getJSON('../image_list.json',initGallery);
//      function initGallery (data){
//        //취득한 json데이터를 저장
//        allData = data;
//        //첫번째 항복을 표시
//        addItems();
// window.onload = function () { 
//   startLoadFile(); 
// }; 
// function startLoadFile(){ 
//   $.ajax({
//      url: '../menu_list.json',
//      type: 'POST',
//      dataType : 'json', 
//      success : function (data) 
//      { menuImages(data)
//     } 
//   }); 
//       } 
// // JSON 포멧 데이터 처리 
// function menuImage(objImageInfo) {
//  var images = objImageInfo.images; 
//   var strDOM = ""; 
//   for (var i = 0; i < images.length; i++) { 
//   // N번째 이미지 정보를 구하기 
//   var image = images[i];
//   // N번째 이미지 패널을 생성 
//   strDOM += '<div class="image_panel">'; 
//   strDOM += ' '+'<img src="' + image.url + '">';
//   strDOM += ' '+'<p class="title">' + image.title +'</p>';
//   strDOM += ''+'</div>';
//  } 
//   // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
//    var $imageContainer = $("#image_container"); 
//    $imageContainer.append(strDOM); 
//   }
// window.onload=function(){
//   var json = '{"images" : "../menu_images/ff325e63a.jpg"}';
//   var jsonObject = JSON.parse(json);
//   document.getElementById("#image_container").src = jsonObject.Images;
// }