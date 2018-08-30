$(document).ready(function() {
    //carousel options
    $('#quote-carousel').carousel({
        pause: true,
        interval: 10000,
    });

    //toggle options
    $('#infor').hide();
    $("#more").click(function() {
        $('#infor').toggle();
    });

    $('#map').hide();
    $('#directions').click(function() {
        $('#atmosphereCon').hide();
        $('#eventsCon').hide();
        $('#map').toggle();
    });

    $('#atmosphereCon').hide();
    $('#atmosphere').click(function() {
        $('#eventsCon').hide();
        $('#map').hide();
        $('#atmosphereCon').toggle();
    });

    $('#eventsCon').hide();
    $('#events').click(function() {
        $('#map').hide();
        $('#atmosphereCon').hide();
        $('#eventsCon').toggle();
    });


});