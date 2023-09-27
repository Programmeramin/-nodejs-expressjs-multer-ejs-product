import express from "express";
import {GetAllStudent} from "../controller/studentController.js";
import {studentPhoto} from "../utils/multer.js";

//init router
const router = express.Router();

//router
router.post("/student" ,studentPhoto, GetAllStudent); 

//default export
export default router;