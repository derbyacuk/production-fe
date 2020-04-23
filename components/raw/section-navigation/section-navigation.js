import $ from 'jquery'
import stickybits from 'stickybits'

$('.section-navigation-wrapper').hide();

$('.section-navigation-link').click(function (e) {
    e.preventDefault();
    $('.section-navigation-wrapper').slideToggle();
});

$('.section-navigation-wrapper > .uod-icons-cross').click(function (e) {
    e.preventDefault();
    $('.section-navigation-wrapper').slideUp();
});


stickybits('.section-navigation');
