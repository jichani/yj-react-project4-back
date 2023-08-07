import "./db.js";
import express from "express";
import morgan from "morgan";
import rentalRouter from "./routers/rentalRouter.js";
import cors from "cors";
import foodsRouter from "./routers/foodsRouter.js";

const PORT = 8080;
const app = express()

const corsOptions = {
  origin: [
    "http://localhost:3000", "https://polite-sundae-84c7bd.netlify.app"
  ],
  methods: ["GET", "POST"],
  credentials: true,
}

app.use(cors(corsOptions));
// 라우팅 하기 전에 미들웨어를 해야만 실행이 된다. 현재 자리가 되게 중요함!
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/foods", foodsRouter);

app.use("/api/rental", rentalRouter);

const handleListening = () => console.log(`😊 server listening on port http://localhost:${PORT} 😊`);

// 포트번호
app.listen(PORT, handleListening);