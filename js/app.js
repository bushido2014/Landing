$(document).foundation();

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".fixed").addClass("myfixed");
    } else {
        
       $(".fixed").removeClass("myfixed");
    }
    if($(window).width() <= 767){
  $(".fixed").removeClass("myfixed");
  
}

});


//hover class active 
// $(function() {
//     var sbula = $(".menu li a");
    
//     sbula.click(function() {
//         sbula.removeClass("active").not(sbula).add(this).toggleClass("active");
//     });
// });

// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

      // Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  }); 
$(document).ready(function() {
   
  /* begin Back to Top Button */
    if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


});
/* end Back to Top Button */


//E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
