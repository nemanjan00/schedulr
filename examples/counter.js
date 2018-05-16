// If you are using this code, replace "../" with "schedulr"
const s = require("../");

let counter = 0;

s.run().every(1).second().function(() => {
	console.log(++counter);
});

