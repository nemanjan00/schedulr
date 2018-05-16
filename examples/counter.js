// If you are using this code, replace "../" with "schedulr"
const s = require("../");

let counter = 0;

s.run(15).times().every(15).seconds().and(1).times().every(2).seconds().function(() => {
	console.log(counter += 2);
});

