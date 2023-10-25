// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fonts
import './fonts/stylesheet.css'

// Main styles
import './style.css'
import './responsive.css'

let arrowDown = document.querySelectorAll('ion-icon');
console.log(arrowDown)
var acc = document.getElementsByClassName("accordion");   
var panel;
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";

            } else {
                panel.style.display = "block";
                
            }
        });
    }

    for (let i = 0; i < arrowDown.length; i++) {
        acc[i].addEventListener("click", function() {
            if (panel.style.display === "block") {
                arrowDown[i].setAttribute("name", "chevron-up");
            }else{
                arrowDown[i].setAttribute("name", "chevron-down");
            }
        });
    }

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
    
        modalFields.forEach( field => { 
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
