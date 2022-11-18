function escucharClickBoton() {
    // obtenemos el botón de guardado
    const botonGuardar = document.getElementById("btn-guardar-mensaje");

    // escuchamos el evento click para el botón de guardado
    botonGuardar.addEventListener("click", (_event) => {

        // obtenemos los inputs por nombre (name) para trabajar con ellos
        let mensajeInput = document.getElementById("mensaje")
        let origenInput = document.getElementById("origen")
        let destinoInput = document.getElementById("destino")

        // gestor que guardaremos
        // con .value obtenemos el valor de un input
        const nuevoMensaje = {
            origen: {
                id: origenInput.value
            },
            destino: {
                id: destinoInput.value
            },
            texto: mensajeInput.value,
        }

        // para pasarlo como parámetro al fetch
        // indicamos el método de petición (method),
        // el cuerpo (body) y los encabezados (headers)
        const opcionesPost = {
            method: "POST",
            body: JSON.stringify(nuevoMensaje),
            headers: { "Content-type": "application/json" }
        }

        fetch('http://localhost:8080/mensaje', opcionesPost)
            .then(response => response.json())
            .then(mensajeGuardado => {
                console.log({ mensajeGuardado })
                // vaciamos los inputs con .reset()
                origenInput.value = ""
                destinoInput.value = ""
                mensajeInput.value = ""
            })
    });
}


escucharClickBoton();