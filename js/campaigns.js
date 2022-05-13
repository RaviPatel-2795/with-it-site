imagesLoaded( document.querySelector('.grid'), function( instance ) {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    gutter: 50
  });
});