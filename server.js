require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { init } = require('./src/services/db')
// création de l'application express
const app = express()
// définition du port
const port = 3000

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
  console.log(req.body)
})

// connexion à la route todos
app.use('/todos', require('./src/routes/todos'))
app.use('/auth', require('./src/routes/auth'))
app.use('/signup', require('./src/routes/user'))

// lancement de l'API
app.listen(port, () => {
  console.log('Server is listening on port :' + port)
})
