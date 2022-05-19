$(window).load(function() {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar_system");

    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set_speed");
            $(this).dequeue();
        });
    };

    var setView = function(view) { universe.removeClass().addClass(view); };

    $("#toggle_data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle_controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set_view").click(function() { body.toggleClass("view-3D view-2D"); });
    $(".set_zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
    $(".set_speed").click(function() { setView("scale_stretched set_speed"); });
    $(".set_size").click(function() { setView("scale-s set_size"); });
    $(".set_distance").click(function() { setView("scale-d set_distance"); });

    init();

});