function checkProbabilityTheory(count)  {
var even_counter=0;
var odd_counter=0;
for (i=0; i<count; i++) {
    var Buffer = Math.round(Math.random()*1000);
    Buffer<100 ? i-- :
         Buffer%2==0 ? even_counter++ : odd_counter++
    }
return Answer =("Total was generated "+count+" numbers\n"+ "Even Numbers = "+even_counter+", Odd Numbers = "+odd_counter+"\nRatio even numbers to odd numbers = "+((even_counter/count)*100).toFixed(4) + "% to "+ ((odd_counter/count)*100).toFixed(4)+"%"); 
}
console.log(checkProbabilityTheory(10000));