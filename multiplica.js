const colors = require('colors');
let listartabla = (base, limite) => {
    for (let i = 1; i <= limite; i++)
        console.log(colors.yellow(i) + 'x'.underline.green + base + '='.red + i * base);
}

module.exports = {
    listartabla
}