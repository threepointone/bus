var events = require('events');

if(!global.__bus__){
	global.__bus__ = new events.EventEmitter();
	global.__bus__.bind = function(eventName, fn) {
		bus.on(eventName, fn);
		return {
			unbind: function() {
				bus.removeListener(eventName, fn);
			}
		};
	};
}

module.exports = global.__bus__;

