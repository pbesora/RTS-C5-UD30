let valores = [true, 5, false, "hola", "adios", 2];

let var1;
let var2;

for (let index = 0; index < valores.length; index++) {
    if (((typeof valores[index]) === "string") && !(typeof var1 === "string")) {
        var1 = valores[index];
    }else if(typeof valores[index] === "string"){
        var2 = valores[index];
    }
}

if(var1 > var2){
    alert(var1 + " > " + var2);
}else if(var2 > var1){
    alert(var1 + " < " + var2);
}else{
    alert(var1 + " = " + var2);
}


for (let index = 0; index < valores.length; index++) {
    if (((typeof valores[index]) === "boolean") && !(typeof var1 === "boolean")) {
        var1 = valores[index];
    }else if(typeof valores[index] === "boolean"){
        var2 = valores[index];
    }
}
alert(var1 && var2);
alert(var1 || var2);


for (let index = 0; index < valores.length; index++) {
    if (((typeof valores[index]) === "number") && !(typeof var1 === "number")) {
        var1 = valores[index];
    }else if(typeof valores[index] === "number"){
        var2 = valores[index];
    }
}

alert(var1 + var2);
alert(var1 - var2);
alert(var1 * var2);
alert(var1 / var2);
alert(var1 % var2);