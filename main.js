let varlorEnDolar = 155.50;

let cotizacionEnPesos = 3.861;

let valorEnPeso = varlorEnDolar * cotizacionEnPesos

var userInput = prompt("Por favor, ingresa su nombre:");


if (userInput !== null) {

    console.log("Mensaje ingresado por el usuario: " + userInput);
} else {

    console.log("El usuario canceló la entrada.");
}

valorEnPeso = valorEnPeso.toFixed(2)
alert(userInput + " tu cotizacion es")
alert("$" + valorEnPeso)

