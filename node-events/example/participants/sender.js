'use strict';

/*
 Echo back the input args beyond environment variables.
 */

const {Messenger, BROADCAST_CHANNEL} = require('./messenger');
const input = process.argv.slice(2).join(' ');

Messenger.emit(BROADCAST_CHANNEL, {message: input});
Messenger.on('received', ({message}) => {
  console.log(`Received: ${message}`);
});