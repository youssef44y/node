const generator = require('generate-password');

const password = generator.generate({
	length: 20,
	numbers: true
});


console.log(password);