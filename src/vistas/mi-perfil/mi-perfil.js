function getIdUsuario(){
    const usuarioGuardado = sessionStorage.getItem("user");
    if(usuarioGuardado == null){
        return null;
    } else{        
        const usuario = JSON.parse(usuarioGuardado)
        return usuario.id;
    }
}

function getMiPerfil(){
    const idGestor = getIdUsuario();
    if(idGestor == null){
        alert("No has iniciado sesion!")
    } else{              
        fetch('http://localhost:8080/gestor/' + idGestor)
        .then(response => response.json())
        .then(gestor => {
            const contenerdorUsername = document.getElementById("contenedor-username");
            contenerdorUsername.innerHTML = gestor.usuario;

            const contenerdorCorreo = document.getElementById("contenedor-correo");
            contenerdorCorreo.innerHTML = gestor.correo;
        })

        escucharClickLogout()
    }
    
}

getMiPerfil();

function escucharClickLogout(){
const botonLogout = document.getElementById("btn-logout");

botonLogout.addEventListener("click", (_event) => {
    sessionStorage.clear()
    alert("Se ha cerrado sesion")
    location.reload();
})
}