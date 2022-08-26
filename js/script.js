$(function(){
    /*gnb 메뉴 내려오는 동작*/
    let gnb = $('.gnb'),
        sub = $('.sub'),
        gnbBgBox = $('.gnb_bgbox'),
        count = 0,
        target = 0;


    function smoothMove(){
        count = count + 0.1*(target - count); 
        gnbBgBox.css({height: count+'px'});
        for(let i=0; i<=6; i++){
            sub.eq(i).css({height: count+'px'});
        }
    }
    setInterval(smoothMove,10);

    gnb.mouseover(function(){
        target = 320;
    }).mouseleave(function(){
        target = 0;
    });

    /*visual 슬라이드갤러리*/
    $('.show').bxSlider({
        auto:true,
        speed:300,
        pager:true,
        controls:true,
      });
});