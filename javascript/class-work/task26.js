/*
26. Напишите программу JavaScript, чтобы получить длину объекта JavaScript
*/

function getLengthObject(object) {
    return Object.keys(object).length;
}

let object = {
    name: 'Name',
    age: 23
};

console.log(getLengthObject(object));