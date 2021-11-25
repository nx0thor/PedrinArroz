function limpar() {
    document.getElementById("xPontoA").value ="";
    document.getElementById("yPontoA").value ="";
    document.getElementById("xPontoB").value ="";
    document.getElementById("yPontoB").value ="";
    document.getElementById("display").value = "";
}

function calcularDistancia(){
    var xA = Number(document.getElementById("xPontoA").value) ;
    var yA = Number(document.getElementById("yPontoA").value) ;
    var xB = Number(document.getElementById("xPontoB").value) ;
    var yB = Number(document.getElementById("yPontoB").value) ;
   


    var primeiraParte = Math.pow((xB - xA), 2);
    var segundaParte = Math.pow((yB - yA), 2);
    var soma = primeiraParte + segundaParte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);


} 

function calcularPontoMedio(){
    var xA = Number(document.getElementById("xPontoA").value) ;
    var yA = Number(document.getElementById("yPontoA").value) ;
    var xB = Number(document.getElementById("xPontoB").value) ;
    var yB = Number(document.getElementById("yPontoB").value) ;

    var primeiraparte = (xA + xB) / 2;
    var segundaparte = (yA + yB) / 2;

    document.getElementById("display").value = `PM = (${primeiraparte},${segundaparte} )`;
    document.getElementById("display").value = "PM = (" + primeiraparte+","+segundaparte+")";



}