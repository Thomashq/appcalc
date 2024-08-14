function redirectToTBeam(x) {
  if (x==1) {
    window.location.href = "tBeam.html";  
  } else {
    window.location.href = "iBeam.html";
  } 
}

function calcularSoma(event) {
  event.preventDefault(); // Impede o envio real do formulário

  var num1 = parseFloat(document.getElementById("d").value);
  var num2 = parseFloat(document.getElementById("h").value);
  var resultado = num1 + num2;
  
  localStorage.setItem("num1", num1);
  localStorage.setItem("num2", num2);
  localStorage.setItem("resultado", resultado);
  
  location.href = "result.html";
}


function exibirResultado() {
  var num1 = localStorage.getItem("num1");
  var num2 = localStorage.getItem("num2");
  var resultado = localStorage.getItem("resultado");
  
  var table = document.getElementById("resultTable");
  var row = table.insertRow();
  row.insertCell().innerHTML = num1;
  row.insertCell().innerHTML = num2;
  row.insertCell().innerHTML = resultado;
}

window.onload = exibirResultado;
