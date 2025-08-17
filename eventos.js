
let Boton = document.getElementById('btn');
let Div = document.getElementById('div');

Boton.addEventListener('click', (evento) => {
  evento.stopPropagation();
  alert('Hola!');
  console.log('Hiciste clic en el botón');
});

Div.addEventListener('click', (evento) => {
  alert('Hola! Soy el div!');
  console.log('Hiciste clic en el div');
});