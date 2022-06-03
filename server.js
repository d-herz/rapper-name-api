const express = require('express')

const app = express()
const cors = require('cors')
const PORT = 8000

app.request(cors())

const rappers = {
  '21 savage':{
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'chance the rapper':{
    'age': 28,
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'dylan':{
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
  }
  
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

app.listen( procsess.env.PORT || PORT , () => {
  console.log(`The server is now running on port ${PORT}! Go catch that mofo`)

})