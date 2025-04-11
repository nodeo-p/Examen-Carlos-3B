function saludar() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        alert ("Hola "+ nombre + ", suerte en tu examen");
    } else {
        alert("Por fabvor ingrese tu un nombre válido.");
    }

}

function calcularCuadrado() {
    let entrada = prompt("Ingresa un número:");
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
      alert("Eso no es un número válido.");
    } else {
      let cuadrado = numero * numero;
      alert("El cuadrado de " + numero + " es: " + cuadrado);
}
}