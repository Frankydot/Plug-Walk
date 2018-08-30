$(document).ready(function() {
    //carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 10000,
    });
    //toggle option
    $('#infor').hide();
    $("#more").click(function() {
        $('#infor').toggle();
    });

    $('#map').hide();
    $('#directions').click(function() {
        $('#map').toggle();
    });

});