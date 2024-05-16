$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:1000,
    loop: true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        1099:{
            items:4
        },
        992:{
            items:3
        },
        768:{
            items:3
        },
        540:{
            items:2
        },
        320:{
            items:1
        },
        280:{
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