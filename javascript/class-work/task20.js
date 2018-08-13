/*
20. Напишите функцию JavaScript, чтобы исправить на прописную первую букву строки
*/

function firstUp(str) {
    return str.split('').reduce(function (a, b, i) {
        return i !== 0 ? a + b : a + b.toLowerCase();
    }, '');
}

let str = 'JS  —  мультипарадигменный язык программирования. ' +
    'Поддерживает объектно-ориентированный, императивный ' +
    'и функциональный стили.';

console.log(firstUp(str));