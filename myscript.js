alert("La página se está iniciando");
let contador = 0;

setTimeout(function changeText() {
    document.getElementById("miLista").innerHTML = "Hola Mundo";
    document.getElementById("miLista").style.color = "red";
}, 5000);

function countClics()
{
    contador++;
    document.getElementById("contadorDeClics").innerHTML = "Contador de Clics "+contador;
}

function changeName() {
    document.getElementById("nameHeader").innerHTML = document.getElementById("recogerNombre").value;
}

function getTheYears() {

    let laFechaRecogida = document.getElementById("bday").value;
    laFechaRecogida = new Date(laFechaRecogida);
    laFechaQueEsAdiaDeHoy = new Date();
    let anyosQueHayEntreUnaFechaYotra = laFechaQueEsAdiaDeHoy.getFullYear() - laFechaRecogida.getFullYear();
    document.getElementById("laEdad").value = anyosQueHayEntreUnaFechaYotra;

}

function chooseGenre() {
    if(document.getElementById("etiquetaGeneroMasculino").checked) {
        document.getElementById("loDeCambiarElColor").style.backgroundColor = 'blue';
    } else if(document.getElementById("etiquetaGeneroFemenino").checked) {
        document.getElementById("loDeCambiarElColor").style.backgroundColor = 'red';
    } else if(document.getElementById("etiquetaGeneroOtro").checked) {
        document.getElementById("loDeCambiarElColor").style.backgroundColor = 'green';
    }
}

function showPicture () {
    if(document.getElementById("laCasilla").checked) {
        document.getElementById("imagen").style.display = "none";
    } else {
        document.getElementById("imagen").style.display = "inline";
    }
}

function changeColor() {
    document.getElementById("aplicarElColor").style.backgroundColor = document.getElementById("elColor").value;;
    document.getElementById("aplicarElColor2").style.backgroundColor = document.getElementById("elColor").value;;
}

function submitForm() {
    alert("Formulario enviado con éxito");
}