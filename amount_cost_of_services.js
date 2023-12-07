var servises = {
    "Manicure" : "300 грн",
    "Pedicure" : "250 грн",
    "Cut Hair" : "400 грн",
    "Basic Colour Hair" : "240 грн",
    "Shaving" : "70 грн"
}

function cutgrn(buffer) {
    for(i=0;i<buffer.length;i++)
    {buffer[i]= Number.parseInt(buffer[i])}
}

function lookingForServis(obj){
    var buffer = Object.entries(servises);
    for(i=0;i<buffer.length;i++){
     if( buffer[i][1].startsWith(obj)) return buffer[i][0]; 
    }
}
function maxPrice(obj) {
cutgrn(obj);  
var max = obj[0];
for(i=0;i<obj.length;i++) {
    if(max<obj[i]) max=obj[i]
}
var servis =lookingForServis(max);
console.log("Our the most expensive service is "+servis+" and it cost "+max+" grn")
}

function minPrice(obj) {
    cutgrn(obj);  
    var min = obj[0];
    for(i=0;i<obj.length;i++) {
        if(min>obj[i]) min=obj[i]
}
    var servis =lookingForServis(min);
    console.log("Our the most cheapest service is "+servis+" and it cost "+min+" grn")
}

function price(obj){
    cutgrn(obj); 
    var finalprice=0;
    for(i=0;i<obj.length;i++){
        finalprice+=obj[i];
    }
    console.log("Our All Include with all our services costed "+finalprice+" grn")
}
var values = Object.values(servises);
maxPrice(values);
minPrice(values);
price(values);
servises["Treading eyebrows"] = "50 грн";
servises["Cool Cut Hair"] = "401 грн";
var values = Object.values(servises);
maxPrice(values);
minPrice(values);
price(values);
