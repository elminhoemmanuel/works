
$(function(){

    $(".topnav .icon").click(function(){
        $(".nav-responsive").toggle();
    });

    if ($( document ).width()<751){
        $(".carousel-img").addClass("w-100");
    };

    // code to create sliding in animation
    var $animation_elements = $('.animation-element');
    var $window = $(window);
  
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
    
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
  
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

        // code to create shaking headers
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
      }
    //   // If element is scrolled into view, fade it in
    //   for  i can help
      $(window).scroll(function() {
        $('.sections .services-header').each(function() {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('heartbeat');
          }
        });
      });

});