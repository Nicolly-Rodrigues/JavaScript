function (verificar){
    let n1= parseFloat(document.getElementById("num1").value);
    let n2= parseFloat(document.getElementById("num2").value);
    let n3= parseFloat(document.getElementById("num3").value);
    let n4= parseFloat(document.getElementById("num4").value);
    verificar = n1+n2+n3+n4 /4;
    document.getElementById("resultado").textContent="Resultado: " +verificar;
}