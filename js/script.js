$(document).ready(function(){

    $('.header-megamenu > ul > li > ul').filter(function(){
        return ( !$(this).find('ul').length )
    }).addClass('small-menu');
    
    $('.slider-owl-flash').owlCarousel({
        items:1,
        loop:true,
        rtl:true,
        nav:false,
        dots:false,
        autoplay:true,
        autoplaytimeout:10000,
        onInitialize:start,
        onTranslate:reset,
        onTranslated:start
    });
        
    function start(){
        $('.slider-progress').css({
            width:'100%',
            transition:'all 6s'
        })
    }
    function reset(){
            $('.slider-progress').css({
                width:'0px',
                transition:'all 0s'
        })
    }
    $('.product-slider-box').owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
        dots:false,
        navText:['<span class="iconify" data-icon="akar-icons:chevron-right"></span>','<span class="iconify" data-icon="akar-icons:chevron-left"></span>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
})
