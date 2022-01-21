const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('total memory is : '+totalMemory);

console.log(`Total memory is ${totalMemory}`);

console.log(`Free memory is ${freeMemory}`);
