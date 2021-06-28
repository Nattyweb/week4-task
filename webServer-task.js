// A web server to send an html page with my
// my name in a h1 tag


http = require('http')

const PORT = 8000
const hostname =  'localhost'

server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'})
	res.write('<h1>EGWALI CHUKWUNALU</h1>')
	res.end()
})

server.listen(PORT, error => {
	if(error) {
		console.log('something went wrong')
	}
	else {
		console.log(`Server running at ${hostname}:${PORT}`)
	}
})
