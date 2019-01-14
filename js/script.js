$(document).ready(function(){
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) 
    {
      $('.scroll_To_Top').fadeIn();
    } 
    else 
    {
      $('.scroll_To_Top').fadeOut();
    }
  });
  

  $('.scroll_To_Top').click(function(){
    $('html, body').animate({scrollTop : 0},700);
    return false;
  });

  var nav = $('#nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0.1) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});