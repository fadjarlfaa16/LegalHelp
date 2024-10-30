$(document).ready(function() {
    $("#reg").hide();
    $("#in").hide();

    $("#start").click(function() {
        $("#in").hide();
        $("#reg").fadeIn();
    });

    $("#haveAcc").click(function() {
        $("#reg").hide();
        $('#in').fadeIn();
    });
});