/*
12. Напишите функцию JavaScript для сортировки следующего массива объектов
по названию значения с использованием метода сортировки:

    var library =   [
        {  author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        {  author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        {  author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The
         Hunger Games', libraryID: 3245}
    ];
*/

function compareAuthor(a, b) {
    if (a.author > b.author) return 1;
    if (a.author < b.author) return -1;
}

function compareTitle(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
}

function compareID(a, b) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
}

function Book(author, title, id) {
    this.author = author;
    this.title = title;
    this.id = id;
}

let library = [new Book('Bill Gates', 'The Road Ahead', 1254),
    new Book('Steve Jobs', 'Walter Isaacson', 4264),
    new Book('Suzanne Collins', 'Mockingjay: The Final Book of The Hunger Games', 3245)];

console.log(library);
console.log("-----------------------------------------------------------");
console.log(library.sort(compareAuthor));
console.log("-----------------------------------------------------------");
console.log(library.sort(compareTitle));
console.log("-----------------------------------------------------------");
console.log(library.sort(compareID));
