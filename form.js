// codigo para el formulario
var app = new Vue({
el: '#myform',
data: {
    errors: [],
    nombre: null,
    apellidos: null,
    email: null,
    telefono: null,
    sugerencia: null
   },
   methods:{
   	validateForm: function(e){
        this.errors = [];
  
        if (!this.nombre) {
          this.errors.push("El nombre es obligatorio.");
        }
        if (!this.apellidos) {
            this.errors.push("El apellido es obligatorio.");
        }
        if (!this.email) {
          this.errors.push('El correo electrónico es obligatorio.');
        }
        if (!this.telefono) {
            this.errors.push("El teléfono es obligatorio.");
        }
        if (!this.sugerencia) {
            this.errors.push("La sugerencia es obligatorio.");
        }
        if (!this.errors.length) {
          return true;
        }
        e.preventDefault();
      },
   	}
   }
 )

// codigo para las sugerencias
const respuesta = document.querySelector("#respuesta");
 document.addEventListener("DOMContentLoaded", llamarAPI);

async function llamarAPI(){
  const respuesta = await fetch("data.json")
  const data = await respuesta.json()
  mostrarHTML(data)
  // fetch("data.json")
  // .then(resp => resp.json())
  // .then((data) => mostrarHTML(data))
 }
 function mostrarHTML(datos){
    datos.forEach(item => {
      const row = document.createElement(`tr`);
      row.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.sugerencia}</td>
      `
      respuesta.appendChild(row)
    });
 }

