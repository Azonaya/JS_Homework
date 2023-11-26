var readline = require('readline-sync');
var result;
var MeasureUnit = readline.question("Hello. This is the converter.\nPlease choose the Units to Convert: \n 1. Kilometers to meters; \n 2. Hours to minutes; \n 3. Kilograms to grams; \n(enter 1, 2 or 3)\n");
MeasureUnit=Number(MeasureUnit);
var Quantity = readline.question("Please enter a quantity\n");
Quantity=Number(Quantity);
if (isNaN(Quantity)||!Quantity||Quantity<0)  MeasureUnit=0
 switch (MeasureUnit) {
    case 1:
        result = Quantity*1000;
        console.log(Quantity +' Kilometers are ' + result + ' meters');
        break;
    case 2:
        result = Quantity*60;
        console.log(Quantity +' Hours are ' + result + ' minutes');
        break;
    case 3:
        result = Quantity*1000;
        console.log(Quantity +' Kilograms are ' + result + ' grams');
        break;
    default:
        console.log('You have made a mistake when choosing a measurement unit or entered not a correct number\nPlease try again.'); }