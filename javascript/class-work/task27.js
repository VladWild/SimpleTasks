/*
27. Напишите программу JavaScript для отображения свойств объекта JavaScript
*/

function showPropertiesObject(object) {
    for (var key in object) {
        console.log(key);
    }
}

let object = {
    name: 'Name',
    age: 23
};

showPropertiesObject(object);