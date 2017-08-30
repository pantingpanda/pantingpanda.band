$(document).ready(function() {
    $('.post_content_wrapper p img').addClass("img-responsive"); 

    $('.grid').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    })

});