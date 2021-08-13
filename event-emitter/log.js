const EventEmitter = require('events');
const util = require('util');

class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
        //вызываем событие под нужным нам именем 'some_name'
        this.emit('some_event', {id: 1, text: 'Event test text!'});
    }
}
util.inherits(Logger, EventEmitter);

module.exports = Logger;