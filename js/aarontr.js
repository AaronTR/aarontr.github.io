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

        $('.about-section').waypoint(function(direction){
            $('.home-break-section h2').addClass('fadeIn');
            $('#icon-container-top').addClass('fadeInLeft');
            $('#icon-container-bottom').addClass('fadeInRight');
        },{
            offset: '50%'
        });

        $('.travel-callout').waypoint(function(direction){
            $('.travel-callout .callout-heading').addClass('fadeInLeft');
        },{
            offset: '66%'
        });

        $('.work-callout').waypoint(function(direction){
            $('.work-callout .callout-heading').addClass('fadeInRight');
        },{
            offset: '66%'
        });

        $('.personal-callout').waypoint(function(direction){
            $('.personal-callout .callout-heading').addClass('fadeInLeft');
        },{
            offset: '66%'
        });

        $('.blog-card').flip({'trigger': 'click'});
        $('.blog-card a').on('click', function(e){
            e.stopPropagation();
        });
        $('.blog-card').on('click', function(e){
            e.preventDefault();
            $(this).find('.back').toggleClass('visible');
        });

    });
})(jQuery);