function drawTriangle (Counter, PaintSymbol) {
    for (i=1; i<=Counter;i++) {
     var Buffer ="";
     for (j=1; j<=i; j++) {Buffer=Buffer+PaintSymbol;}
    console.log(Buffer);
}}
drawTriangle(6, "@");