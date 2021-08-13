const Logger = require('./log');
const logger = new Logger();
//создаем слежение за событием с нашим именем 'some_name'
logger.on('some_event', (args) => {
    const {id, text} = args;
    console.log(id, text)
});
logger.log('User logged!');