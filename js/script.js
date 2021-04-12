//スムーススクロール

$(function(){
	$('nav a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

/***************** MENU ******************/

$(function() {
  $(".navbar-toggle").click(function() {
    $("#gnavi").slideToggle(200);
    $(".icon-bar").toggleClass("closeup");
    return false;
  });
});

//スマホのメニューをタップしたら閉じる

$(document).ready(function () {
 $(".navbar-nav li a").click(function(event) {
 $(".navbar-collapse").removeClass('show');
 });
});

// ロード画面
var bg = document.getElementById('loader-bg'),
    loader = document.getElementById('loader');
/* ロード画面の非表示を解除 */
bg.classList.remove('is-hide');
loader.classList.remove('is-hide');

/* 読み込み完了 */
window.addEventListener('load', stopload);

/* 10秒経ったら強制的にロード画面を非表示にする */
setTimeout('stopload()',10000);

/* ロード画面を非表示にする処理 */
function stopload(){
    bg.classList.add('fadeout-bg');
    loader.classList.add('fadeout-loader');
}

/*           ↑          */

$(function(){
	function animation(){
	  $('.fadeInUp').each(function(){
		//ターゲットの位置を取得
		var target = $(this).offset().top;
		//スクロール量を取得
		var scroll = $(window).scrollTop();
		//ウィンドウの高さを取得
		var windowHeight = $(window).height();
		//ターゲットまでスクロールするとフェードインする
		if (scroll > target - windowHeight){
		  $(this).css('opacity','1');
		  $(this).css('transform','translateY(0)');
		}
	  });
	}
	animation();
	$(window).scroll(function (){
	  animation();
	});
  });