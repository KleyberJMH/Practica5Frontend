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
                content.innerHTML = "<table><thead><tr><th>Tipo</th><th>Origen</th><th>Destino</th><th>Fecha</th><th>Mensaje</th></tr></thead><tbody id='tbody'></tbody></table>"
                const tabla = document.getElementById("tbody");
                let tipo = ""

                for (const mensaje of mensajes) {   
                if (mensaje.origen.id == idGestor) {
                    tipo = "Enviado"
                }else if (mensaje.destino.id == idGestor){
                    tipo = "Recibido"
                }    
                        tabla.innerHTML += `<tr><td>${tipo}</td><td>${mensaje.origen.usuario}</td><td>${mensaje.destino.usuario}</td><td>${mensaje.fecha}</td><td>${mensaje.texto}</td></tr>`;       
                    }
            }else {
                content.innerHTML = "<p>No tienes mensajes enviados</p>";
            }
            
            
        })
    }
    
}

getMensajes();

