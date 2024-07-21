import express from "express";
import {signup} from "../controller/userController.js";
import {user} from "../controller/userController.js";
import { borrow } from "../controller/userController.js";
const route=express.Router();
route.post("/signup",signup);
route.get("/user",user);
route.post("/borrow",borrow);

export default route;