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

inicioNav.addEventListener('click', scrollToInicio);
serviciosNav.addEventListener('click', scrollToServicios);
nosotrosNav.addEventListener('click', scrollToNosotros);
metodologiaNav.addEventListener('click', scrollToMetodologia)
contactoNav.addEventListener('click', scrollToContacto)


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
