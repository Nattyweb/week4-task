// A program to extract data from an API and 
// print the names from the extracted data

// load the https module
const https = require('https')

// initiate a get requedt
https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
    let  data = '';
	//receive chunks of data
	resp.on('data', (chunk) => {
		data += chunk;
	})

	resp.on('end', () => {
	
	//	save the data in a variable users
	users = JSON.parse(data);
	
	//print names 
	users.forEach(user => {
		console.log(user.name);
	})
	})
}).on("error",(err) => {
	console.log("Error:" +err.message)
})




