/*  ---------------------------------------------------
    Templater Name: Aesthetic
    Description: Aesthetic medical template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        //Masonary
        $('.gallery__container').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.gc__item',
            gutter: 20
        });
    });

    /*------------------
        Back to top button
    --------------------*/

    $(window).scroll(function () {
        // console.log('wwww');
        if ($(this).scrollTop() > 400) {
            $('.js-top-scrollerx').fadeIn();
        } else {
            $('.js-top-scrollerx').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.js-top-scrollerx').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".header__menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true,
        'closedSymbol': '<i class="fa fa-angle-right"></i>', // Character after collapsed parents.
        'openedSymbol': '<i class="fa fa-angle-up"></i>', // Character after expanded parents.
    });

    /*--------------------------
        Testimonial Slider
    ----------------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            768: {
                items: 2,
            },
            0: {
                items: 1,
            }
        }
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*-------------------
		Nice Select
	--------------------- */
    $("select").niceSelect();

    /*-------------------
		Datepicker
	--------------------- */
    $(".datepicker").datepicker({
        minDate: 0
    });


    /* Whatsapp Chat Widget by www.bloggermix.com */

    $(document).on("click", "#send-it", function () {
        var a = document.getElementById("chat-input");
        if ("" != a.value) {
            var b = "+59178186000",
                c2 = document.getElementById("nombre").value,
                c = document.getElementById("chat-input").value,
                d = "https://web.whatsapp.com/send",
                e = b,
                f = "&text=" + c2 + ":%0A" + c;
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            )
                var d = "whatsapp://send";
            var g = d + "?phone=" + e + f;
            window.open(g, "_blank");
        }
    }),
        $(document).on("click", ".informasi", function () {
            (document.getElementById("get-number").innerHTML = $(this)
                .children(".my-number")
                .text()),
                $(".start-chat,.get-new")
                    .addClass("show")
                    .removeClass("hide"),
                $(".home-chat,.head-home")
                    .addClass("hide")
                    .removeClass("show"),
                (document.getElementById("get-nama").innerHTML = $(this)
                    .children(".info-chat")
                    .children(".chat-nama")
                    .text()),
                (document.getElementById("get-label").innerHTML = $(this)
                    .children(".info-chat")
                    .children(".chat-label")
                    .text());
        }),
        $(document).on("click", ".close-chat", function () {
            $("#whatsapp-chat")
                .addClass("hide")
                .removeClass("show");
        }),
        $(document).on("click", ".blantershow-chat", function () {
            $("#whatsapp-chat")
                .addClass("show")
                .removeClass("hide");
        });


})(jQuery);