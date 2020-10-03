$(document).ready(function(){
    
    var slide = 0;
    $('.nextbtn').click(function(){
        var titik = $('.active').next().length?$('.active').next():$('.active').parent().children(':first');
        slide = slide<=300?slide+100:0;
        $('#gambar').css('transition', '0.2s ease');
        $('#gambar').css('left',-slide+'%');
        $('.active').removeClass('active');
        titik.fadeIn(1000).addClass('active');
    })

    $('.prevbtn').click(function(){
        var titik = $('.active').prev().length?$('.active').prev():$('.active').parent().children(':last');
        slide = slide>=100?slide-100:400;
        $('#gambar').css('transition', '0.2s ease');
        $('#gambar').css('left',-slide+'%');
        $('.active').removeClass('active');
        titik.fadeIn(1000).addClass('active');
    })

    $('.titik').click(function(){
        var id = $(this).attr('id');
        console.log(id);
        $('#indicator').children().removeClass('active');
        $('#'+id).addClass('active');
        if(id==1)slide=0;
        else if(id==2)slide=100;
        else if(id==3)slide=200;
        else if(id==4)slide=300;
        else if(id==5)slide=400;
        $('#gambar').css('transition', '0.2s ease');
        $('#gambar').css('left',-slide+'%');
    })
    auto();

    function auto(){
        interv = setInterval(function(){
            var active = $('.active');
            var titik = active.next().length?active.next():active.parent().children(':first');
            slide+=100;
            if(slide>400)slide=0;
            $('#gambar').css('transition', '1s ease');
            $('#gambar').animate({'left':'-='+slide+'%'},1000,function(){
                if(slide>400)slide=0;
                active.removeClass('active');
                titik.fadeIn(1000).addClass('active');
            });
        },3000);
    }

    $('#slider').on('mouseenter',function(){
        clearInterval(interv);
    }).on('mouseleave',function(){
        auto();
    })
    


})
