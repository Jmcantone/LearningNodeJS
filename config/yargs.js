// const options = {
//     description: {
//         demand: true,
//         alias: 'd',
//         desc: 'Descripción de la tarea por hacer'
//     }
// }

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}