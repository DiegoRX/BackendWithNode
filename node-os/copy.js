const fs = require('fs')

fs.copyFile('quetzalcoatl.txt', 'human.txt', err => {
    if(err) {
        console.log(err)
    }
    console.log('quetzalcoatl.txt fue copiado con éxito como human.txt')
})

//Esto lo podemos parametrizar envíando datos a través de la terminal