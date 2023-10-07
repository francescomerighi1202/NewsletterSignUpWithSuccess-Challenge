let emailForm = document.querySelector('.form-input');
let errorText = document.querySelector('.error-text');
let submitBtn = document.querySelector('.form-button');

let mainCard = document.querySelector('.card');
let successCard = document.querySelector('.success-card');

let userMail = document.querySelector('.user-email');

let dismissBtn = document.querySelector('.success-button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let email = emailForm.value;
    let checked = checkEmail(email);

    if (!checked) {
        errorText.style.display = 'block';
        emailForm.classList.add('form-error');
    } else {
        mainCard.style.animation = 'fadeOut .5s ease-in-out forwards';

        mainCard.addEventListener('animationend', () => {
            mainCard.style.display = 'none';
            mainCard.style.animation = '';
        });

        setTimeout(() => {
            successCard.style.display = 'block';
            successCard.style.animation = 'fadeIn .5s ease-in-out forwards';
        }, 1000);

        userMail.innerHTML = email;
    }
});

emailForm.addEventListener('focus', () => {
    errorText.style.display = 'none';
    emailForm.classList.remove('form-error');
});

dismissBtn.addEventListener('click', () => {
    location.reload();
});

function checkEmail(email) {
    if (!(email.includes('@')) || email === '') {
        return false;
    } else {
        return true;
    }
}