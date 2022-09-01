let cadena = prompt("Introdueix un text", "Hola mundo");
esMajusculas(cadena);

function esMajusculas(text){
    if(text === text.toUpperCase()){
        alert("La cadena es en majuscules");
    }else if(text === text.toLowerCase()){
        alert("La cadena es en minuscules");
    }else{
        alert("La cadena es en minuscules i majuscules");
    }
}
