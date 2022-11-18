function getMiPerfil(){
    const usuarioGuardado = sessionStorage.getItem("user");
    if(usuarioGuardado == null){
        alert("No has iniciado sesion!")
    } else{
        
        const usuario = JSON.parse(usuarioGuardado)
        const idGestor = usuario.id;
        
        
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