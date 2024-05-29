
var indiceTestimonio = 1;
mostrarTestimonios(indiceTestimonio);

function diapositivaActual(n) {
    indiceTestimonio = n;
    mostrarTestimonios(n);
}

function mostrarTestimonios(n) {
    var i;
    var testimonios = document.getElementsByClassName("testimonio");
    var puntos = document.getElementsByClassName("punto");
    
    for (i = 0; i < testimonios.length; i++) {
        testimonios[i].style.display = "none";
    }
    
    for (i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" activo", "");
    }
    
    testimonios[indiceTestimonio - 1].style.display = "block";
    puntos[indiceTestimonio - 1].className += " activo";
}

