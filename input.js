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

  key === 'w' ? conn.write('Move: up') :
    key === 'a' ? conn.write('Move: left') :
      key === 's' ? conn.write('Move: down') :
        key === 'd' ? conn.write('Move: right') :
          key === 'e' ? conn.write('Say: EZ PZ') :
            key === 'q' ? conn.write('Say: OOF') :
              key === 'x' ? conn.write('Say: COMIN THRU!') :
                key === 'f' ? conn.write('Say: MINE NOW! LUL') :
                  console.log('Invalid Key');
};

module.exports = {setupInput};