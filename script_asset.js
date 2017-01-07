$(function() {
  //console.log('ready');
  
  $('#cart').on('mouseenter', function() {
    $.getJSON('/cart.js', function(data) {
      
      // run template view
      var template = $("#minicart-template").html();
      var tmpl = _.template(template);
      
      // populate cart data
      $("#mini-cart").html(tmpl({cart:data}));
      
      // format all prices
      $('.price', '#mini-cart').each(function() {
        $(this).html( Shopify.formatMoney($(this).text()) );
      });
      
      // format image to small
      $('img', '#mini-cart').each(function() {
        var src = $(this).attr('src');
        src = src.replace('.jpg', '_50x50.jpg'); // if using jpg
        src = src.replace('.jpeg', '_50x50.jpeg'); // if using jpeg
        $(this).attr('src', src);
      });
      
      $('#mini-cart').show();
    });
    
  });
  
  $('#mini-cart').on('mouseleave', function() {
    $(this).hide();
  });
});
