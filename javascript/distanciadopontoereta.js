function calc() {
    var xA = Number(document.getElementById("xPontoA").value) ;
    var yA = Number(document.getElementById("yPontoA").value) ;
    var aP = Number(document.getElementById("aP").value) ;
    var bP = Number(document.getElementById("bP").value) ;
    var cP = Number(document.getElementById("cP").value) ;

    var conta = (aP * xA) + (bP * yA) + cP / Math.sqrt((aP * aP) + (bP * bP))
    if (conta < 0) {
        var final = (conta * -1)  
    } else{
        var final = conta
    }
    document.getElementById("display").value = final.toFixed(2);

}

function limpar() {
    document.getElementById("xPontoA").value ="";
    document.getElementById("yPontoA").value ="";
    document.getElementById("aP").value ="";
    document.getElementById("bP").value ="";
    document.getElementById("cP").value ="";
    document.getElementById("display").value = "";
}
