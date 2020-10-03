function checkForm(){
    var nama = document.getElementById('name').value;
    var nama1 = nama.toUpperCase().split(" ").join("");
    for(var i=0;i<nama1.length;i++){    
        if(!(nama1[i]>="A" && nama1[i]<="Z")){
            error.innerHTML = "Name Must Be Alphabet";
            return false;
        }
    }
    if(nama.length<4){
        error.innerHTML = "Name Must Be Minimal 4 Character Length";
        return false;
    }

    var email = document.getElementById('email').value;
    var email1 = email.toUpperCase();
    if(!email1.includes('@')){
        error.innerHTML = "Email Must Be Valid";
        return false;
    }
    
    var phone = document.getElementById('phone').value;
    if(phone=="" || isNaN(phone)){
        error.innerHTML = "Phone Must Be A Number";
        return false;
    }

    var type = document.getElementById("ticketType");
    var typeval = type[type.selectedIndex].value;

    var adress = document.getElementById("address").value;
    if(adress.split(" ").length <6){
        error.innerHTML = "Adress Must Be Minimal 6 Word";
        return false;
    }

    var agree = document.querySelector("input[name=agreement]:checked");
    if(agree==null){
        error.innerHTML = "User Agreement Must Be Checked";
        return false;
    }

    if(submitform(nama,email,phone,typeval,adress)==false){
        return false;
    }
    else{
        error.innerHTML = 'Success';
        error.style.color = 'Green';
    }
}

function submitform(nama,email,phone,typeval,adress){
    var confirmdata = window.confirm("Confirm Data"+"\nNama : "+ nama+"\nEmail : "+email+"\nPhone : "+phone+"\nTicket Type : "+typeval+"\nAdress : "+adress);
    if(confirmdata==false)return false;
}