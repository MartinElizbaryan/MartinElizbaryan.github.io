$(document).ready(function () {
    $('figure').click(function () {
        for(var i=1;i<6;i++){
            $('.car_'+i).css('background','gray');
        }
        $(this).css('background','red');
    });

    for(var i=1;i<6;i++){
        $('.car_'+i).click(function () {
            $('.content').fadeIn();
            $('.right_menu').fadeIn();
        });
    }

    // 9.Вес
    $('.buy_weight').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.weight_price').html();
        dollar = Number(dollar);
        var point = $('.weight').html();
        point = Number(point);
        var oldPoint = $('.car_1_acceleration_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_acceleration_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 8.Глушитель
    $('.buy_silencer').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.silencer_price').html();
        dollar = Number(dollar);
        var point = $('.silencer').html();
        point = Number(point);
        var oldPoint = $('.car_1_acceleration_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_acceleration_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 7.Трансмиссия
    $('.buy_transmission').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.transmission_price').html();
        dollar = Number(dollar);
        var point = $('.transmission').html();
        point = Number(point);
        var oldPoint = $('.car_1_acceleration_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_acceleration_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 1.Мотор
    $('.buy_engine').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.engine_price').html();
        dollar = Number(dollar);
        var point = $('.engine').html();
        point = Number(point);
        var oldPoint = $('.car_1_maxSpeed_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_maxSpeed_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 4.Турбонаддув
    $('.buy_turbocharging').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.turbocharging_price').html();
        dollar = Number(dollar);
        var point = $('.turbocharging').html();
        point = Number(point);
        var oldPoint = $('.car_1_maxSpeed_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_maxSpeed_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 2.Шины
    $('.buy_tyre').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.tyre_price').html();
        dollar = Number(dollar);
        var point = $('.tyre').html();
        point = Number(point);
        var oldPoint = $('.car_1_braking_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_braking_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 5.Тормоза
    $('.buy_brake').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.brake_price').html();
        dollar = Number(dollar);
        var point = $('.brake').html();
        point = Number(point);
        var oldPoint = $('.car_1_braking_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_braking_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 6.Подвеска
    $('.buy_suspension').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.suspension_price').html();
        dollar = Number(dollar);
        var point = $('.suspension').html();
        point = Number(point);
        var oldPoint = $('.car_1_cornering_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_cornering_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });

    // 6.Тюнинг
    $('.buy_tuning').click(function () {
        var money = $('.real_money').html();
        money = Number(money);
        var dollar = $('.tuning_price').html();
        dollar = Number(dollar);
        var point = $('.tuning').html();
        point = Number(point);
        var oldPoint = $('.car_1_cornering_point').html();
        oldPoint = Number(oldPoint);
        if(money > dollar){
            money = money - dollar;
            $('.car_1_cornering_point').html(oldPoint + point);
            $('.real_money').html(money);
        }
    });
});
