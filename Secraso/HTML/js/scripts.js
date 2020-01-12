var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1500,
    autoplayHoverPause:true
});

$("#btn-collapse").click(function() {
    if ($(this).hasClass('collapsed')) {
        $(this).find('svg').attr('data-icon', 'minus');
    } else {
        $(this).find('svg').attr('data-icon', 'plus');
    }
});

$('#click_advance').click(function() {
    $('#display_advance').toggle(300);
    $("svg", this).toggleClass("fa-arrow-down fa-arrow-up");
});