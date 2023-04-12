let contador = 0;
let puntaje = 0;
cargar(contador);

function cargar(i) {
    CPreguntas = preguntas[i];

    opciones = [...CPreguntas.incorrecta];
    opciones.push(CPreguntas.correcta);
    for (let i = 0; i < 4; i++) {
        opciones.sort(() => Math.random() - 0.5);
    }

    document.getElementById("pregunta").innerHTML = CPreguntas.pregunta;
    document.getElementById("opc1").innerHTML = opciones[0];
    document.getElementById("opc2").innerHTML = opciones[1];
    document.getElementById("opc3").innerHTML = opciones[2];
    /* document.getElementById("opc4").innerHTML = opciones[3]; */
}

async function seleccionar(i) {
    let validezRespuesta = opciones[i] == CPreguntas.correcta;
    if (validezRespuesta) {
        await Swal.fire({
            title: "Respuesta correcta",
            text: "La respuesta ha sido correcta",
            html: `Recomendacion:  ${CPreguntas.recomendacion}`,
            icon: "success",
        });
        puntaje++;
    } else {
        await Swal.fire({
            /* title: "Respuesta Incorrecta", */
            /* html: `La respuesta correcta es:  ${CPreguntas.correcta}`, */
            html: `${CPreguntas.recomendacion}`,
            icon: "error",
        });
    }
    contador++;
    if (contador >= preguntas.length) {
        await Swal.fire({
            title: `Tu puntaje fue de: ${puntaje}/${preguntas.length}`,
            text: "Gracias por participar!",
        });
        contador = 0;
        puntaje = 0;
        window.location = "pg2.html";
    }
    cargar(contador);
}
