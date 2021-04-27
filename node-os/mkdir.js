const fs = require('fs');

fs.mkdir('Directorio1/2/3', {recursive: true}, (err) =>{
    if(err) {
        return console.log(err)
    }
})