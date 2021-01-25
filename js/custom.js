$('.slick-carousel').slick({
infinite: true,
slidesToShow: 2, // Shows a three slides at a time
slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
arrows: true, // Adds arrows to sides of slider
dots: true, // Adds the dots on the bottom
autoplay: true,
responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

  ]
});


$(document).ready(function() {
    $('.slider_icon a[href*=/#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 100, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.slider_icon a.active').removeClass('active');
                    $('.slider_icon a').eq(i).addClass('active');
            }
    });
}).scroll();

$('.mob_toggle').click(function(){
        $('.for_mob').toggleClass('shown');
        $('body').toggleClass('hidden');
        $('.mob_toggle span').toggleClass('opened');
})