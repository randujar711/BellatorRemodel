var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

//NAME
function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
      nameError.innerHTML = 'Name is required'
      return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = 'Write your Full Name'
      return false;
  }
  nameError.innerHTML = '';
  return true;
}
//PHONE
function validatePhone(){
  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0){
      phoneError.innerHTML = 'Phone no. is required'
      return false;
  }
  if(phone.length !==10){
      phoneError.innerHTML = 'Phone no. should be 10 digits';
      return false;
  }
  if(!phone.match (/^[0-9]{10}$/)){
      phoneError.innerHTML = 'Phone no. should be 10 digits';
      return false;
  }
  phoneError.innerHTML = '';
  return true;
}
//EMAIL
function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length == 0){
      emailError.innerHTML = 'Email is required'
      return false;
  }
  if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      emailError.innerHTML = 'Email is Invalid'
      return false;
  }
  emailError.innerHTML = '';
  return true;
}
//Button
function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function(){submitError.style.display ='none';}, 3000)
    return false;
  }
}

//Email Data
function sendEmail(){
      Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "Subject",
        Body : "Name: " + document.getElementById("contact-name").value
              + "<br> Phone: " + document.getElementById("contact-phone").value
              + "<br> Email: " + document.getElementById("contact-email").value

    }).then(
      message => alert(message)
    );
}
