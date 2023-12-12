const form = document.querySelector('.form')
form,addEventListener('submit', sendEmail)

const serviceId = 'service_8ik5uag'
const templateId = 'template_2utet7j'
const apikey = '9q2FoRS8-kHYODnZb'

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,form,apikey)
    .then( result =>Swal.fire("enviado con exito"))
}

let titulo = document.querySelector('#navegacion')

p.addEventListener('hover',function() {
  let navegacion = navegacion.getAttribute('scale')
  if( navegacion == 'scale: 2;'){
    navegacion.setAttribute('scale','scale: 3;')
  }else{
    navegacion.setAttribute('scale','scale 4;')
  }
})
