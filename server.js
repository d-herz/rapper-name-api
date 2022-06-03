const express = require('express')

const app = express()
const PORT = 8000

const rappers = {
  'age': 29,
  'birthName': 'Shéyaa Bin Abraham-Joseph' ,
  'birthLocation': 'London, England'
}


app.get('/', (request, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) =>{
  const rapperName = req.params.name.toLowerCase() //this line of code grabs what is after the api/ in the url:
  if (rappers[rapperName]){
    res.json(rappers[rapperName]) //responding with the object savage (built above) 
  }else {
    res.json(rappers['unknown'])
  }
  
})

app.listen( PORT , () => {
  console.log(`The server is now running on port ${PORT}! Go catch the mofo`)

})