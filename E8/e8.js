let num = prompt("Introdueix un número", "5");

esPar(num);

function esPar(n){
    if(n % 2 == 0){
        alert("Es par");
    }else{
        alert("No es par");
    }
}
