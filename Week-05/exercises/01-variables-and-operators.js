console.log('-------------------------EXERCISE 1 : VARIABLES AND OPERATORS-------------------------');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar
 el valor de la suma de ambos números en una 3er variable. */

console.log('------------EXERCISE 1.a------------');

var numOne = 7;
var numTwo = 9;

var result = numOne + numTwo;

console.log(result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('------------EXERCISE 1.b------------');

var myName = 'Mauro';
var myLastName = 'Caffesse';

var fullName = myName + ' ' + myLastName;

console.log(fullName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length). */

console.log('------------EXERCISE 1.c------------');

var myCity = 'Rosario';
var myCountry = 'Argentina';

var sumLetters = myCity.length + myCountry.length;

console.log(sumLetters);