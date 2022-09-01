let num = prompt("Introdueix un número", "5");
let factorial = 1;

for(let i = 1; i<num; i++){
    factorial += factorial*i;
}

alert(factorial);