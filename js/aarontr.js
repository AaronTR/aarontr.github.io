(function($){
    $(document).ready(function() {

        var sidrName = "sidr-main";
        
        $(".site-nav a.menu-icon").sidr({
            name: sidrName,
            side: "right",
            source: "#main-menu",
            renaming: false,
            onOpen: function() {
                $(window).on("click.sidr", function(e) {
                    $.sidr("close", sidrName);
                });
                $(".site-nav a.menu-icon").addClass("open");
            },
            onClose: function() {
                $(window).off("click.sidr");
                $(".site-nav a.menu-icon").removeClass("open");
            }
        });
    
        // Don't you dare close me out!
        $("#" + sidrName).on("click.sidr", function(e) {
            e.stopPropagation();
        });

    });
})(jQuery);