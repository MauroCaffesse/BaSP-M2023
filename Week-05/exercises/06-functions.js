console.log('-------------------------EXERCISE 6 : FUNCTIONS-------------------------');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable,
mostrando el valor de dicha variable en la consola del navegador.*/

console.log('------------EXERCISE 6.a------------');

var sum = function(a, b) {
  return a + b;
}

var sumResult = sum(20, 3);

console.log(sumResult);

/* b. Copiar la función suma anterior y agregarle una validación para controlar
si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.*/

console.log('------------EXERCISE 6.b------------');

var sum = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('One or both parameters is/are not a number');
    return NaN;
  } else {
    return a + b;
  }
};

var sumResult = sum(20, 3);

console.log(sumResult);

/* c. Crear una función “validateInteger” que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

console.log('------------EXERCISE 6.c------------');

var validateInteger = function(a) {
  return a % 1 === 0;
};

var validateResult = validateInteger(23);

console.log(validateResult);

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error
y retornar el número convertido a entero (redondeado). */

console.log('------------EXERCISE 6.d------------');

var exerciseD = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('One parameter is not a number');
    return NaN;
  }
  if (!validateInteger(a)) {
    alert(a + ' is not an integer number');
    return Math.round(a);
  }
  if (!validateInteger(b)) {
    alert(b + ' is not an integer number');
    return Math.round(b);
  }
  return a + b;
};

var exerciseDResult = exerciseD(20, 3);

console.log(exerciseDResult);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
función probando que todo siga funcionando igual que en el apartado anterior. */

console.log('------------EXERCISE 6.e------------');

var validationFusion = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('One parameter is not a number');
    return NaN;
  }
  if (!validateInteger(a)) {
    alert(a + ' is not an integer number');
    return Math.round(a);
  }
  if (!validateInteger(b)) {
    alert(b + ' is not an integer number');
    return Math.round(b);
  }
  return true;
};

var finalFunction = function(a, b) {
  var finalValidation = validationFusion(a, b);
  if (finalValidation === true) {
    return a + b;
  } 
  return finalValidation;
};

var finalResult = finalFunction(20, 3);

console.log(finalResult);