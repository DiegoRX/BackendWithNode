const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    execute(cb){
        console.log('before')
        this.emit('start')
        cb()
        this.emit('finish')
        console.log('after')
    }
}

const logger = new Logger();

logger.on('start', () => console.log('starting'))
logger.on('finish', () => console.log('finishing'))
logger.on('start', () => console.log('starting'))

logger.execute(() => console.log('hello world'))

// si se ejecuta código asincrono el orden no va a permanecer
logger.execute(() => setTimeout(() => console.log('hello world'), 500))