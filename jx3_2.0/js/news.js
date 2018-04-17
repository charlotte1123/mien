/**
 * Created by Administrator on 2018/3/3.
 */

$(function () {
    $('#ii1').addClass('ii1');
    $('#ii2').addClass('ii2');
    $('#ii3').addClass('ii3');
    $('#ii4').addClass('ii4');
    $('#ii5').addClass('ii5');
    $('#ii6').addClass('ii6');
    $('#info5box').hide();
    $('#info6box').hide();
    $('#infobox>.info>li').mouseenter(function () {
        $(this).css('backgroundColor', '#53acb7').css('cursor', "pointer")
        $(this).css('cursor', "pointer");
        $(this).find('p').css('color', '#fff');

        var index = $(this).index() +1;
        for (var i = 1; i <= index; i++) {
            $(this).find('i').removeClass('ii' + i);
            $(this).find('i').addClass('tran' + i)
        }
    }).mouseleave(function () {
        $(this).css('backgroundColor', '');
        $(this).find('p').css('color', '#000');

        var index = $(this).index()+1;
        for (var i = 1; i <= index; i++) {
            $(this).find('i').removeClass('tran' + i + '');
            $(this).find('i').addClass('ii' + i + '');
        }

    });

    $('.info #info5').mouseenter(function () {
        $('#info5box').show();
    }).mouseleave(function () {
        $('#info5box').hide();
    });

    $('.info #info6').mouseenter(function () {
        $('#info6box').show();
    }).mouseleave(function () {
        $('#info6box').hide();

    });


    $('.sever>p').mouseenter(function () {
        $(this).css('backgroundColor', '#7e8b9b');
        $('.sever>p>a').css('color', '#fff');
    }).mouseleave(function () {
        $(this).css('backgroundColor', '');
        $('.sever>p>a').css('color', '#7e8b9b');
    });



    setInterval(function(){
        $('#severlist').animate({marginTop:'-14px',height:'90px'},1000,function(){
            $(this).css({marginTop: "10px",height:'60px'}).find(":first").appendTo(this);
        })
    },2000);



});






