// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = () => {
  // your code here
};

module.exports = {
  setupInput
}