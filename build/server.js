"use strict";

require("./db.js");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _rentalRouter = _interopRequireDefault(require("./routers/rentalRouter.js"));
var _cors = _interopRequireDefault(require("cors"));
var _foodsRouter = _interopRequireDefault(require("./routers/foodsRouter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = 8080;
var app = (0, _express["default"])();
var corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
// 라우팅 하기 전에 미들웨어를 해야만 실행이 된다. 현재 자리가 되게 중요함!
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/foods", _foodsRouter["default"]);
app.use("/api/rental", _rentalRouter["default"]);
var handleListening = function handleListening() {
  return console.log("\uD83D\uDE0A server listening on port http://localhost:".concat(PORT, " \uD83D\uDE0A"));
};

// 포트번호
app.listen(PORT, handleListening);