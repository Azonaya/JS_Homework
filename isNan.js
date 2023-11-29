function isnAn(str){
strToNumber = Number(str);  
if (strToNumber == strToNumber) return false
     else
      return true 
}  



// НАБОР ДЛЯ ТЕСТА
// console.log(isnAn(NaN)); // true
// console.log(isnAn(undefined)); // true
// console.log(isnAn({})); // true

// console.log(isnAn(true)); // false
// console.log(isnAn(null)); // false
// console.log(isnAn(37)); // false

// // strings
// console.log(isnAn("37")); // false: "37" преобразуется в число 37 которое не NaN
// console.log(isnAn("37.37")); // false: "37.37" преобразуется в число 37.37 которое не NaN
// console.log(isnAn("")); // false: пустая строка преобразуется в 0 которое не NaN
// console.log(isnAn(" ")); // false: строка с пробелом преобразуется в 0 которое не NaN
// console.log(isnAn("37,5")); // true

// // Даты
// console.log(isnAn(new Date())); // false
// console.log(isnAn(new Date().toString())); // true
