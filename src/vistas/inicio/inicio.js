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
        })
    }
    
}

getMiPerfil();