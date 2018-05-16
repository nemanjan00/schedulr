// If you are using this code, replace "../" with "schedulr"
const s = require("../");

let counter = 0;

s.run(15).times().every(15).second().function(() => {
	console.log(counter++);
});

