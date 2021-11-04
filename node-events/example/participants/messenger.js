'use strict';

/*
  Messenger is just the subject
 */

const Event = require('events');
const Messenger = new Event();
const BROADCAST_CHANNEL = 'broadcast';

module.exports = {
  Messenger,
  BROADCAST_CHANNEL
};