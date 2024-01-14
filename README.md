# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Hito: Criterios de aceptación mínimos del proyecto](#4-hito-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Consideraciones técnicas](#6-consideraciones-técnicas)
* [5. Diseño inicial y final del producto](#7-Diseño-inicial-(Figma),-final-localhost:3000)
***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn) conocido como algoritmo de módulo 10, es un método de suma de verificación utilizado para validar números de identificación como el IMEI de los celulares y tarjetas de crédito.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 2. Resumen del proyecto

En este proyecto se construye una aplicación web que le permita a un
usuario validar el número de una tarjeta de crédito. Además, tendrás que
implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos
los últimos cuatro.

## 3. Hito: Criterios de aceptación mínimos del proyecto

**1. Una interfaz que permite a la usuaria:**

* Insertar un número (texto) que quieres validar. Usa solo caracteres numéricos
  (dígitos) en la tarjeta a validar [0-9].  
* Ver si el resultado es válido o no.  
* Ocultar todos los dígitos del número de tarjeta a exepción de los últimos
  4 caracteres.  
* No debes poder ingresar un campo vacío.  
* Hito Opcional: Mostrar la franquicia de tarjeta

* Principales usuarios de producto.
Los principales usuarios de este producto son aquellos que necesitan validar y verificar la autenticidad de números de tarjetas, en particular, aquellos vinculados a transacciones financieras. Esto incluye a individuos que desean asegurarse de la validez de sus propias tarjetas de crédito y profesionales que trabajan en entornos financieros, como instituciones bancarias o empresas que procesan transacciones con tarjetas. La interfaz diseñada facilita a los usuarios la inserción y validación de números de tarjeta, ofreciendo una funcionalidad clara para determinar si el resultado es válido o no. La ocultación de la mayoría de los dígitos, excepto los últimos 4, sugiere una atención a la privacidad y seguridad de la información del usuario, lo que puede atraer especialmente a aquellos preocupados por la protección de sus datos financieros. Además, la capacidad opcional de mostrar la franquicia de tarjeta puede ser útil para usuarios que deseen confirmar el tipo de tarjeta que están utilizando.

* Objetivos de estos usuarios en relación con tu producto.
Los objetivos de los usuarios en relación con este producto son:

**1. Validación de Tarjetas de Crédito:**
Verificar la autenticidad y validez de los números de tarjetas de crédito.
Asegurarse de que las transacciones financieras se realicen con información de tarjeta válida y legítima.

**2. Privacidad y Seguridad:**
Utilizar la funcionalidad de ocultar la mayoría de los dígitos, excepto los últimos 4, para garantizar la confidencialidad de la información de la tarjeta.
Garantizar que la herramienta no permita el ingreso de campos vacíos, fortaleciendo la seguridad de la validación.

**3. Identificación de Franquicia:**
Opcionalmente, confirmar la franquicia de la tarjeta para asegurarse de que estén utilizando el tipo correcto de tarjeta en sus transacciones.

**4. Eficiencia en la Validación:**
Realizar la validación de manera eficiente y sin complicaciones a través de una interfaz fácil de usar, especialmente para usuarios que trabajan en entornos financieros y necesitan realizar esta verificación de manera rápida y precisa.
En resumen, los usuarios buscan una herramienta que les permita validar fácilmente los números de tarjeta, garantizando la seguridad y privacidad de la información, y ofreciendo eficiencia en el proceso de validación para facilitar transacciones financieras seguras.

* Cómo crees que el producto que estás creando está resolviendo sus problemas.
El producto que estoy creando aborda de manera efectiva las necesidades y problemas de los usuarios al proporcionar una interfaz diseñada para facilitar la validación de números de tarjetas de crédito. Aquí están algunas maneras en que el producto resuelve los problemas identificados:

**1. Validación Eficiente:**
La interfaz permite a los usuarios insertar números de tarjetas y verificar instantáneamente su validez. Esto resuelve el problema de validar eficientemente la autenticidad de los números de tarjeta, lo cual es esencial para transacciones financieras seguras.
![A través del algoritmo de Lhun se comprueba su validez de los números ingresados](./src/imagenes/VALIDEZ%20DE%20TARJETA.png)

**2. Privacidad y Seguridad:**
La función de ocultar la mayoría de los dígitos, excepto los últimos 4, aborda las preocupaciones de privacidad y seguridad, permitiendo a los usuarios realizar la validación sin revelar la información completa de la tarjeta. Además, la restricción de no permitir campos vacíos contribuye a la seguridad al evitar entradas incompletas o malintencionadas.
![Enmascaramiento de numeros, solo mostrar los 4 digitos finales](./src/imagenes/ENMASCARAMIENTO%20DE%20NUMEROS.png)

**3. Identificación de Franquicia (opcional):**
La capacidad opcional de mostrar la franquicia de la tarjeta cumple con el objetivo de algunos usuarios de confirmar el tipo de tarjeta que están utilizando, proporcionando información adicional según sea necesario.
![Imagen de identificacion de franquicia](./src/imagenes/IDENTIFICACCION%20DE%20FRANQUICIA.png)

**4. Interfaz Amigable:**
La interfaz fácil de usar facilita a los usuarios, tanto individuales como profesionales financieros, realizar la validación de manera rápida y sin complicaciones. Esto aborda la necesidad de eficiencia en el proceso.

En conjunto, el producto se posiciona como una solución integral que no solo aborda la validación de tarjetas de crédito, sino que también considera la privacidad, seguridad y eficiencia en la experiencia del usuario, satisfaciendo así los objetivos y necesidades identificados de los usuarios.

## 4. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript.

El boilerplate contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

### Descripción de scripts / archivos

* `README.md`: explica la información necesaria para el uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a la aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo contiene las reglas de estilo. 
* `src/validator.js`: acá debes implementar el objeto `validator`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`validator`) debe contener dos
  métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

* `src/index.js`: acá se escucha eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualiza el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests `validator.isValid()` y `validator.maskify()`.
***

### 5. Diseño inicial y final del producto

* Diseño inicial del producto (Figma) 
(https://www.figma.com/file/Ied00TeAmWvs7RzHiZnPYm/Untitled?type=design&mode=design&t=GCOXtL0S34JoQVQM-0)
* Diseño final del producto (Pagina web)
(localhost:3000)

***