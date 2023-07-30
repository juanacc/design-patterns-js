class MiClase {
    constructor(p1, p2){
        this.propiedad1 = p1
        this.propiedad2 = p2
    }
    metodo() {
        //soy un metodo de prototipo
    }
}

const instancia = new MiClase(4, 2)
console.log(instancia)
console.log(instancia.__proto__);