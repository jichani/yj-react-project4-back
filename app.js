import express from "express";
const app = express()

app.get('/test', function (req, res) {
  res.send("안녕하세요")
})

// 포트번호
app.listen(8080)