function getIdUsuario(){
    const usuarioGuardado = sessionStorage.getItem("user");
    if(usuarioGuardado == null){
        return null;
    } else{        
        const usuario = JSON.parse(usuarioGuardado)
        return usuario.id;
    }
}

function getClientes(){
    const idGestor = getIdUsuario();
    if(idGestor == null){
        alert("No has iniciado sesion!")
    } else{        
        fetch('http://localhost:8080/cliente/gestor/' + idGestor)
        .then(response => response.json())
        .then(clientes => {
            const content = document.getElementById("content");
            if(clientes.length != 0){
                content.innerHTML = "<table id ='clientes'><tr><th>Usuario</th><th>Correo</th><th>Saldo</th></tr></table>"
                
                for (const cliente of clientes) {   
                    const tabla = document.getElementById("clientes");
                        tabla.innerHTML += `<tr><td>${cliente.usuario}</td><td>${cliente.correo}</td><td>${cliente.saldo}</td></tr>`;       
                    }
            }else {
                content.innerHTML = "<p>No tienes clientes asignados</p>";
            }
            
            
        })
    }
    
}

getClientes();

