var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:7500,
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

$('#comunicados-titulo').click(function() {
    $('#comunicados-corpo').slideToggle(300);
    $("svg", this).toggleClass("fa-arrow-up fa-arrow-down");
});