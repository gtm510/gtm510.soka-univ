

// トップページスライドショー
	$('.mainimg').slick({
		autoplay: true,
		dots: true,				//丸いページナビボタンを表示
		arrows: false,			//左右の矢印
		autoplaySpeed: 4000,	//切り替えのスピード。デフォルトは3000。
		pauseOnHover: false,	//マウスオン時にスライドショーをストップする
        
        centerMode: true,
        centerPadding: '50px',
        focusOnSelect: true,
    });

$(document).ready(function(){
        // スクロールで反応するアニメーション
        $(window).on('load scroll', function (){
            SetScrollTiming('.ani');
        });
    });
 
    // スクロールのタイミングでアニメーションさせる
    function SetScrollTiming(target){
        var box = $(target);
        var animated = 'animated';
 
        box.each(function(){
            var boxOffset = $(this).offset().top;
            var scrollPos = $(window).scrollTop();
            var wh = $(window).height();
 
            //画面内のどの位置で処理を実行するかで「100」の値を変更
            if(scrollPos > boxOffset - wh + 100 ){
                $(this).addClass('move');
            }
        });
    }
