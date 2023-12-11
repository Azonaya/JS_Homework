var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
function Blended(obj) {
    var i=0;
    while (i<1000){
var firstindex=(Math.round(Math.random()*1000))%(obj.length)
var secondindex=(Math.round(Math.random()*1000))%(obj.length)
var buffer = obj[firstindex];
obj[firstindex]=obj[secondindex];
obj[secondindex]=buffer;
i++}
}
Blended(arr);
console.log(arr);
