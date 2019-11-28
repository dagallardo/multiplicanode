const argv = require('./config/yargs').argv;


const argv2 = process.argv;
console.log("Proccess:" + argv2);
console.log(argv);

const { listartabla } = require('./multiplica');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('CREAR');
        break;
    default:
        console.log('Comando no reconocido');

}
console.log(comando);