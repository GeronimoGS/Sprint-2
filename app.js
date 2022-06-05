let add = document.getElementById("add");

let gasto = document.getElementById("gasto").value;

let nombres = new Array();
let gastos = new Array();

function agregar() {
  let nombre = document.getElementById("name").value;
  let gasto = document.getElementById("gasto").value;
  if (nombre.length == 0 || gasto == 0) {
    return false;
  } else {
    nombres.push(nombre);
    gastos.push(gasto);
    crearElementoLi();
  }
}

function crearElementoLi() {
  const tex = document.createElement("li");
  tex.className = "list-group-item";
  tex.innerText =
    nombres[nombres.length - 1] + ": $" + gastos[gastos.length - 1];
  add.append(tex);
  suma();
}

function suma() {
  let sum = 0;
  parseInt(sum);
  for (let i = 0; i < gastos.length; i++) {
    sum = sum + parseInt(gastos[i]);
    console.log(sum);
  }
  document.getElementById("total").innerText = "Total $" + sum;
  dividir();
}
function dividir() {
  let sum = 0;
  parseInt(sum);
  for (let i = 0; i < gastos.length; i++) {
    sum = sum + parseInt(gastos[i]);
  }
  sum = sum / gastos.length;
  sum = sum.toFixed(2);
  document.getElementById("cadauno").innerText =
    "A cada uno le toca aportar:$" + sum;
}
