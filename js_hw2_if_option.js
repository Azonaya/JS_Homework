var readline = require('readline-sync');
var Age = readline.question("Введіть Ваш вік: \n");
Age = Number(Age);
if (isNaN(Age)||!Age||Age<0)console.log("Вибачте але це не число. Спробуйте ще раз.");
else {
    var definitor=Age%100;
    if(10<definitor && definitor<15) console.log("Вам " + Age + ' років');
        else {
        var definitor = definitor%10;
        if (definitor==1) console.log("Вам " + Age + ' рік');
        else    {
            if (1<definitor && definitor<5) console.log("Вам " + Age + ' роки');
            else console.log("Вам " + Age + ' років');
                }
             }
    }