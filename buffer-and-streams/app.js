const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/lorem.txt');
const writeStream = fs.createWriteStream('./docs/new-lorem.txt');
const compressStream = zlib.createGzip();
// readStream.on('data', (chunk)=>{
//     writeStream.write('\n---CHUNK START---\n');
//     writeStream.write(chunk);
//     writeStream.write('\n---CHUNK START---\n');
// })
const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');

}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);