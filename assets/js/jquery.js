
$(document).ready(function(){

    $(window).on('resize', function() {
          var win = $(this);
          if (win.width() < 576) {
            $(".call-btn").addClass("btn-sm");
          }
          else {
            $(".call-btn").removeClass("btn-sm");
          }
        });

  });