const btn = document.getElementById('submit');
const form = document.getElementById('form');
const nombre = document.querySelector('.nombreCompleto');
const email = document.querySelector('.email');
const telefono = document.querySelector('.telefono');
const comentarios = document.querySelector('.textArea');

(function () {
  emailjs.init('user_hCqWm2f1dBjU8MxczFLo6');
})();

const sendEmail = (e) => {
  e.preventDefault();
  validarCampos();
};

const enviarForm = (nombre, email, telefono, comentarios) => {
  emailjs.send('service_h04lqaq', 'template_lftvgwp', {
    nombre: nombre,
    email: email,
    telefono: telefono,
    comentarios: comentarios,
  });
};

const validarCampos = () => {
  if (
    nombre.value === '' ||
    email.value === '' ||
    comentarios.value === '' ||
    telefono.value === ''
  ) {
    completarCampos();
  } else {
    enviarForm(nombre.value, email.value, telefono.value, comentarios.value);
    exito();
    form.reset();
  }
};

const completarCampos = () => {
  swal({
    text: 'Todos los campos son requeridos',
    icon: 'warning',
    button: 'Cerrar',
  });
};

const exito = () => {
  swal({
    text: 'Formulario enviado con éxito!',
    icon: 'success',
    button: 'Cerrar',
  });
};

const start = () => {
  btn.addEventListener('click', sendEmail);
};

window.onload = start;
