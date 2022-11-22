function getIdUsuario(){
    const usuarioGuardado = sessionStorage.getItem("user");
    if(usuarioGuardado == null){
        return null;
    } else{        
        const usuario = JSON.parse(usuarioGuardado)
        return usuario.id;
    }
}

function getMensajes(){
    const idGestor = getIdUsuario();
    if(idGestor == null){
        alert("No has iniciado sesion!")
    } else{        
        fetch('http://localhost:8080/mensaje/origen/' + idGestor)
        .then(response => response.json())
        .then(mensajes => {
            const content = document.getElementById("content");
            
            console.log({mensajes})
            if(mensajes.length != 0){
                content.innerHTML = "<table id ='mensajes'><tr><th>Destino</th><th>Fecha</th><th>Mensaje</th></tr></table>"
                
                for (const mensaje of mensajes) {   
                    const tabla = document.getElementById("mensajes");
                        tabla.innerHTML += `<tr><td>${mensaje.destino.id}</td><td>${mensaje.fecha}</td><td>${mensaje.texto}</td></tr>`;       
                    }
            }else {
                content.innerHTML = "<p>No tienes mensajes enviados</p>";
            }
            
            
        })
    }
    
}

getMensajes();

