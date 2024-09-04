const http = require('http')
const fs = require('fs')


const homePage = fs.readFileSync('home.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const errorPage = fs.readFileSync('error.html')


const server = http.createServer( (req, res)=>{

    res.writeHead(200, {'Content-type':'text/html'})

    switch(req.url){
      case '/':
        res.end(homePage)
        break
      case '/about':
        res.end(aboutPage)
        break;
      case '/contact':
        res.end(contactPage)
        break;
      default:
        res.writeHead(404, {'Content-type':'text/html'})
        res.end(errorPage)
    }

} )

server.listen(8000, ()=>{
  console.log("server listening...")
})