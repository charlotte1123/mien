$(function(){
//一排中间轮播图
    var ulobj = $('.one_center>.oc_con');
    var pic = 0;
    //点击变化并跳转
    $('.one_center>.oc_bot li').click(function(){
        pic=$(this).index();
        //点击下部小盒子变色
        $(this).css('background','url("../imgs/icon.png") -96px -76px').siblings('li').
            css('background','url("../imgs/icon.png") -122px -76px');
        //隐藏兄弟
        ulobj.children("li:eq("+$(this).index()+")").siblings('li').fadeOut(500);
          //展示自己对应ul
        ulobj.children("li:eq("+$(this).index()+")").css({'position':'absolute','display':''}).animate(500,function(){
            $(this).css({'top':'0px','left':'0px'});
        });

    });

    var s=1;
    //轮播
    function AutoScroll(){
        $('.one_center>.oc_bot>li:eq('+s+')').css('background','url("../imgs/icon.png") -96px -76px').siblings('li').
            css('background','url("../imgs/icon.png") -122px -76px');
        s+=1;
        if(s>5){
            s=0;
        }

        var _scroll = $(".one_center>.oc_con");
//ul往左边移动300px
        _scroll.animate({marginLeft:"-590px"},1000,function(){
            //点亮小块
//把第一个li丢最后面去
            _scroll.css({marginLeft:0}).find("li:first").appendTo(_scroll);
        });
    }

//两秒后调用
    var _scrolling=setInterval(AutoScroll,2000);
    $(".one_center").mouseenter(function(){
//鼠标移动DIV上停止
        clearInterval(_scrolling);
    }).mouseleave(function(){
//离开继续调用
        $('.one_center>.oc_con>li').css({'position':'static','float':'left','display':''});
        _scrolling=setInterval(AutoScroll,2000);
    });




    var  num=0;

    //二排中间点击出现
    $('.two_center>.tw-ce-top>ul>li').click(function(){
        $(this).css('borderBottom', '3px solid #e86656').siblings('li').css('borderBottom', '1px solid #eaeaec');
        var index = $(this).index();
        $('.two_center>.tw-cen-cen ul:eq('+num+')').siblings('ul')
            .css({'top':'0','left':'15px','zIndex':'0'});
        if(num>index){
            $('.two_center>.tw-cen-cen ul:eq('+num+')')
                .css({'top':'0','left':'15px','zIndex':'10'}).
                animate({'top':'0','left':'570px'},1000);
            $('.two_center>.tw-cen-cen ul:eq('+index+')').
                css({'top':'0','left':'-570px','zIndex':'20'}).
                animate({'top':'0','left':'15px'},1000);
        }else if(num<index) {
            $('.two_center>.tw-cen-cen ul:eq('+num+')').
                css({'top':'0','left':'15px','zIndex':'10'}).
                animate({'top':'0','left':'-570px'},1000);

            $('.two_center>.tw-cen-cen ul:eq('+index+')').
                css({'top':'0','left':'570px','zIndex':'20'}).
                animate({'top':'0','left':'15px'},1000);
        }
        num=index;


    });



    //三排中间点击事件
    var thr_cli=0;
$('.in-three .three_center .thr-cen-top li').click(function(){
    var ind = $(this).index();

    $(this).css('border-bottom','2px solid #e86656').css('fontWeight','600').siblings('li')
        .css('border-bottom','#eaeaec 0px solid').css('fontWeight','normal');


    //关联下方具体内容

    var bbb=ind+1;
    $('.in-three .three_center .thr-cen-bot .contain:nth-child('+bbb+')')
        .css('zIndex',20).fadeIn(500).siblings('div').css('zIndex',10).fadeOut(500);

    //闪动动画
    //  $('.in-three .three_center .thr-cen-bot .contain:nth-child('+thr_cli+') .left')
    //      .animate(function(){
    //      $(this).css({'left':'-290px','top':'0px'});
    //  },300);
    //$('.in-three .three_center .thr-cen-bot .contain:nth-child('+bbb+') .left').
    //    css({'left':'-290px','top':'0px'}).
    //    animate(function(){
    //    $(this).css({'left':'0px','top':'0px','zIndex':20}).siblings('div').css('zIndex',10);
    //
    //},300);



    thr_cli = ind;
});




    //$('.in-three .three_center .thr-cen-bot .contain')
//背景图
    for (var i=2;i<10;i++){
            var abc=i-1;
        $('.in-three .three_center .thr-cen-bot .contain:nth-child('+i+') .right').
            css('background',' url("../imgs/bg0'+abc+'.jpg") no-repeat');
    };
    for (var i=11;i<13;i++){
        var abc=i-1;
        $('.in-three .three_center .thr-cen-bot .contain:nth-child('+i+') .right').
            css('background',' url("../imgs/bg'+abc+'.jpg") no-repeat');
    };



    //三排右鼠标悬浮
    $('.in-three .three_right .thr-r-bot li').mouseenter(function(){
        var inde = $(this).index();
        var jl=inde*35+3*inde;
        $(this).css('backgroundColor','#53acb7').siblings('li').css('backgroundColor','#ffffff');
        $('.in-three .three_right .thr-r-bot li:eq('+inde+') .word').css('color','#ffffff');
        $('.in-three .three_right .thr-r-bot li:eq('+inde+')').siblings('li .word').css({'color':'#333333','backgroundColor':'#ffffff'});
        $('.in-three .three_right .thr-r-bot li:eq('+inde+') .jlpic').css('background','url("../imgs/icon.png") -'+jl+'px -202px ');

    }).mouseleave(function(){
        var inde = $(this).index();
        var jl=inde*35+3*inde;
        $(this).css('backgroundColor','#ffffff');
        $('.in-three .three_right .thr-r-bot li .word').css('color','#333333');
        $('.in-three .three_right .thr-r-bot li:eq('+inde+') .jlpic').css('background','url("../imgs/icon.png") -'+jl+'px -170px ');

    });







    //三排左边复用
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
            $(this).css({marginTop: "10px",height:'70px'}).find(":first").appendTo(this);
        })
    },2000);





    //细节
    //旋转菱形
    //$('.in-two .two_center .tw-cen-cen ul li').mouseenter(function(){
    //
    //    $('.in-two .two_center .tw-cen-cen ul li span:first-child').animate(function(){
    //        $(this).css( 'transform', 'rotateY(-180deg)');
    //        },300);
    //}).mouseleave(function(){
    //
    //    $('.in-two .two_center .tw-cen-cen ul li span:first-child').animate('transform', 'rotateY(180deg)',300);
    //});


});

















