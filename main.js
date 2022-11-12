// Estableciendo el llamado a la libreria Axios
// const axios = require('axios');

// Nuestras variables
let base_url = 'https://rickandmortyapi.com/api';
let personajes = undefined;

//Objeto Personaje
class personaje{
  constructor( Nombre, Especie, Imagen ){
    this.Nombre = Nombre;
    this.Especie = Especie;
    this.Imagen = Imagen;
  }
}

// Petición al servidor de Rick y Morty para obtener los personajes
axios.get(base_url + '/character')
  .then(function (response) {
    // Funcionó
    // Mostrar el mensaje de alerta de exito
    personajes = response.data.results;
    personajes.map((item) => {
      console.log(item.name);
      let personaje1 = new personaje(item.name,item.species,item.image)
      api.innerHTML += `<div class="container-img"><h1>${personaje1.Nombre}</h1><p>${personaje1.Especie}</p><img src="${personaje1.Imagen}"/></div>`;
    });
    console.log(personajes);
    document.getElementById('js-alerta-success').classList.add('d-block')
    document.getElementById('js-nombre').innerHTML = personajes[0].name;
  })
  .catch(function (error) {
    // No funcionó
    // Mostrar el mensaje de alerta de error
    //console.log(error);
    document.getElementById('js-alerta-error').classList.add('d-block')

  })
  .then(function () {
    // Siempre se ejecuta
    // Mostrar el mensaje de alerta de cargando

  });


  // function show(params){
  //   insertar html
  // }