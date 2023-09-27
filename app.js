import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import customerRouter from "./routes/customer.js";
import studentRouter from "./routes/student.js";
import productRouter from "./routes/product.js";
import EJSLayouts from "express-ejs-layouts";
//environment var
dotenv.config();
const PORT = process.env.PORT || 6006;

//init express
const app = express();

//use express middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// ejs setup
app.set("view engine", "ejs");
app.use(EJSLayouts)

//static folder
app.use(express.static("public"));


// router
app.use(customerRouter);
app.use(studentRouter);
app.use(productRouter);
 
 
//listent server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})