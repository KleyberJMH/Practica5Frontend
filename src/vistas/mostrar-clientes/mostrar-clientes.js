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
                content.innerHTML = "<table class='highlight' id ='clientes'><thead><tr><th>Usuario</th><th>Correo</th><th>Saldo</th><th>Transferencias</th></tr><thead><tbody id='tbody'></tbody></table>"
                const tabla = document.getElementById("tbody");

                for (const cliente of clientes) {   
                        tabla.innerHTML += `<tr><td>${cliente.usuario}</td><td>${cliente.correo}</td><td>${cliente.saldo}</td><td><button class="waves-effect waves-light btn" id='cliente-${cliente.id}'>Info</button></td></tr>`;       
                    }

                for (let i=0; i<clientes.length; i++){
                    const btnTransferencia = document.getElementById(`cliente-${clientes[i].id}`);
                        btnTransferencia.addEventListener("click", (_event)=>{
                            sessionStorage.setItem('cliente', JSON.stringify(clientes[i]));
                            location.href ='/mostrar-transferencias';
                        })
                }
            }else {
                content.innerHTML = "<p>No tienes clientes asignados</p>";
            }
            
            
        })
    }
    
}

getClientes();