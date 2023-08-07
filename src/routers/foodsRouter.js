import express from "express";

const foodsRouter = express.Router();

foodsRouter.get("/joongu", getJoonguFoods)

export default foodsRouter;