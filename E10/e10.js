let cadena = prompt("Introdueix un text", "Hola mundo");
cadena = cadena.toLowerCase().replace(/ /g,"");

esPalindrom(cadena);

function esPalindrom(text){
    if(text === text.split("").reverse().join("")){
        alert("Es palindrom");
    }else{
        alert("No es palindrom");
    }
}

