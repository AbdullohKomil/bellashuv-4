let nameInp = document.querySelector('.name__input');
let surNameInp = document.querySelector('.surname__input');
let phoneInp = document.querySelector('.phone__input');
let emailInp = document.querySelector('.email__input');
let passwordInp = document.querySelector('.password__input');

if (localStorage.getItem('user')) {
  window.location.replace('index.html')
}

const elForm = document.querySelector('.signup__form');

const SignUp = (evt) => {
  evt.preventDefault();
  localStorage.setItem(
    'user',
    JSON.stringify({
      name: nameInp.value,
      surname: surNameInp.value,
    })
  );
};

elForm.addEventListener('submit', (evt) => {
  SignUp(evt)
  window.location.replace('index.html')
});
