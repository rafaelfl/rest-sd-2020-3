const axios = require('axios');

// axios.post('https://rest-sd-2020-3.herokuapp.com/carro', {
//     modelo: 'Corolla',
//     marca: 'Toyota',
//     cor: 'prata',
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

axios.get('https://rest-sd-2020-3.herokuapp.com/consulta')
  .then(function (response) {
    const listaDeCarros = response.data;

    console.log(listaDeCarros);

    // const primeiroCarro = listaDeCarros[0];
    // console.log("Primeiro carro: " + primeiroCarro.modelo + ", da marca " + primeiroCarro.marca + " da cor " + primeiroCarro.cor);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("Execução concluída!");
  });