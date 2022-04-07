function obterMedia(){
 
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);


    var media = ((a - b) / c ) ;

    document.getElementById(" Parcelas").innerHTML = media + " Parcelas";
    
    consolo.log(a + b + c);
}