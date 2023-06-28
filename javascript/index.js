const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, response) => {
//   response.send('js says "Hello World!"')
// })

function hello(request, response) {
  response.send('Hello Brendan')
}
app.get('/', hello)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
