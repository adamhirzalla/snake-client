const {connect} = require('./client');
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (input)=>{
    if (input === '\u0003') {
      console.log();
      process.exit();
    }
  });
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();