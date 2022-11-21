function getIdUsuario(){
    const usuarioGuardado = sessionStorage.getItem("user");
    if(usuarioGuardado == null){
        return null;
    } else{        
        const usuario = JSON.parse(usuarioGuardado)
        return usuario.id;
    }
}

function escucharClickBoton() {
    // obtenemos el botón de guardado
    const botonGuardar = document.getElementById("btn-guardar-mensaje");

    // escuchamos el evento click para el botón de guardado
    botonGuardar.addEventListener("click", (_event) => {

        // obtenemos los inputs por nombre (name) para trabajar con ellos
        let mensajeInput = document.getElementById("mensaje");
        let destinoInput = document.getElementById("destino");
        const idGestor = getIdUsuario();

        // gestor que guardaremos
        // con .value obtenemos el valor de un input
        const nuevoMensaje = {
            origen: {
                id: idGestor
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
                // console.log({ mensajeGuardado })
                // vaciamos los inputs con .reset()
                destinoInput.value = ""
                mensajeInput.value = ""
            })
    });
}


escucharClickBoton();