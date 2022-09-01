let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Introdueix el numero de DNI", "39998877");
let letra1 = prompt("Introdueix la lletra", "A");
let letra2;

if(dni < 0 || dni > 99999999){
    alert("Número proporcionat no es vàlid");
}else{
    letra2 = letras[dni%23]
    if(letra1 == letra2){
        alert("Lletra correcta");
    }else{
        alert("Lletra incorrecta");
    }
}
