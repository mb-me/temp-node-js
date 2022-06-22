const os = require("os");

// info about current user
const user = os.userInfo();

// метод вернуть система аптайм в секундах

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
