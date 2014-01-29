var events = require('events');

if(!global.__bus__){
	global.__bus__ = new events.EventEmitter();
}

module.exports = global.__bus__;

