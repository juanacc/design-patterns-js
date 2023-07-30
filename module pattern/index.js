const modulo = {
    prop: 'mi prop',
    config: {
        lenguaje: 'es',
        cache: false,
    },
    setConfig: conf => {//para actualizar la configuracion
        console.log(conf);
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'si' : 'no');
    }
}

console.log(modulo.isCacheEnabled())
modulo.setConfig({lenguaje: 'en', cache: true})
console.log(modulo.isCacheEnabled())