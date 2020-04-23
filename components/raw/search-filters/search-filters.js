import $ from 'jquery'
import 'selectric'
import 'icheck'

//
// add the custom checkbox visuals
//
$('.search-result-filters input').iCheck({
    checkboxClass: 'icheckbox_flat-blue',
    radioClass: 'iradio_flat-blue'
});

//
// add functionality to toggle the mobile search menu
//
$('.search-result-filters-button [role=button],.search-result-filters-submit-wrapper [role=button], .search-result-navigation-close a').on('click', function (event) {
    event.preventDefault();
    $('.search-result-filters').toggleClass('search-result-filters-active');
});

//
// select box styling
//
$('.search-result-filters-group select').selectric({ responsive: true });