const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.10', // 165.227.47.243 for LHL
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', ()=>{
    console.log('Successfully connected to game server');
    conn.write('Name: Adm');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('close', ()=>{
    process.exit();
  });
  return conn;
};

module.exports = {connect};