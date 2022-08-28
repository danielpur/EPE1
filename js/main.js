$(document).ready(function() {
    $('#logo').fadeIn(2000);
});

$(document).ready(function() {
    $('#slogan').fadeIn(2000);
});

$(document).ready(function() {
    $('footer').fadeIn(100);
    $('footer').css(
        'display', 'flex'
    );
});

$(document).ready(function() {
    $('#destinos').fadeIn(2000);
});

$(document).ready(function() {
    $('#centrodeayuda').fadeIn(2000);
});


$(document).ready(function() {
    $('#img-contacto').fadeIn(2000);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('nav').css({
            'cssText': 'background-color: #1b0088 !important;'
        });
        $('a').css({
            'cssText': 'color: #ffffff !important;'
        });
    } else {
        $('nav').css({
            'cssText': 'background-color: #ffffff !important'
        });
        $('a').css({
            'cssText': 'color: #1b0088 !important'
        });
    };
});