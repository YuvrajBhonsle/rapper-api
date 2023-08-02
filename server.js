const express = require("express")
const app = express();
const cors = require("cors")
const PORT = 8000;

app.use(cors())

const rappers = {
  '21 savage': {
    'age': 30,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England',
  },
  'chance the rapper': {
    'age': 30,
    'birthName': 'Chancelor Johnathan Bennett',
    'birthLocation': 'Chicago, Illinois',
  },
  'dax': {
    'age': 29,
    'birthName': 'Daniel Nwosu Jr.',
    'birthLocation': "St. John's, Canada",
  },
  'eminem': {
    'age': 50,
    'birthName': 'Marshall Bruce Mathers III',
    'birthLocation': 'Saint Joseph, Missouri, United States',
  },
  'unknown': {
    'age': 'unknown',
    'birthName': 'unknown',
    'birthLocation': 'unknown',
  },
}

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if(rappers[rapperName]){
    response.json(rappers[rapperName])
  }else{
    response.json(rappers['unknown']);
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}. Gotta catch it up!`);
})