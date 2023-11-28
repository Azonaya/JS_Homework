function Exponentiation (First, Second){
var Buffer=First;
for(i=1;i<Second;i++)
{
    Buffer=Buffer*First;
} return Buffer;
}
console.log(Exponentiation(3,5));