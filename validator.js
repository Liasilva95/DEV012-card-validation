const validator = {
  // ISVALID FUNCTION
  isValid: function (cardNumber) {
    //Convertimos el # de la tarjeta en un array de digitos
    let numbers = cardNumber.toString();
    numbers = numbers.replace(/\s/g, "");

    //PASO 1: Duplicar digitos en posiciones pares (empezando del final del #)
    let sumEvenNumbers = 0;
    for (let i = numbers.length - 2; i >= 0; i -= 2) {
      const digit = parseInt(numbers.charAt(i));
      const doubleDigit = digit * 2;

      //Sumar los digitos en posiciones individuales si el resultado es mayor a 9
      sumEvenNumbers += doubleDigit > 9 ? doubleDigit - 9 : doubleDigit;
    }

    //PASO 2: Sumar los dígitos que ocupaban las posiciones impares con digitos de los productos obtenidos
    let sumOddNumbers = 0;
    for (let j = numbers.length - 1; j >= 0; j -= 2) {
      sumOddNumbers += parseInt(numbers.charAt(j));
    }

    const total = sumEvenNumbers + sumOddNumbers;

    //PASO 3: Si el resto de dividir el total /10 es igual a 0, el # es correcto
    const isCorrectNumber = total % 10 === 0;
    return isCorrectNumber;
  },

  // MASKIFY FUNCTION
  maskify: function (cardNumber) {
    const numbers = cardNumber.toString();
    const lastFour = numbers.slice(-4);
    const rest = numbers.slice(0, -4);
    const masked = rest
      .replace(/[A-Za-z0-9]/g, "#")

    return masked + lastFour;
  },
};

export default validator;
