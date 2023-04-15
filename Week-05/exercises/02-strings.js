console.log('-------------------------EXERCISE 2 : STRINGS-------------------------');

/* a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('------------EXERCISE 2.a------------');

var company = 'radium rocket';
var companyUppercase = company.toUpperCase();

console.log(companyUppercase);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('------------EXERCISE 2.b------------');

var myTeam = 'LosAngelesLakers';
var myTeamCut = myTeam.substring(0,5);

console.log(myTeamCut);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('------------EXERCISE 2.c------------');

var lab = 'laboratory';
var lastThreeLetters = lab.substring(lab.length - 3);

console.log(lastThreeLetters);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('------------EXERCISE 2.d------------');

var radiumRocket = 'bootcamp2023';
var firstUppercase = radiumRocket.substring(0,1).toUpperCase() + radiumRocket.substring(1).toLowerCase();

console.log(firstUppercase);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('------------EXERCISE 2.e------------');

var company = 'Radium Rocket Company';
var companySpaceIndex = company.indexOf(' ');

console.log(companySpaceIndex);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('------------EXERCISE 2.f------------');

var longString = 'megarocketgym radiumrocket';
var spaceIndex = longString.indexOf(' ');
var firstLetter = longString.substring(0,1).toUpperCase();
var firstWord = longString.substring(1, spaceIndex).toLowerCase();
var secondLetter = longString.substring(spaceIndex + 1, spaceIndex + 2).toUpperCase();
var secondWord = longString.substring(spaceIndex + 2).toLowerCase();

var upperCaseFirstLetters = firstLetter + firstWord + ' ' + secondLetter + secondWord;

console.log(upperCaseFirstLetters);
