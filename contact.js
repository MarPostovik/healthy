// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fonts
import './fonts/stylesheet.css'

// Main styles
import './style.css'
import './responsive.css'

//first modal

const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

const formModal = document.querySelector('#form-modal');
const successModal = document.querySelector('#success-modal');
const form = document.querySelector('#form');

const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const launchBtn = document.querySelector('#launch-btn');
const closeBtns = document.querySelectorAll('.close-btn');

openFormModalBtn.addEventListener('click', () => {
    formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
})

const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
    successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
    successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal();
        closeSuccessModal();
    })
})

function clearFormFields() {
    const modalFields = formModal.querySelectorAll('input');
    const modaltextarea = formModal.querySelectorAll('textarea');

    modalFields.forEach( field => { 
        field.value = ''
    });
    modaltextarea.forEach( field => { 
        field.value = ''
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {

        setTimeout(() => {
            closeFormModal();
            setTimeout(openSuccessModal, 700);
            setTimeout(closeSuccessModal, 300);
            clearFormFields();
        }, 300);
      })
      .catch((error) => console.log('Sending form failed'));
})
//first modal end

const myModal2 = document.querySelector('#myModal2');
const form2 = document.querySelector('#form2');

const contactBtn = document.querySelector('#contactBtn');
const contactSubmitBtn = document.querySelector('#contact-submit-btn');
const closeBtn2 = document.querySelectorAll('.close');

contactBtn.addEventListener('click', () => {
    myModal2.classList.add(MODAL_ACTIVE_CLASS_NAME);
})

const closeFormModal2 = () => {
    myModal2.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

closeBtn2.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal2();
        closeSuccessModal();
    })
})

function clearFormFields2() {
    const modalFields = myModal2.querySelectorAll('input');
    const modaltextarea = myModal2.querySelectorAll('textarea');

    modalFields.forEach( field => { 
        field.value = ''
    });
    modaltextarea.forEach( field => { 
        field.value = ''
    });
}

form2.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form2);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {

        setTimeout(() => {
            closeFormModal2();
            setTimeout(openSuccessModal, 700);
            setTimeout(closeSuccessModal, 300);
            clearFormFields2();
        }, 300);
      })
      .catch((error) => console.log('Sending form failed'));
})