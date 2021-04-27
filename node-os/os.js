const os = require('os')

//Método para conocer la información de la CPU
// console.log('CPU info', os.cpus())

//Método para conocer la IP de nuestra máquina
// console.log('IP address', os.networkInterfaces().en1.map(i => i.address))

//Método para conocer la memória libre en bytes
console.log('Free memory', os.freemem())
//Tipo de sistema operativo
console.log('type', os.type())
//Método para conocer la versión
console.log('SO version', os.release())
//Imprimir info del usuario
console.log('User info', os.userInfo())