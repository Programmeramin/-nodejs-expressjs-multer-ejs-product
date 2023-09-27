import express from "express";
import {GetAllCustomer} from "../controller/customerController.js";
import {customerPhoto} from "../utils/multer.js";
//init router
const router = express.Router();

//router
router.post("/customer",customerPhoto, GetAllCustomer);

//default export
export default router;