$(function () {
  num_posts_show = 3;
  speed_to_top = 1000; // in ms
  
    $(".post").slice(0, num_posts_show).show();
    $("#loadmore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, num_posts_show).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('#totop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, speed_to_top);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#totop').fadeIn();
    } else {
        $('#totop').fadeOut();
    }
});