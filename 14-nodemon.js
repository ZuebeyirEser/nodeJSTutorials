const _ = require('lodash');

const items = [1, [2, [3 , 4]]];

const newItems = _.flattenDeep(items);
console.log(newItems);

// We added   "scripts": {"dev": "nodemon app.js"} into our package.json file then we save
// afterwards we enter we run 
// npm run dev
// nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application 
// when file changes in the directory are detected.
console.log('Hello People');