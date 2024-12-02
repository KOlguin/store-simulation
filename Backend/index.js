const express = require('express')

const routes = require('./src/routes/index')
const database = require('./src/models/index')

const app = express()
const port = 3000

app.use(express.json())

app.use(routes)

// app.get('/', (req, res) => {
//   res.send('Hello world!')
// })

database.sequelize
        .sync()
        .then(() => {
          console.log('Databse Connected')
          app.listen(port, () => {
            console.log(`Server listen on ${port}`)
          })
        })
        .catch((err) => console.error('Unable to Connect to database:', err))

// app.listen(port, () => {
//   console.log(`Server listen on ${port}`);
// });