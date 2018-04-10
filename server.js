'use strict'
const express = require('express')
const body_parser = require('body-parser')
const fs = require('fs')

const fb_bot = require('./fb-bot')
const sms_bot = require('./sms-bot')

const app = express()
app.use('/public', express.static(__dirname + '/public'))
app.use(body_parser.json()) // for fb?
app.use(body_parser.urlencoded({extended: false})) // for sms

/*const start = fs.readFile('./html/head+nav.html', (err, data) => {
  if (err) throw err
  return data
})

const about = fs.readFile('./html/about.html', (err, data) => {
  if (err) throw err
  return data
})

const pageFiles = {}
const pageFilenames = fs.readdir('./html')
const startindex = pageFilenames.indexOf(filename)
pageFilenames.forEach(filename => {
  const pageHtml = fs.readFile('./html/' + filename)
  pageFiles[ page.remove('.html') ] = pageHtml
})

const end = '</body></html>'

function sendPage(res, page) {
  res.write(start)
  res.write(pageFiles[page])
  res.write(end)
  res.end()
}
*/
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/resume', (req, res) => {
  res.sendFile(__dirname + '/public/resume.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})*

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/public/projects.html')
})

app.get('/webhook', fb_bot.handle_get_request)
app.post('/webhook', fb_bot.handle_post_request)

app.post('/sms', sms_bot.handle_post_request)

const port = process.env.PORT || 7789
app.listen(
  port,
  () => console.log('travisk.com serving on port', port)
)
