// npm - global command, comes withnode
// npm --version

//local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project)
// mannual approach
// npm iniy (stepby step)
// npm init -y

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello people");
