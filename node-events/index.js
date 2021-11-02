'use strict';

const Events = require('events');
const eventPool = new Events();

const LIGHT_TOGGLE_EVENT_TOPIC = 'light-toggle';

// sub
eventPool.on(LIGHT_TOGGLE_EVENT_TOPIC, () => {
  console.log('light toggled');
});
eventPool.on(LIGHT_TOGGLE_EVENT_TOPIC, (payload) => {
  if (payload) {
    console.log(JSON.stringify(payload));
  }
});

// pub
eventPool.emit(LIGHT_TOGGLE_EVENT_TOPIC);
eventPool.emit(LIGHT_TOGGLE_EVENT_TOPIC, 'Hello world');
eventPool.emit(LIGHT_TOGGLE_EVENT_TOPIC, {id: 0, message: 'Hello world'});
eventPool.emit(LIGHT_TOGGLE_EVENT_TOPIC, {randomNumber: Math.floor(Math.random() * 100)});
