// ASYNC
const { log } = require('console');
const {readFile, writeFile} = require('fs');
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
            console.log(result);
        });      

    })
})
/* if we run above code we get a buffer 
<Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
*/
