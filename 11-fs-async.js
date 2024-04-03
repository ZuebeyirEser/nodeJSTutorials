// ASYNC
const { log } = require('console');
const {readFile, writeFile} = require('fs');
console.log('Start')
//in async we need to provide a call back
//thus we need to add utf8
// first i wanna read first file then save it afterwards read second file and save it then put the result together.
readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        //return null
        return
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt','utf8', (err, result) => {
        if(err) {
            console.log(err)
            //return null
            return
        }
        const second = result; 
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}` , (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log('Done with the task');
        });      

    })
})
console.log('Starting the next one: ');
/* if we run above code we get a buffer 
<Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
*/
/* 

zubeyireser@Zubeyirs-Air nodeJSTutorials % node 10-fs-sync.js 
Start
hello this is first text file. hello this is second text file.
Done with the task
Starting the next one: 
zubeyireser@Zubeyirs-Air nodeJSTutorials % node 11-fs-async.js 
Start
Starting the next one: 
Done with the task


We need to be careful when we implementing sync module if it computanially heavy then it can cause to fail the system within (some random number) 10 user"
