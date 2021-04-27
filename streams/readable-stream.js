const { Readable } = require('stream')
const readableStream = new Readable()

readableStream.push(`${0/0} `.repeat(10).concat('Lider, Lider!'))
readableStream.push(null)

readableStream.pipe(process.stdout)

//Investigar:
// https://nodejs.org/api/stream.html#stream_stream
//https://nodejs.org/en/knowledge/advanced/streams/how-to-use-stream-pipe/