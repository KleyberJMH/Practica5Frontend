function escucharClickBoton() {
    // obtenemos el botón de guardado
    const botonGuardar = document.getElementById("btn-guardar-gestor");

    // escuchamos el evento click para el botón de guardado
    botonGuardar.addEventListener("click", (_event) => {

        // obtenemos los inputs por nombre (name) para trabajar con ellos
        let usuarioInput = document.getElementById("usuario")
        let correoInput = document.getElementById("correo")
        let passInput = document.getElementById("pass")

        // gestor que guardaremos
        // con .value obtenemos el valor de un input
        const nuevoGestor = {
            usuario: usuarioInput.value,
            correo: correoInput.value,
            password: passInput.value
        }

        // para pasarlo como parámetro al fetch
        // indicamos el método de petición (method),
        // el cuerpo (body) y los encabezados (headers)
        const opcionesPost = {
            method: "POST",
            body: JSON.stringify(nuevoGestor),
            headers: { "Content-type": "application/json" }
        }

        fetch('http://localhost:8080/gestor', opcionesPost)
            .then(response => response.json())
            .then(gestorGuardado => {
                console.log({ gestorGuardado })
                // vaciamos los inputs con .reset()
                usuarioInput.value = ""
                correoInput.value = ""
                passInput.value = ""
                // // recargamos la lista de gestores
                // obtenerGestores()
            })
    });
}


escucharClickBoton();