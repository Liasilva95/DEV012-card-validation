import validator from "./validator.js";

// ISVALID
const buttonValidator = document.querySelector(".cardButton");
buttonValidator.addEventListener("click", numberValidator);

function numberValidator() {
  const bankInputCardNumber = document.querySelector("#cardNumber");
 
  //Obtener el # de tarjeta ingresado x el usuario
  const bankCardNumber = bankInputCardNumber.value;

  //Obtener el elemento donde se desea mostrar el resultado
  const resultButton = document.querySelector("#result"); //Reemplaza result' con el ID o selector correcto

  //Validar el # de tarjeta
  const isValidNumber = validator.isValid(bankCardNumber); // TRUE | FALSE

  //Actualizar el resultado en la interfaz de usuario
  if (bankInputCardNumber.value === "") {
    alert("Por favor, ingrese sus datos");
  }
  if (isValidNumber) {
    resultButton.textContent = "El número de tarjeta es válido";
  } else {
    resultButton.textContent = "El número de tarjeta NO es válido.";
  }
}

// MASKIFY
// Seleccionar el botón
const clickButton = document.querySelector(".cardButton");
const cardButton = document.querySelector("#cardNumber");

// Agrega un escucha de eventos al botón seleccionado
clickButton.addEventListener("click", function () {
  // Usar una funcion anonima
  cardButton.value = validator.maskify(cardButton.value); // Asignar el resultado de validator.maskify al valor cardButton
});

// LOGO DE FRANQUICIA EN INPUT CARDNUMBER
const logos = {
  // Objeto con los códigos y las imágenes de las tarjetas
  4: "./imagenes/VISA.png", // Visa
  36: "./imagenes/DINERS CLUB.png", // Diners Club
  51: "./imagenes/MASTERCARD.png", // Mastercard
  34: "./imagenes/AMERICAN EXPRESS.png", // American Express
  60: "./imagenes/DISCOVER.png", // Discover
  35: "./imagenes/JCB britanico.png", // JCB
};

// Función para mostrar el logo correspondiente al valor del input
function showLogo(value) {
  for (const code in logos) {     // Recorrer las propiedades del objeto logos
    if (value.startsWith(code)) {      // Si el valor empieza con el código de alguna tarjeta

      logo.innerHTML = "<img src='" + logos[code] + "' width='18' height='15'>"; // Mostrar el logo de esa tarjeta como imagen

      return; // Salir de la función
    }
  }
  logo.innerHTML = ""; // Si no se encontró ninguna tarjeta, borrar el logo
}

// Obtener el input y el elemento donde se mostrará el logo
const input = document.getElementById("cardNumber");
const logo = document.getElementById("logo");

// Añadir el evento input al input
input.addEventListener("input", function () {
  showLogo(this.value); //Llamar a la función showLogo pasándole el valor del input
});

// CARD  NUMBER
const numberInput = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector(".cardNumberError");

// Ingreso dinámico del número de tarjeta
numberInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  // Validando que haya una letra
  const regExp = /[A-z]/g;
  if (regExp.test(numberInput.value)) {
    showError(numberInput, cardNumberError, "Wrong format, numbers only");
  } else {
    // Agregando espacios c/4digitos, borrando espacios ingresados por usuario y borrando espacio final
    numberInput.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    hideError(numberInput, cardNumberError);
  }
});

// FUNCIONES
function showError(divInput, divError, msgError) {
  divError.innerText = msgError;
  divInput.style.borderColor = "#FF0000";
}

function hideError(divInput, divError) {
  divError.innerText = "";
  divInput.style.borderColor = "#808080";
}
