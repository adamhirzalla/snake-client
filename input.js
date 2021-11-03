const { CONTROLS } = require("./constants");
let conn;

const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key)=>{
  if (key === '\u0003') {
    console.log();
    process.exit();
  }
  if (CONTROLS[key])
    conn.write(CONTROLS[key]);
  else console.log('Invalid Key');
};

module.exports = {
  setupInput,
};