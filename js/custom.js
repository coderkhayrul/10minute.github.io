$(function () {
    /*--------------------------
	 Global Variable
	---------------------------- */
    var patsala = $(window);
    var page = $('html, body');

    /*--------------------------
    scroll to top active
    ---------------------------- */
    $(".scrolltop").on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });

    /*--------------------------
     Menu Scroll Fix Function
    ---------------------------- */
    patsala.on('scroll', function () {
        if (patsala.scrollTop() > 100) {
            $('.menu_part').addClass('animated slideInDown fix')
        } else {
            $('.menu_part').removeClass('animated slideInDown fix ')
        }
    })

    patsala.on('scroll', function () {
        if (patsala.scrollTop() > 100) {
            $('.menu_part').addClass('none_menu')
        } else {
            $('.menu_part').removeClass('none_menu')
        }
    });
    $('.open_box').click(function(){
        $('.course_dtls_content_box2_hight').delay("slow").addClass('close_box');
    });
    $('.course_dtls_item_video_overlay2 a').click(function(){
        $('.course_dtls_item_video_overlay').addClass('course_dtls_item_video_overlay_block');
    });
    $('.banner_slide').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 15,
        nav: true,
        dots: true,
        navText: ['<i class="fa-solid fa-angle-left arrow_lf"></i>','<i class="fa-solid fa-angle-right arrow_rt"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    $('.teacher_slide').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 15,
        nav: true,
        dots: true,
        navText: ['<i class="fa-solid fa-angle-left arrow_lf2"></i>','<i class="fa-solid fa-angle-right arrow_rt2"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.job_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 1000,
         stagePadding: 50,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    $('.tab_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 1000,
         stagePadding: 0,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    
    $('.feedback_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 1000,
         stagePadding: 10,
        autoplay: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
arrows: false,
     autoplay: true,
  autoplaySpeed: 2000,
    speed: 500,
  centerMode: true,
     centerPadding: '0px',
  focusOnSelect: true
});
    

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    new VenoBox({
        selector: '.my-video-links',
    });

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function (itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });



    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

});
