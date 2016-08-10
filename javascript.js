$(document).ready(function() {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $("html,body").animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
    $('.navbar-default a').removeClass('selected');
    $(this).addClass('selected');
  });
});

$(function() {

  $('button.pop').click(function(e) {

    e.preventDefault();

  });

  $('button.pop').popover();

});