$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:1000,
    loop: true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:4
        }
    }
});
$( function() {
    $( "#accordion" ).accordion();
} );