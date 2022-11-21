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
    const botonGuardar = document.getElementById("btn-guardar-cliente");
    const idGestor = getIdUsuario();

    if(idGestor == null){
        alert("No has iniciado sesion!")
    } else{
        botonGuardar.addEventListener("click", (_event) => {
            // obtenemos los inputs por nombre (name) para trabajar con ellos
            let usuarioInput = document.getElementById("usuario")
            let correoInput = document.getElementById("correo")
            let passInput = document.getElementById("pass")
            let saldoInput = document.getElementById("saldo")
    
            // gestor que guardaremos
            // con .value obtenemos el valor de un input
            const nuevoCliente = {
                usuario: usuarioInput.value,
                correo: correoInput.value,
                password: passInput.value,
                saldo: saldoInput.value,
                gestor: {
                    id: idGestor
                }
            }
    
            // para pasarlo como parámetro al fetch
            // indicamos el método de petición (method),
            // el cuerpo (body) y los encabezados (headers)
            const opcionesPost = {
                method: "POST",
                body: JSON.stringify(nuevoCliente),
                headers: { "Content-type": "application/json" }
            }
    
            fetch('http://localhost:8080/cliente', opcionesPost)
                .then(response => response.json())
                .then(clienteGuardado => {
                    // console.log({ clienteGuardado })
                    usuarioInput.value = ""
                    correoInput.value = ""
                    passInput.value = ""
                    saldoInput.value = ""
                })
        });
    }
    // escuchamos el evento click para el botón de guardado
    
}


escucharClickBoton();