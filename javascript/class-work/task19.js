/*
19. Напишите функцию JavaScript, чтобы разбить строку и преобразовать ее в массив слов
*/

function getArray(str) {
    return str.split(" ")
        .filter((item) => item !== '');
}

let str = 'JS  —  мультипарадигменный язык программирования. ' +
    'Поддерживает объектно-ориентированный, императивный ' +
    'и функциональный стили.';

console.log(getArray(str));