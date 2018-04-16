var nombres, apellidos, direccion;

var x = "",  row, col, ela;
var a1 = "btn-", a2 = 1;
var i = 1;
var arr = new Array(new Array(0));
var id = 1;

function alumno(nome, ape, direc) {
  this.nombres = nome;
  this.apellidos = ape;
  this.direccion = direc;
}

function registro() {
  nom = document.getElementById("nom").value;
  app = document.getElementById("ape").value;
  dir = document.getElementById("dir").value;

  alumno(nom, app, dir);

	if(this.nombres=="" || this.nombres== null || this.apellidos == "" || this.apellidos == null || this.direccion=="" || this.direccion== null)
  {
		alert("Falta Llenar Campos");
	}
	else {
		arr.push([id++, this.nombres + " " + this.apellidos, this.direccion])
  }

	document.getElementById("nom").value = "";
  document.getElementById("ape").value = "";
  document.getElementById("dir").value = "";
  mostrar();
}

var idname = "nom";
var idapp = "ape";
var iddirec = "dir";

function mostrar() {
  ela = 1; x = "";

  for (row = 0; row < arr.length; row++) {
    x = x + "<tr>";

    for (col = 0; col < arr[row].length; col++) {
      x = x + "<td>" + arr[row][col] + "</td>";
    }
    if (arr[row][1] == "" || arr[row][1] == null) {} else {
      x = x + "<td><input type='button' class='btn-1' onclick='obtener(" + ela + ")' id='" + a1 + a2 + "'>";
      x = x + "<input type='button' class='btn-2' onclick='eliminar(" + ela + ")' id='" + a1 + a2 + "'></td>";
      ela++;
    }
    x = x + "</tr>";

  }
  document.getElementById("tb").innerHTML = x;

}


function eliminar(index) {
  arr.splice(index, 1);
	document.getElementById("nom").value = "";
	document.getElementById("ape").value = "";
	document.getElementById("dir").value = "";
  mostrar();
  ocultar();
}

function modificar() {
  nom = document.getElementById("nom").value;
  app = document.getElementById("ape").value;
  dir = document.getElementById("dir").value;

  arr[indx][1] = nom + " " + app;
  arr[indx][2] = dir;
  document.getElementById("nom").value = "";
  document.getElementById("ape").value = "";
  document.getElementById("dir").value = "";
  mostrar();
  ocultar();
}

function mostrarbtn() {
  var btn = document.getElementById("btn-mod");
  btn.style.display = "block";
}
var indx = 0;

function obtener(index) {
  indx = index;
  mostrarbtn();
  verificar(arr[index][1]);
  document.getElementById("dir").value = arr[index][2];
}

function verificar(valor) {
  var inicio = 0;

  for (var i = 0; i < valor.length; i++) {
    var ch = valor.substring(i, i + 1);
    if (ch == " ") {
      document.getElementById("nom").value = valor.substring(inicio, i);
      document.getElementById("ape").value = valor.substring(i + 1, valor.length);

    }
  }
}
