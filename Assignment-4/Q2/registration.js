document.getElementsByTagName('form')[0].addEventListener('submit',(event)=>{
    let valid = 1;
    let error_text=''
    const fname = document.getElementById("fname").value;
    if(fname == '' && valid == 1){
        error_text = '*Please Enter Your First Name!';
        valid = 0;
    }
    console.log(fname);
    const lname = document.getElementById("lname").value;
    if(lname == '' && valid == 1){
        error_text = '*Please Enter Your Last Name!';
        valid = 0;
    }
    console.log(lname);
    const email = document.getElementById("email").value;
    if(email == '' && valid == 1){
        error_text = '*Please Enter Your Email!';
        valid = 0;
    }
    console.log(email);
    const phone = document.getElementById("phone").value;
    if(phone == '' && valid == 1){
        error_text = '*Please enter your phone number!';
        valid = 0;
    }

    console.log(phone);
    
    const gender_values
= document.getElementsByName('gender');
let gender= '';
for(let i=0; i<gender_values.length; i++) {
        if(gender_values[i].checked) {
            gender=gender_values[i].value
    }
}
if(gender == '' && valid == 1){
    error_text = '*Please Select Your Gender!';
    valid = 0;
}
console.log(gender);
const address = document.querySelector("#address").value;
if(address == '' && valid == 1){
    error_text = '*Please Enter Your Address!';
    valid = 0;
}
console.log(address);
const pin = document.getElementById("pin").value;
if(pin == '' && valid == 1){
    error_text = '*Please Enter Your PIN Number!';
    valid = 0;
}
console.log(pin);
const password = document.getElementById("password").value;
if(password == '' && valid == 1){
    error_text = '*Please Enter Your Password!';
    valid = 0;
}
console.log(password);
const confirmpassword = document.getElementById("confirmpassword").value;
if(confirmpassword == '' && valid == 1){
    error_text = '*Please Enter Your Confirmed Password!';
    valid = 0;
}
console.log(confirmpassword);

const check = document.querySelector("#agree").checked ? document.querySelector("#agree").value : '';
    if(check == '' && valid == 1){
        error_text = '*Please Check The Terms And Conditions!';
        valid = 0;
}
console.log(check)

if(valid == 0 && error_text!=''){
    document.querySelector(".error_message").style.display='block';
    document.querySelector(".error_message").innerText= error_text;
    document.querySelector(".error_message").style.color='red';
}
event.preventDefault();
})