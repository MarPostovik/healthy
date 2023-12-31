// jQuery
import $ from 'jquery';

// Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Fonts
import './fonts/stylesheet.css'

// Main styles
import './style.css'
import './responsive.css'

// OwlCarousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

let dish              = document.querySelectorAll( '.dish-item' );
let viewBtn           = document.getElementById( 'view-all-btn' );
let hideBtn           = document.getElementById( 'hide-btn' );
hideBtn.style.display = 'none';
for(let i = 0; i < dish.length; i++) {
	if(i > 2) {
		dish[i].style.display = 'none';
		viewBtn.addEventListener( 'click', function() {
			dish[i].style.display = 'flex';
			viewBtn.style.display = 'none';
			hideBtn.style.display = 'block';
		})
		hideBtn.addEventListener('click', function() {
			dish[i].style.display = 'none';
			viewBtn.style.display = 'block';
			hideBtn.style.display = 'none';
		})
	}
}
//modal form
const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

const formModal = document.querySelector('#form-modal');
const successModal = document.querySelector('#success-modal');
const form = document.querySelector('#form');

const openFormModalBtn1 = document.querySelector('#open-form-modal-btn');
const openFormModalBtn2 = document.querySelector('#orderBtn2');
const launchBtn = document.querySelector('#launch-btn');
const closeBtns = document.querySelectorAll('.close-btn');

openFormModalBtn1.addEventListener('click', () => {
    formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
})
openFormModalBtn2.addEventListener('click', () => {
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
//subscribtion form
let subscribeform = document.getElementById('subscribe-form');
let SuccessSubscribeModal = document.getElementById('success-subscribe-modal');
let SuccessSubscribeModalCLoseBtn = SuccessSubscribeModal.querySelectorAll('.close-btn');

SuccessSubscribeModalCLoseBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeSuccessSubscribeModal();
    })
})
function clearSubscribeFormFields() {
    const modalField = subscribeform.querySelectorAll('input');

    modalField.forEach( field => { 
        field.value = ''
    });
}
const closeSuccessSubscribeModal = () => {
	SuccessSubscribeModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessSubscribeModal = () => {
    SuccessSubscribeModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};
subscribeform.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(subscribeform);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
		setTimeout(openSuccessSubscribeModal, 700);
        setTimeout(closeSuccessSubscribeModal, 300);
		clearSubscribeFormFields();
      })
      .catch((error) => console.log('Sending form failed'));
})

/* -------------------
* jQuery start
* from here
* ----------------- */
$(document).ready(function () {
	let owl = $('.owl-carousel');
	owl.owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout: 10000,
		smartSpeed      : 800,
		margin          : 25,
		nav             : false,
		responsiveClass : true,
		responsive      : {
			0    : {
				items : 1,
			},
			600  : {
				items : 1,
			},
			1000 : {
				items : 2,
			}
		}
	});

	// Go to the next item
	$('.right-arrow').on('click', function() {
		owl.trigger('next.owl.carousel', [300]);
	});

	// Go to the previous item
	$('.left-arrow').on( 'click', function() {
		owl.trigger('prev.owl.carousel', [300]);
	});

	let arrow = document.querySelectorAll('.right-arrow svg');
	for(let i = 0; i < arrow.length; i++) {
		arrow[i].addEventListener( "mouseenter", function() {
			this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="28" viewBox="0 0 57 28" fill="none">
				<path d="M0 13.8919H55M55 13.8919L42.5 2M55 13.8919L42.5 26.5" stroke="#369C50" stroke-width="4" stroke-linejoin="round"/>
			</svg>`;
		});

		arrow[i].addEventListener("mouseleave", function() {
			this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="28" viewBox="0 0 39 28" fill="none">
				<path d="M-0.00012207 13.8919H36.9999M36.9999 13.8919L24.4999 2M36.9999 13.8919L24.4999 26.5" stroke="#E1E1E1" stroke-width="4" stroke-linejoin="round"/>
			</svg>`;
		});
	}
});
