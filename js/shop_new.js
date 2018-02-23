$(document).ready(function () {
    if($('.to_buy_1').click){
        count(1);
    }
    if($('.to_buy_2').click){
        count(2);
    }
    if($('.to_buy_3').click){
        count(3);
    }
    if($('.to_buy_4').click){
        count(4);
    }
    if($('.to_buy_5').click){
        count(5);
    }

    function count(j) {
        $('.to_buy_'+j).click(function () {
            var money = $('.real_money').html();
            money = Number(money);
            var dollar = $('.cost_'+j).html();
            dollar = Number(dollar);
            var car_name = $('.buy_'+j+'_text').html();
            var car_class = $('.buy_'+j+'_class').html();
            var maxSpeed = $('.buy_'+j+'_maxSpeed_point').html();
            var acceleration = $('.buy_'+j+'_acceleration_point').html();
            var braking = $('.buy_'+j+'_braking_point').html();
            var cornering = $('.buy_'+j+'_cornering_point').html();
            if(money > dollar){
                for(var i=1;i<=6;i++){
                    if(i!=6){
                        var k=i+1;
                        if( $('.car_'+i+'_class').is(':empty') ){
                            if (k!=6){
                                $('.car_'+k).fadeIn();
                            }
                            money = money - dollar;
                            $('.real_money').html(money);
                            $('.car_'+i+'_text').css('display','none').html(car_name).fadeIn(3000);
                            $('.car_'+i+'_class').html(car_class).fadeIn(3000);
                            $('.car_'+i+'_maxSpeed_point').html(maxSpeed);
                            $('.car_'+i+'_acceleration_point').html(acceleration);
                            $('.car_'+i+'_braking_point').html(braking);
                            $('.car_'+i+'_cornering_point').html(cornering);
                            $('.car_'+i+'_maxSpeed').fadeIn(3000);
                            $('.car_'+i+'_acceleration').fadeIn(3000);
                            $('.car_'+i+'_braking').fadeIn(3000);
                            $('.car_'+i+'_cornering').fadeIn(3000);
                            break;
                        }
                    }
                    else{
                        alert('Sorry, but you cannot buy cars more than 5');
                    }
                }
            }
            else{
                alert("Sorry you don't have enough money")
            }
        });
    }
});
