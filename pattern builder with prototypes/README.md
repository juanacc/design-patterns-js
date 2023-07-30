## Explicacion mas de detallada
# Constructor SIN prototipo

Cuando se hace la instancia , cada objeto tiene sus propiedades, pero también se hace una copia de los métodos. Por ejemplo, si estamos construyendo una alerta modal para nuestro front-end, pues podemos decir que cada alerta (error, advertencia, éxito, etc., etc.) tiene su mensaje, icono, botones, etc. Así como tiene sus atributos, tiene sus métodos (cerrar modal por ejemplo).

Sin embargo, si lo codificamos sin prototipos (ya sea con azúcar sintáctica o no, eso da igual), estaremos creando cada ventana modal con una copia independiente del método "cerrar". Viéndola desde esta perspectiva, estaría mal porque genera memoria innecesaria en objetos que al menos para este caso, todas se deberían comportar igual, cerrar la modal.

Tomando como ejemplo el código de estos videos, si corremos lo que Nicolás nos aporta, tendríamos algo como esto.

// Constructor pattern in front and backend
 
class MyClass{
 
    // A constructor method
    constructor(myValue){
        // Propertys and methods for THIS class on particular
        this.property = myValue;
        this.method = () => {
            console.log('Hello world, my value is:',this.property);
        }
    }
}
 
// Instance of the class
const myInstance = new MyClass(1);
const myIstnace2 = new MyClass(2);
 
// Acces to the propertys and methods :)
console.log(myInstance);
console.log(myIstnace2)

(Retomando el modal) Propiedades ok, pero el método "Cerrar", no debería copiarse cada vez que creamos una nueva, porque el cerrar siempre se va a comportar igual en todas, no hay problema si lo dejamos así, pero después lloramos que la aplicación va lenta si sabemos que nuestra app tendrá uso "rudo".



# Constructor CON prototipos

Cuando se hace la instancia, cada objeto tiene sus propiedades, PERO comparten el método de la clase.

Siguiendo el hilo del modal, que pasaría si ahora se codifica con prototipos el método de la clase, es decir, ejecutamos lo siguiente.

 // Constructor pattern in front and backend
 
class MyClass{
 
    // A constructor method
    constructor(myValue){
        // Propertys and methods for THIS class on particular
        this.property = myValue;
    }
 
    method(){
        console.log('Hello world, my value is:',this.property);
    }
}
 
// Instance of the class
const myInstance = new MyClass(1);
const myInstance2 = new MyClass(2);
 
// Acces to the propertys and methods :)
console.log(myInstance);
console.log(myInstance2);

🤯🤯🤯🤯🤯🤯🤯

Nuestra instancias de los modales, efectivamente tienen sus propiedades, ¿ pero el método ?. Lo podemos usar claro que si, pero ten en cuenta, que si alguna alerta (éxito, error, etc.) modifica el código de como debe cerrarse la ventana, las demás se verán afectadas de igual manera, imagínalo como cambiar un dato no primitivo de JavaScript por referencia.



Ya dependerá de los requerimientos del proyectos que estés realizando el analizar y ver que patrón utilizar.

Me base en esta fuente: https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s01.html, para entender un poco mejor.

Y bueno, en vista que no hay código fuente, estaré haciendo apuntes en el repo de github: https://github.com/programador51/js-pattern-desings/commit/0e8ca2a371b857beb1430225beaf6fd787e6fe6b .

Ojala esto halla aclarado tu duda :)