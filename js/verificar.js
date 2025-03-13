function verificarPouI(num){
    if(num %2 === 0){
        return "o número" + num + " é par";
    }
    else{
        return "o número" + num + "é ímpar";
    }
}
function verificar(){
    let num = parseInt(document.getElementById("num").value);
    let resultado= verificarPouI(num);
    document.getElementById("resultado").textContent= resultado;
}