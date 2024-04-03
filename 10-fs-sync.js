// FS SYNC
const {readFileSync, writeFileSync} = require('fs');
// alternatively
/* const fs = require('fs');
fs.read; */
// read the files
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
console.log(first,second);
// write to files
writeFileSync(
    './content/result-sync.txt',
     `Here is the result ${first}, ${second}`,
     //if you wanna append the file you need to add flag 'a'
     {flag: 'a'}
)