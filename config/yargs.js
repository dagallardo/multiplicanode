const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 20
    }
}

const argv = require("yargs")
    .command('listar', 'Imprime la tabla de multriplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}