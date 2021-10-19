function openTopNav(x) {
    document.getElementById('top-nav').style.height = '70%';
    document.getElementById("container1").style.webkitFilter = "brightness(80%)";
    document.getElementById('container1').style.transition = '1s ease-out';
}

function closeTopNav(x) {
    document.getElementById('top-nav').style.height = '0%';
    document.getElementById('container1').style.filter = "brightness(100%)";
    document.getElementById('container1').style.transition = '1s ease-out';
}

//Fade in: http://jsfiddle.net/woq2bkjt/1/
$(window).on("load", function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
