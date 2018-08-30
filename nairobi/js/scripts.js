$(document).ready(function() {
    //carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 10000,
    });
    //toggle option
    $('#infor').hide();
    $("button").click(function() {
        $('#infor').toggle();
    });
});