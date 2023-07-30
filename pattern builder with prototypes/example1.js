//todos los objetos heredan de Object
Object.prototype.log = function() {//agrego el metodo log. En este caso el metodo se llama 'log' pero podria tener cualquier nombre
    console.log(this) //aca this hace referencia a Object
}

//instancia de la clase Object
const x = {
    a: 1
}

x.log()

if(!String.prototype.trim){
    String.prototype.trim = function() {
        try{
            return this.replace(/^\s+|\s+$/g, "")
        }
        catch(e){
            return this
        }
    }
}

const y = "       lalala        ".trim()
y.log('y: ', y);