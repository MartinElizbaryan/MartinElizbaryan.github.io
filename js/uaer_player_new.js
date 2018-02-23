$(document).ready(function () {
   $('.img_1').click(function () {
       $('.img_1').hide();
       $('.img_2').show();
   });

    $('.img_2').click(function () {
        $('.img_2').hide();
        $('.img_3').show();
        // $('.price_add_money').fadeIn(1000);
        //     $('.img_3').fadeOut(1000,function () {
        //     $('.price_add_money').fadeOut(2500);
        //     var money_price = $('.price_add_money').html();
        //     money_price = Number(money_price);
        //     var money = $('.real_money').html();
        //     money = Number(money);
        //     money = money +money_price;
        //     $('.real_money').html(money);
        // });
        $('.safe_money').fadeIn(1000);
        $('.img_3').fadeOut(1000,function () {
          var money = parseInt($('.real_money').text());
          var money_price = parseInt($('.price_add_money').html());

          money += money_price
          $('.real_money').text(money)
          $('.safe_money').fadeOut(1000);

        })


    });
});

