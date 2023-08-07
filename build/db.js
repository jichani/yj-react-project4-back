"use strict";

require("dotenv/config");
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect(process.env.DB_URL);
var db = _mongoose["default"].connection;
var handleOpen = function handleOpen() {
  return console.log("😄 Connected to DB 😄");
};
db.on("error", function (error) {
  return console.log("🥲 DB error 🥲", error);
});
db.once("open", handleOpen);