// Stores the active TCP connection object.
let connection;
const {NAME, MSG} = require('./constants');

const command = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
}

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;

  connection.write(`${MSG} Sever! It's me! ${NAME}!`);

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') process.exit();
  for (element in command) {
    if (element === key) {
      connection.write(key);
    }
  }
};

module.exports = {
  setupInput
}