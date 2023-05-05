$(document).on('ready', function() {
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    scrolling(st);
  });

  function scrolling(st) {
    $(".cube").each(function() {
      var me = $(this),
      x = me.data('x'),
      y = me.data('y');
      me.css({
        transform: 'translateZ( -100px ) translateY(' + (y - st) + 'px) translateX(' + x + 'px)'
      });
    });
  }
  scrolling(0);

});
