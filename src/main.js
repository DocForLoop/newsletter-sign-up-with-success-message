import './scss/style.scss';

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const dialog = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__button');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const modalEmail = document.querySelector('.modal__email');

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.email === '' || !emailPattern.test(data.email)) {
        emailError.textContent = 'Valid email required';
        emailInput.classList.add('error');
    } else {
        modalEmail.textContent = data.email;
        dialog.showModal();

    }
};

emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value;
    if (emailValue !== '' && emailPattern.test(emailValue)) {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }
});

form.addEventListener('submit', handleSubmit);

closeBtn.addEventListener('click', () => {
    dialog.close();
    modalEmail.textContent = '';
});