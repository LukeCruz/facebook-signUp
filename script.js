const btnLogin = document.querySelector('#button-login');
const user = document.querySelector('#user-email-phone');
btnLogin.addEventListener('click', function () {
  alert(user.value);
});
const radioCustomGender = document.getElementsByName('gender')[2];
radioCustomGender.addEventListener('click', function () {
  const newAccForm = document.querySelector('.new-account');
  const genderCustom = document.createElement('input');
  genderCustom.type = 'text';
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
  newAccForm.appendChild(genderCustom);
  newAccForm.insertBefore(genderCustom, newAccForm.children[19]);
});

//JUST VALIDATE
const name = document.getElementById('emailPhone');
const password = document.getElementById('password');
const form = document.getElementById('form-register');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const error = document.getElementById('error');

form.addEventListener('submit' , (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Campos Inválidos')
  }
  if (firstname.value === '' || firstname.value == null) {
    messages.push('Campos Inválidos')
  }
  if (lastname.value === '' || lastname.value == null) {
    messages.push('Campos Inválidos')
  }
  if(password.value <= 6) {
    messages.push('Insira senha com mais de 6 digitos')
  }
  if(messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})














//const validate = new window.JustValidate('.new-account', {
  //  messages: {
    //  firstname: {
      //  required: 'Campos inválidos',
      //},
     // lastname: {
      //  required: 'Campos inválidos',
     // },
     // email: {
   //     required: 'Campos inválidos',
 //     },
     // password: {
       // required: 'Campos inválidos',
     /// },
     // birthdate: {
      //  required: 'Campos inválidos',
     // },
    //  radio: {
      //  required: 'Campos inválidos',
    //  },
  //  },
//    rules: {
    ///  primeiroNome: {
     //   required: true,
    //  },
    //  ultimoNome: {
    //    required: true,
    //  },
   //   birthdate: {
///        required: true,
     // },
   //   radio: {
 //   /    required: true,
     // },
   // },
  
 // });
 // window.onload = function () {
 //   return validate;
 // };window.onload = function () {
 //   return validate;
  //};