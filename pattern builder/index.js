//ES5
function MiClaseES5(){
    this.propiedad = 1
    this.metodo = () => {

    }
}

//ES6
class MiClaseES6 {
    constructor(p1, p2){
        this.propiedad1 = p1
        this.propiedad2 = p2
        this.metodo = ()=>{
            //soy un metodo
        }
    }
}

const instanciaES5 = new MiClaseES5()
console.log(instanciaES5)

const instanciaES6 = new MiClaseES6(4, 6)
console.log(instanciaES6)