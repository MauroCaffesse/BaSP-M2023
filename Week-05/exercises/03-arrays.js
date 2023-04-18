console.log('-------------------------EXERCISE 3 : ARRAYS-------------------------');

/* a. Dado el siguiente array:
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
 "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log('------------EXERCISE 3.a------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

console.log(months[4], months[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log('------------EXERCISE 3.b------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

var alphabetMonth = months.sort();

console.log(alphabetMonth);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log('------------EXERCISE 3.c------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

months.unshift('Radium');
months.push('Rocket');

console.log(months);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

console.log('------------EXERCISE 3.d------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

months.shift();
months.pop();

console.log(months);

/* e. Invertir el orden del array (utilizar reverse).*/

console.log('------------EXERCISE 3.e------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

months.reverse();

console.log(months);

/* f. Unir todos los elementos del array en un único string
donde cada mes este separado por un guión - (utilizar join). */

console.log('------------EXERCISE 3.f------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

var monthString = months.join('-');

console.log(monthString);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

console.log('------------EXERCISE 3.g------------');

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

var newMonthArray = months.slice(4, 11);

console.log(newMonthArray);