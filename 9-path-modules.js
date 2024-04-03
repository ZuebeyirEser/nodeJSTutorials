const path = require('path');
const process = require('process');
// shows my file separator from path (/) User/Desktop
console.log(path.sep);
// how to get desired filepath using join method from path module
const filePath = path.join('/content','something',"test.txt");
console.log(filePath);
// how to gate desired folder name 
const base = path.basename(filePath);
console.log(base);


// absolute path
const absolute = path.resolve(__dirname,'test.txt');
console.log(absolute);