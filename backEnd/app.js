const express = require('express')
const app = express()
const port = 3000
const todoRoutes = require('./Routes/todoRoutes');

app.use('/todo', todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


