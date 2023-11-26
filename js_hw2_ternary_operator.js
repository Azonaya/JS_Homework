var readline = require('readline-sync');
var Age = readline.question("Введіть Ваш вік: \n");
Age = Number(Age);
var DefineToTen=Age%100;
var DefineToUnit=Age%10;
isNaN(Age)||!Age||Age<0 ? console.log("Вибачте але це не число. Спробуйте ще раз.") 
                : 10<DefineToTen && DefineToTen<15 ? console.log("Вам " + Age + ' років')
                : DefineToUnit==1 ? console.log("Вам " + Age + ' рік') 
                : 1<DefineToUnit && DefineToUnit<5 ? console.log("Вам " + Age + ' роки')
                : console.log("Вам " + Age + ' років')