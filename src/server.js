import express from "express";
import morgan from "morgan";

const PORT = 8080;
const app = express()

// 라우팅 하기 전에 미들웨어를 해야만 실행이 된다. 현재 자리가 되게 중요함!
app.use(morgan("dev"))

app.get('/test', function (req, res) {
  res.send("안녕하세요");
})

const handleListening = () => console.log(`😊 server listening on port http://localhost:${PORT} 😊`);

// 포트번호
app.listen(PORT, handleListening);