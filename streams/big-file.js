const fs = require('fs')
const file = fs.createWriteStream('./big')

for (let i = 0; i <= 1e6; i++) {
    file.write(
        'Del rojo corazón de quetzalcoatl Broto la flor de oro y la semilla El dulce trino y la luz de la estrella En la frente de un pueblo Nace el sol, humanidad flor y pájaro En el centro vital del pensamiento Esta en el viento, es ala es nube Agua que hace carne con el maíz Quetzalcoatl mágico y cósmico Es joya piedra preciosa que tiene inmersos la luz y los colores Destellos del rio de oro que lleva incrustrados El habla, el canto, la voz de la flauta Y la pirámide del conocimiento Es el trueno que simbra los metales de su voz en la garganta de los pajaros, y en la humanidad Crece como árbol florido en la boca humana y en el pico de las aves Es el vino del amor Delicia del calor de la mujer Es oro y sosiego del guerrero Utero donde nace la vida, quetzalcoatl mágico y cósmico Mágico y cósmico Entonces todos los seres humanos somos mágicos y cósmicos Todos'
    );
}

file.end();