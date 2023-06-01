const inicioNav = document.querySelector('#inicio-nav')
const serviciosNav = document.querySelector('#servicios-nav')
const nosotrosNav = document.querySelector('#nosotros-nav')
const metodologiaNav = document.querySelector('#metodologia-nav')
const contactoNav = document.querySelector('#contacto-nav')
const inicio = document.getElementById('inicio')
const servicios = document.querySelector('#servicios')
const nosotros = document.querySelector('#quienes-somos')
const metodologia = document.querySelector('#como-trabajamos')
const contacto = document.querySelector('#contactanos')
const mobileNavbarCloseBtn = document.querySelector('.mobile-navbar-close-btn')
const mobileNavbarOpenBtn = document.querySelector('.mobile-navbar-open-btn')
const mobileNavbar = document.querySelector('.mobile-navbar')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('#servicios-cards-container')

inicioNav.addEventListener('click', scrollToInicio);
serviciosNav.addEventListener('click', scrollToServicios);
nosotrosNav.addEventListener('click', scrollToNosotros);
metodologiaNav.addEventListener('click', scrollToMetodologia);
contactoNav.addEventListener('click', scrollToContacto);
mobileNavbarOpenBtn.addEventListener('click', showMobileNavbar);
mobileNavbarCloseBtn.addEventListener('click', closeMobileNavbar);
prev.addEventListener('click', () => {
    slider.scrollLeft -=300
});
next.addEventListener('click', () => {
    slider.scrollLeft +=300
});

function showMobileNavbar() {
    mobileNavbar.classList.toggle('inactive')
}

function closeMobileNavbar() {
    mobileNavbar.classList.add('inactive')
}

function scrollToServicios() {
    servicios.scrollIntoView()
    closeMobileNavbar()
}

function scrollToInicio() {
    inicio.scrollIntoView()
    closeMobileNavbar()
}

function scrollToNosotros() {
    nosotros.scrollIntoView()
    closeMobileNavbar()
}

function scrollToMetodologia() {
    metodologia.scrollIntoView()
    closeMobileNavbar()
}

function scrollToContacto() {
    contacto.scrollIntoView({block:'center'})
    closeMobileNavbar()
}
