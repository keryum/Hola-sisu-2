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
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('#servicios-cards-container')

inicioNav.addEventListener('click', scrollToInicio);
serviciosNav.addEventListener('click', scrollToServicios);
nosotrosNav.addEventListener('click', scrollToNosotros);
metodologiaNav.addEventListener('click', scrollToMetodologia)
contactoNav.addEventListener('click', scrollToContacto)
prev.addEventListener('click', () => {
    slider.scrollLeft -=300
});
next.addEventListener('click', () => {
    slider.scrollLeft +=300
});

function scrollToServicios() {
    servicios.scrollIntoView()
}

function scrollToInicio() {
    inicio.scrollIntoView()
}

function scrollToNosotros() {
    nosotros.scrollIntoView()
}

function scrollToMetodologia() {
    metodologia.scrollIntoView()
}

function scrollToContacto() {
    contacto.scrollIntoView({block:'center'})
}
