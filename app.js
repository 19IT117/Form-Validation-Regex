document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validator(re,className){
  if(!re.test(className.value)){
    className.classList.add('is-invalid');
  }else{
    className.classList.remove('is-invalid');
  }
}
function validateEmail(){
  const email = document.getElementById('email');
  const re = /^[\w\.\-]+@[\w\.\-]+\.\w{2,5}$/;
  validator(re,email);s
}
function validateName(){
  const name = document.getElementById('name');
  const re = /^[A-Za-z]{2,10}$/;
  validator(re,name);
}
function validateZip(){
  const zip = document.getElementById('zip');
  const re = /^\d{6}$/;
  validator(re,zip);
}
function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /^\+\d+\s\d{5}[\s\-]?\d{5}$/;
  validator(re,phone);
}