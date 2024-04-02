console.log("Hello World")

// This is an arrow function in Javascript
/*
Traditional anonymous function
(function (a) {
  return a + 100;
});

1. Remove the word "function" and place arrow between the argument and opening body brace

(a) => {
  return a + 100;
};

2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

3. Remove the parameter parentheses
a => a + 100;
 */
// execution block within {} is in every 100ms delay.
setInterval(() =>  {
    console.log('Hello World')
}, 100)