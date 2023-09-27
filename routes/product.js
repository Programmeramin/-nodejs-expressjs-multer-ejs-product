import express from "express";
import { GetAllProduct } from "../controller/productController.js";
import {
    CreateProduct,
    SingleProduct,
    deleteProduct,
    showProductPage,
    showcreateProductPage,
    showsingleProductPage,
    showEditProductPage,
    updateProductPage
    } from "../controller/productController.js";
import {createProductMulter} from "../utils/multer.js"

//init router
const router = express.Router();


// ejs route
router.get("/",showProductPage );
router.get("/create", showcreateProductPage );
router.get("/single/:slug",  showsingleProductPage);
router.get("/edit/:id",  showEditProductPage);
router.post("/update/:id" , createProductMulter, updateProductPage);



//api route
router.get("/product", GetAllProduct);
router.get("/product/:slug", SingleProduct);
router.get("/product-delete/:id", deleteProduct);
router.post("/product",createProductMulter, CreateProduct);

//export router
export default router;