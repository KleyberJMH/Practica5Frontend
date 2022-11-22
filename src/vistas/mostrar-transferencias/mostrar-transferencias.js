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
            if(transferencias.length != 0){
                content.innerHTML = "<table id ='transferencias'><tr><th>Tipo</th><th>Concepto</th><th>Ordenante</th><th>Beneficiario</th><th>Importe</th><th>Fecha</th></tr></table>"
                
                for (const transferencia of transferencias) {   
                    const tabla = document.getElementById("transferencias");
                    if(transferencia.ordenante.id != cliente.id){
                        tabla.innerHTML += `<tr><td>Credito</td><td>${transferencia.concepto}</td><td>${transferencia.ordenante.usuario}</td><td>${transferencia.beneficiario.usuario}</td><td>${transferencia.importe}</td><td>${transferencia.fecha}</td></tr>`;
                    }else{
                        tabla.innerHTML += `<tr><td>Debito</td><td>${transferencia.concepto}</td><td>${transferencia.ordenante.usuario}</td><td>${transferencia.beneficiario.usuario}</td><td>${transferencia.importe}</td><td>${transferencia.fecha}</td></tr>`;
                    }
                               
                    }
                    
            }else {
                content.innerHTML = "<p>No tienes transferencias realizadas</p>";
            }
            content.innerHTML += `<button id="atras">Atras</button>`;         
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



