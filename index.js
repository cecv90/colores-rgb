// Seleccionar los colores por su id input
const inputRojo= document.getElementById('rojo');
const inputVerde= document.getElementById('verde');
const inputAzul= document.getElementById('azul');

// Seleccionar con el id parrafo
const textoRojo = document.getElementById('texto-rojo');
const textoVerde= document.getElementById('texto-verde');
const textoAzul= document.getElementById('texto-azul');

//Valores para clasificar el color rgb, los valores debe estar en el rango[0,255].
let rojo =inputRojo.value;
let verde=inputVerde.value;
let azul=inputAzul.value;

textoRojo.textContent = inputRojo.value;
textoVerde.textContent =inputVerde.value;
textoAzul.textContent =inputAzul.value;

//función para actulizar el color.
const actualizarColor = () =>{
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor =colorRGB;
}

//Para actualizar rojo.
inputRojo.addEventListener('change', (e) =>{
    rojo = e.target.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul);
});

//Código para crear el Verde
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul);
});

//Código para crear el Azul
inputAzul.addEventListener('change', (e) => {
    azul= e.target.value;
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul)
});