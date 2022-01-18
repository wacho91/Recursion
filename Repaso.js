// Importamos las clases:
const { Queue } = require('./DataStructures.js');

// Se incluyen los siguientes metodos para las estructuras de datos importadas.
// QUEUE -- enqueue -- dequeue -- size -- isEmpty


/*****************************************************************/
/*************************** Recursion ***************************/
/*****************************************************************/

// Ejercicio A.
// Implementar una funcion que retorne true o false si el numero pasado por parametro es palindromo.
// Si el número pasado por parámetro posee dígitos decimales o es negativo devolver null.
// Palindromo es una expresion que se lee igual de derecha a izquierda o viceversa.
// Ejemplo de numeros palindromos: 1001, 252, 2001, 2222, 9889.

function isPalindrome(number) {
}

/*****************************************************************/
/*********************** Recursion y Stack ***********************/
/*****************************************************************/

// Ejercicio B.
// Implementar una funcion que revierta los valores de una stack (pila).
// Ejemplo:
// 1 <- TOP
// 2
// 3
// 4
//
// Resultado:
// 4 <- TOP
// 3
// 2
// 1

Queue.prototype.reverseStack = function () {};

// NO BORRAR NI TOCAR NI AGREGAR NADA DEBAJO DE ESTA LINEA!!!!!
module.exports = {
    Queue,
    isPalindrome,
};
