function converter(){
    let n1= parseFloat(document.getElementById("peso").value);
    conversor= n1*1.8 +32 ;
    document.getElementById("resultado").textContent="Resultado: " +conversor;
}