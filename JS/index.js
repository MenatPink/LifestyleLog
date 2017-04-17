$(document).ready(function(){
  $(window).scroll(function(){
  // Scroll Record Function
    var wScroll = $(this).scrollTop();
  // Section 4 Lazy Load
    if(wScroll > $('.container').offset().top - ($(window).height()/2)) {

      $('.col-xs-4').each(function(i){

        setTimeout(function(){
        $('.col-xs-4').eq(i).addClass('isShowing');
      }, 150 * (i+1));
      });
    };
  // Section 5 Lazy Load
  if(wScroll > $('.container').offset().top - ($(window).height()/4)) {

    $('.col-xs-3').each(function(i){

      setTimeout(function(){
        $('.col-xs-3').eq(i).addClass('isShowing');
      },150 * (i*1));
    });
  };
  // Section 1 Carousel
  $('#CarouselIcon1, .Section1 button').click(function(){
    $('.titleText p').eq(0).addClass('isShowingPositioned');
    $('.titleText p').eq(1).removeClass('isShowingPositioned');
    $('.titleText p').eq(2).removeClass('isShowingPositioned');
    $('.titleText p').eq(3).removeClass('isShowingPositioned');
    });
  $('#CarouselIcon2').click(function(){
    $('.titleText p').eq(1).addClass('isShowingPositioned');
    $('.titleText p').eq(0).removeClass('isShowingPositioned');
    $('.titleText p').eq(2).removeClass('isShowingPositioned');
    $('.titleText p').eq(3).removeClass('isShowingPositioned');
    });
  $('#CarouselIcon3').click(function(){
    $('.titleText p').eq(2).addClass('isShowingPositioned');
    $('.titleText p').eq(0).removeClass('isShowingPositioned');
    $('.titleText p').eq(1).removeClass('isShowingPositioned');
    $('.titleText p').eq(3).removeClass('isShowingPositioned');
    });
  $('#CarouselIcon4').click(function(){
    $('.titleText p').eq(3).addClass('isShowingPositioned');
    $('.titleText p').eq(0).removeClass('isShowingPositioned');
    $('.titleText p').eq(1).removeClass('isShowingPositioned');
    $('.titleText p').eq(2).removeClass('isShowingPositioned');
    });
  // Click to Function
    $('#headerList li').eq(1).click(function(){
        $("html,body").animate({scrollTop: $('.Section2').offset().top}, 1500);
    });
    $('#headerList li').eq(2).click(function(){
        $("html,body").animate({scrollTop: $('.Section4').offset().top}, 1500);
    });
    $('#headerList li').eq(3).click(function(){
        $("html,body").animate({scrollTop: $('.Section5').offset().top}, 1500);
    });
    $('#headerList li').eq(4).click(function(){
        $("html,body").animate({scrollTop: $('.Section6').offset().top}, 1500);
    });
    $('#headerList li').eq(5).click(function(){
        $("html,body").animate({scrollTop: $('.Section7').offset().top}, 1500);
    });
    $('#headerList li').eq(6).click(function(){
        $("html,body").animate({scrollTop: $('footer').offset().top}, 1500);
    });
    $(window).bind('mousewheel', function(){
      $('html, body').stop();
    });

  });
});
