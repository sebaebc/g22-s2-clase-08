// Estableciendo el llamado a la libreria Axios
// const axios = require('axios');

// Nuestras variables
let base_url = 'https://rickandmortyapi.com/api';
let personajes = undefined;

// Petición al servidor de Rick y Morty para obtener los personajes
axios.get(base_url + '/character')
  .then(function (response) {
    // Funcionó
    // Mostrar el mensaje de alerta de exito
    personajes = response.data.results;
    
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