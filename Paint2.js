function drawTriangle (Counter, PaintSymbol) {
    var Buffer=PaintSymbol;
    for (i=1; i<=Counter;i++) {  
    console.log(Buffer);
   Buffer=Buffer+PaintSymbol;
}}
drawTriangle(7, "&");