$(document).ready(function(){
    $('.pajang img').click(function(){
        var src = $(this).attr('src');
        $('#gambar').attr('src', src);
        $('.modal').fadeIn(500);
    });

    $('.buy').click(function(){
        $('.buyform').fadeIn(500);
    });

    $('.exit,.exit1').click(function(){
        $('.modal').fadeOut(500);
        $('#form1').trigger('reset');
        $('#error').text('');
        $('.buyform').fadeOut(500);   
    });

    $('.load').click(function(){
        $(this).fadeOut(0);
        $('.more').css('display','flex').hide().fadeIn(1000);
    })

    $('#form1').submit(function(){
        var nama = $('#name').val();
        console.log(nama);
        var nama1 = nama.toUpperCase().split(" ").join("");
        for(var i=0;i<nama1.length;i++){    
            if(!(nama1[i]>='A' && nama1[i]<='Z')){
                $('#error').text('Name Must Be Alphabet');
                return false;
            }
        }
        if(nama.length<4){
            $('#error').text('Name Must Be Minimal 4 Character Length');
            return false;
        }

        var email = $('#email').val();
        var email1 = email.toUpperCase();
        if(!email1.includes('@')){
            $('#error').text('Email Must Be Valid');
            return false;
        }

        var phone = $('#phone').val();
        if(phone=="" || isNaN(phone)){
            $('#error').text('Phone Must Be A Number');
            return false;
        }

        var qty = $('#qty').val();
        if(isNaN(qty)){
            $('#error').text('Quantity Must Be A Number');
            return false;
        }
        else if(!(qty>=1 && qty<51)){
            $('#error').text('Quantity Must Be Between 1 and 50');
            return false;
        }

        var adress = $('#address').val();
        if(adress.split(" ").length <6){
            $('#error').text('Adress Must Be Minimal 6 Word');
            return false;
        }

        var agree = document.querySelector('input[name=agreement]:checked');
        if(agree==null){
            $('#error').text('User Agreement Must Be Checked');
            return false;
        } 
        window.alert('Successful Purchase');
    });
    
})
