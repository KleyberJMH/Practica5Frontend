function getTransferencias(){
    const clienteGuardado = sessionStorage.getItem("cliente");
    if(clienteGuardado == null){
        alert("No posee transferencias!")
    } else{        
        const cliente = JSON.parse(clienteGuardado)
        fetch('http://localhost:8080/transferencia/ordenante/' + cliente.id)
        .then(response => response.json())
        .then(transferencias => {
            const content = document.getElementById("content");
            const titulo = document.getElementById("titulo");
            titulo.innerHTML = "Transferencias de "+ cliente.usuario;
            if(transferencias.length != 0){
                content.innerHTML = "<table class='highlight' id ='transferencias'><thead><tr><th>Tipo</th><th>Concepto</th><th>Ordenante</th><th>Beneficiario</th><th>Importe</th><th>Fecha</th></tr><thead><tbody id='tbody'></tbody></table>"
                const tabla = document.getElementById("tbody");

                for (const transferencia of transferencias) {   
                    let tipo = ""
                    let clase = ""
                    if(transferencia.ordenante.id != cliente.id){
                        tipo = "Recibido"
                        clase = "green lighten-5"
                    }else{
                        tipo = "Enviado"
                        clase = "red lighten-4"
                    }
                    tabla.innerHTML += `<tr class="${clase}"><td>${tipo}</td><td>${transferencia.concepto}</td><td>${transferencia.ordenante.usuario}</td><td>${transferencia.beneficiario.usuario}</td><td>${transferencia.importe}</td><td>${transferencia.fecha}</td></tr>`;
                               
                    }
                    
            }else {
                content.innerHTML = "<p>No tienes transferencias realizadas</p>";
            }
            content.innerHTML += `<button class="waves-effect waves-light btn" id="atras">Atras</button>`;         
escucharClickBoton();
        })
        
    }
    
}

getTransferencias();

function escucharClickBoton() {

    const botonAtras = document.getElementById("atras");

    botonAtras.addEventListener("click", (_event) => {
        sessionStorage.removeItem("cliente");
        location.href ='/mostrar-clientes';
    })

    
}



