// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  let timeStart = new Date
  let reqMethod = req.method
  let reqUrl = req.originalUrl

  res.on('finish', function () {
    let timeEnd = new Date
    let totalTime = timeEnd - timeStart
    console.log(`${timeStart.toISOString()} | ${reqMethod} from ${reqUrl} | total time:${totalTime}(ms) `)
  });

  next()
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})