"use strict";

const $ = require('jquery');

const message = require('./say-hello');
console.log(message);

const sayHello = () => console.log("hello");
sayHello();

$('h1').css('color', 'blue');