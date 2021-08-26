const {connect} = require('./client');

// setup interface to handle user input from stdin

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");

const handleUserInput = (data) => {
  // your code here
};

setupInput();

connect();