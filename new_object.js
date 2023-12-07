//FIRST CASE. FUNCTION IS A PART OF OBJECT
var book = {
    author : "Jack London",
    nameOfBook : "The People of the Abyss",
    yearOfPublishing : "1903",
    getInfo() {
        for (let key in this) {console.log(key+" : "+this[key])}
        console.log("_________________________________________");
    }
}
book.getInfo();
book.numberOfPages = 146;
book.getInfo();
book.language = "English";
book.getInfo();

//SECOND CASE. FUNCTION IS OUTSIDE.
// function getInfo(obj) {
//     for (let key in obj) {console.log(key+" : "+obj[key])}
// }
// var book = {
//     author : "Jack London",
//     nameOfBook : "The People of the Abyss",
//     yearOfPublishing : "1903",
// }
// getInfo(book);
// console.log("___________________");
// book.numberOfPages = 146;
// getInfo(book);
// console.log("___________________");
// book.language = "English";
// getInfo(book);
// console.log("___________________");