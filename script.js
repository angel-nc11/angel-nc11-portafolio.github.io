document.querySelector(".encriptador").style.display = "none";
document.querySelector(".barberia").style.display = "none";

function ocultarTorres() {
    var x = document.querySelector(".torres");
	var y = document.querySelector(".encriptador");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.style.display = "none"
    } else {
        x.style.display = "none";
		y.style.display = "block";

    }
}
document.querySelector('.btm-hanoi').onclick = ocultarTorres;
document.querySelector('.btm-encriptador').onclick = ocultarTorres;


function ocultarBarberia() {
    var x = document.querySelector(".divisas");
	var y = document.querySelector(".barberia");
    if (x.style.display === "none") {
        x.style.display = "block";
		y.style.display = "none"
    } else {
        x.style.display = "none";
		y.style.display = "block";

    }
}

document.querySelector('.btm-divisas').onclick = ocultarBarberia;
document.querySelector('.btm-barberia').onclick = ocultarBarberia;












