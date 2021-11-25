function calc() {
    var xA = Number(document.getElementById("xPontoA").value) ;
    var yA = Number(document.getElementById("yPontoA").value) ;
    var ca = Number(document.getElementById("ca").value) ;

    var conta = (ca * xA) - yA
    document.getElementById("display").value = conta.toFixed(2);
   

   

}

function limpar() {
    document.getElementById("xPontoA").value ="";
    document.getElementById("yPontoA").value ="";
    document.getElementById("ca").value ="";
    document.getElementById("display").value = "";
}