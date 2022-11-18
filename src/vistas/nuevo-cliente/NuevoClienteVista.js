import Vista from "../Vista.js";

// extendemos a Vista y utilizamos y sobreescribimos sus métodos
export default class extends Vista {
    constructor() {
        // es buena práctica utilizar el constructor padre
        super()
        // actualizamos el título
        this.setTitulo("Nuevo cliente")
    }

    // sobreescribimos la función getHTML y llamamos a la del padre Vista
    async getHTML() {
        super.getHTML("/nuevo-cliente/nuevo-cliente.html", "/nuevo-cliente/nuevo-cliente.js")
    }
}