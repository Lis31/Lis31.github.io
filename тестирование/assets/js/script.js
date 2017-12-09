


$(document).ready(function () {

        // Карусель  
        var carousel = $("#carousel").waterwheelCarousel({
          flankingItems: 3,
          movingToCenter: function ($item) {
            $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
          },
          movedToCenter: function ($item) {
            $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
          },
          movingFromCenter: function ($item) {
            $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
          },
          movedFromCenter: function ($item) {
            $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
          },
          clickedCenter: function ($item) {
            $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
          }
        });

        $('#prev').bind('click', function () {
          carousel.prev();
          return false
        });

        $('#next').bind('click', function () {
          carousel.next();
          return false;
        });

        $('#reload').bind('click', function () {
          newOptions = eval("(" + $('#newoptions').val() + ")");
          carousel.reload(newOptions);
          return false;
        });

        // Pricing

        
        var pricingBtn = $('.pricing_btn');

     
        $('.pricing_item').hover(function() {
          var price = $(this).find($('.pricing_item_price'));
          var triangle = $(this).find($('.triangle'));
          var pricingBtn = $(this).find($('.pricing_btn'));
          var mask1 = $(this).find($('.triangle_mask_1'));
          var mask2 = $(this).find($('.triangle_mask_2'));
          price.css({
            background: 'linear-gradient(to right, #FD712C, #F31E7A)',
            color: '#FFF'
          });
          $(this).css({
            background: '#FFF',
            boxShadow: '0 0 35px #EBEBEB'
          });

          mask1.css({
            borderLeftColor: '#FFF',
            borderBottomColor: 'FFF'
          });
          mask2.css({
            borderRightColor: '#FFF',
            borderBottomColor: 'FFF'
          });
          triangle.css({background: 'linear-gradient(to right, #FD712C, #F31E7A)'});

          pricingBtn.css({
            background: 'linear-gradient(to right, #FD712C, #F31E7A)',
            color: '#FFF',
            border: '3px solid #DFDFDF'
          });


        }, function() {
          var price = $(this).find($('.pricing_item_price'));
          var triangle = $(this).find($('.triangle'));
          var pricingBtn = $(this).find($('.pricing_btn'));
          var mask1 = $(this).find($('.triangle_mask_1'));
          var mask2 = $(this).find($('.triangle_mask_2'));
          price.css({
            background: '#FFF',
            color: '#333333'
          });
          $(this).css({
            background: '#F7FAFC',
            boxShadow: 'none'
          });

            mask1.css({
            borderLeftColor: '#F7FAFC',
            borderBottomColor: '#F7FAFC'
          });
          mask2.css({
            borderRightColor: '#F7FAFC',
            borderBottomColor: '#F7FAFC'
          });

          triangle.css({background: '#FFF'});

          pricingBtn.css({
            background: '#FFF',
            color: '#333333',
            border: '1px solid #EEEEEE'
          });
        });
       
       // Вторая карусель

       
      $(function(){
        $("#container").clickCarousel({margin: 10});  
      });

});