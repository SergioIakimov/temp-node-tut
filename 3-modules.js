//modules

const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alt-flavor");
console.log(names);
console.log(data);
require("./7-mind-grenade");

sayHi(`susan`);
sayHi(names.john);
sayHi(names.peter);
