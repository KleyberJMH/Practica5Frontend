function escucharClickBoton() {

    const botonLogin = document.getElementById("btn-login");

    botonLogin.addEventListener("click", (_event) => {
        let correoInput = document.getElementById("correo")
        let passInput = document.getElementById("pass")

        const query = `?correo=${correoInput.value}&password=${passInput.value}`;

        fetch('http://localhost:8080/gestor/login'+ query)
        .then(response => response.json())
        .then(gestor => {
            if(gestor != null){
                // console.log({gestor})
                sessionStorage.setItem('user', JSON.stringify(gestor));
                 location.reload();
            }else{
                // alert("El correo o contraseña no coinciden")
            }
        
    })
    })

    
}


escucharClickBoton();