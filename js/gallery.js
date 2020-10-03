$(document).ready(function(){
    
    $('.image').click(function(){
        var src = $(this).children('img').attr('src');
        $('#gambar').attr('src', src);
        $('.modal').fadeIn(1000);
    })

    $('.exit').click(function(){
        $('.modal').fadeOut(1000);
    })
    
})
