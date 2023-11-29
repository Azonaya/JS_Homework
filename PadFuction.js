function padadd(str,symbol,strFinallength,trigger ) {
    var result=str.toString();
for (i=str.length; i<strFinallength;i++)
{
trigger ? result = symbol.toString()+result : result = result+symbol.toString()
} 
return result;
}
console.log(padadd("Hello", '$',9,true));
