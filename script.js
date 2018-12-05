$(function() {
    $('.logo').click(function() {
        $(this).fadeTo(2000, 0).delay(1000).fadeTo(2000, 1);
    });
    $('.ms-logo').click(function() {
        $(this).fadeTo(2000, 0).delay(1000).fadeTo(2000, 1);
    });
    $('.goog-logo').click(function() {
        $(this).fadeTo(2000, 0).delay(1000).fadeTo(2000, 1);
    });
    $('.py-logo').click(function() {
        $(this).fadeTo(2000, 0).delay(1000).fadeTo(2000, 1);
    });
        $('.jq-logo').click(function() {
        $(this).fadeTo(2000, 0).delay(1000).fadeTo(2000, 1);
    });
    
  
    
    
    $('.light-box').css('display', 'none').delay(6000).fadeIn(500);
    $('.light-box-close').click(function() {
        $('.light-box').fadeOut(500);
    });
});