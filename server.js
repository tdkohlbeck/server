'use strict'

import express from 'express'
import body_parser from 'body-parser'

const app = express()
app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

const port = process.env.PORT || 7789
app.listen(
  port,
  () => console.log('travisk.com serving on port', port)
)