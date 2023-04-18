console.log('-------------------------EXERCISE 5 : FOR-------------------------');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando
un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras. */

console.log('------------EXERCISE 5.a------------');

var myArray = ['radium', 'rocket', 'javaScript', 'bootcamp', 'march2023'];

for (var i = 0; i < myArray.length; i++) {
  alert(myArray[i]);
};

console.log('------------EXERCISE 5.b------------');

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y
mostrar una alerta por cada palabra modificada.*/

var myArray = ['radium', 'rocket', 'javaScript', 'bootcamp', 'march2023'];

for (var i = 0; i < myArray.length; i++) {
  var firstLetUpperCase = myArray[i][0].toUpperCase() +
  myArray[i].substring(1).toLowerCase();
  
  alert(firstLetUpperCase);
};

/* c. Crear una variable llamada “sentence” que tenga un string vacío,
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
Al final mostrar una única alerta con la cadena completa.*/

console.log('------------EXERCISE 5.c------------');

var myArray = ['radium', 'rocket', 'javaScript', 'bootcamp', 'march2023'];
var sentence = '';

for (var i = 0; i < myArray.length; i++) {
  sentence += myArray[i];
  if (i < myArray.length - 1) {
    sentence += ' ';
  }
};

alert(sentence);

/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/

console.log('------------EXERCISE 5.d------------');

var mauroArray = [];

for (var i = 0; i < 10; i++) {
  mauroArray.push(i);  
}

console.log(mauroArray);