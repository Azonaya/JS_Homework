var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
    {
        userName:"John",
        lastName:"",
        email:"joe.bead@gmail.ru" 
    }, 
    {
        userName:"Vasya",
        lastName:"",
        email:"vasya.gegor12@yahoo.com" 
    },
    {
        userName:"Kate",
        lastName:"",
        email:"kate.suuuper999@gmail.com" 
    },
];

var reg = /[a-zA-Z0-9]+@(gmail|yahoo)\.com/
var newArray=[];
arr.forEach((element) => {
if(element.email.match(reg)) {newArray.push(element)}
})
console.log("The new Array", newArray);