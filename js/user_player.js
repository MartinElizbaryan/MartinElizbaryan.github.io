    $('.img_2').click(function () {
        $('.img_2').hide();
        $('.img_3').show();
        $('.price_money').fadeIn(200,function () {
            $('.img_3').fadeOut(500,function () {
                $('.price_money').fadeOut(2000);
            });
        });
    });


    $('.img_2').click(function () {
        $('.img_2').hide();
        $('.img_3').show();
        $('.price_money').fadeIn(1000);
        $('.img_3').fadeOut(1000,function () {
            $('.price_money').fadeOut(2500);
        });
    });
