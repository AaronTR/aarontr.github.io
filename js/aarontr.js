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

function initMap() {
    if(document.getElementById('where_am_i_map')){
        var location_data = {lat: 8.036283, lng: 98.832814};
        var map = new google.maps.Map(document.getElementById('where_am_i_map'), {
            zoom: 10,
            center: location_data
        });
        var marker = new google.maps.Marker({
            position: location_data,
            map: map
        });
    }
}