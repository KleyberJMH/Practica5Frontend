function getMiPerfil(){
    const idGestor = 1;
    fetch('http://localhost:8080/gestor/' + idGestor)
        .then(response => response.json())
        .then(gestor => {
            const contenerdorUsername = document.getElementById("contenedor-username");
            contenerdorUsername.innerHTML = gestor.usuario;

            const contenerdorCorreo = document.getElementById("contenedor-correo");
            contenerdorCorreo.innerHTML = gestor.correo;
        })
}

getMiPerfil();