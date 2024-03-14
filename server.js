require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { init } = require('./src/services/db')
// définition du port
const port = 3000
// création de l'application express
const app = express()

// installation de middleware de sécurité
app.use(helmet())
app.use(cors())

// middleware de décodage des requêtes
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middleware de log
app.use(morgan('dev'))

// Connexion à la base de données
init()
// route '/'
app.get('/', (req, res) => {
  res.send('prout')
})

// connexion à la route todos
app.use('/todos', require('./src/routes/todos'))
app.use('/auth', require('./src/routes/auth'))

// lancement de l'API
app.listen(port, () => {
  console.log('Server is listening on port :' + port)
})
