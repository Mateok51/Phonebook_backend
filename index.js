require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const Person = require("./models/person")

app.use(express.static("build"))
app.use(cors())
app.use(express.json())
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person"
  )
)

morgan.token("person", (request, response) => {
  if (request.method === "POST") {
    return JSON.stringify(request.body)
  } else {
    return null
  }
})

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

app.get("/info", (request, response) => {
  const currentDate = new Date()
  Person.countDocuments({}).then((personNb) => {
    response.send(
      `<p>Phonebook has info for ${personNb} people</p><p>${currentDate}</p>`
    )
  })
})

app.post("/api/persons", (request, response, next) => {
  const body = request.body
  //Checks if the name is is missing
  if (!body.name) {
    return response.status(400).json({
      error: "The name is missing from your input",
    })
  }
  //Checks if the number is missing
  if (!body.number) {
    return response.status(400).json({
      error: "The number is missing from your input",
    })
  }
  //If no input is missing
  const person = new Person({
    name: body.name,
    number: body.number,
  })
  person
    .save()
    .then((savedPerson) => {
      return response.json(savedPerson)
    })
    .catch((error) => next(error))
})

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      if (updatedPerson) {
        response.json(updatedPerson)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

//Looks for error
const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  //If the wrong id is used
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" })
  }
  //If the same name is used
  else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ˘${PORT}`)
})
