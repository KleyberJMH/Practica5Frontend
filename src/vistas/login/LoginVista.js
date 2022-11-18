import Vista from "../Vista.js";

// extendemos a Vista y utilizamos y sobreescribimos sus métodos
export default class extends Vista {
    constructor() {
        // es buena práctica utilizar el constructor padre
        super()
        // actualizamos el título
        this.setTitulo("Login")
    }

    // sobreescribimos la función getHTML y llamamos a la del padre Vista
    async getHTML() {
        super.getHTML("/login/login.html", "/login/login.js")
    }
}