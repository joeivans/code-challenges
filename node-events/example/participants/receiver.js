'use strict';

/*

 */

const {Messenger, BROADCAST_CHANNEL} = require('./messenger');

Messenger.on(BROADCAST_CHANNEL, ({message}) => {
  console.log(`Received broadcast message: ${message}`);

  Messenger.emit('received', {message});
});
