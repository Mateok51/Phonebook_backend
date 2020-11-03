const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")

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

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
]

app.get("/api/persons", (request, response) => {
  response.json(persons)
  morgan("tiny")
})

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find((person) => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter((p) => p.id !== id)

  response.status(204).end()
})

app.get("/info", (request, response) => {
  const userNb = Math.max(...persons.map((n) => n.id))
  const currentDate = new Date()
  response.send(
    `<p>Phonebook has info for ${userNb} people</p><p>${currentDate}</p>`
  )
})

app.post("/api/persons", (request, response) => {
  const body = request.body
  const name = persons.find((p) => p.name === body.name)
  if (name) {
    return response.status(400).json({
      error: `the name ${body.name} is already used in the phonebook`,
    })
  }
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: `content ${body} missing`,
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateRandomId(10000),
  }
  persons = persons.concat(person)

  response.json(body)
})
const generateRandomId = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ˘${PORT}`)
})
