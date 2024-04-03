
const names = require('./4-names.js');
const sayHi = require('./5-utils');
const data = require('./6-alternative.js');

// we can run 7-mind-granade.js in our app.js using just require function
require('./7-mind-granade.js');

console.log(names);
console.log(data);
sayHi('xqc');
sayHi(names.hans);
sayHi(names.gluck);