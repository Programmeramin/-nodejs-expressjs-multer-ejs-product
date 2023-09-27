 import {generateRandomId, createSlug} from "../helper/helper.js";
 import fs from "fs";

/**
 * Get All Products
 */

export const GetAllProduct = (req, res) =>{
    
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    if(productData.length === 0){
        res.status(200).json("No data found")
    }

    res.status(200).json({productData});
};


/**
 * single Products
 */

export const SingleProduct = (req, res) =>{
    const {slug} = req.params;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    const SingleProduct = productData.find((data) => data.slug === slug);

    
    res.status(200).json(SingleProduct);
};


/**
 *  Create Products
 */

export const CreateProduct = (req, res) =>{
    
    const {name, regularPrice, salePrice, stock} = req.body;

    // product name regularPrice required 
    if(!name || !regularPrice){
        res.status(200).json({Message : "Product name and regularPrice required"});
        return;
    }

    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());


    //product name check

    if(productData.some((data) => data.name === name)){
        res.status(200).json({Message : "Product data already exist "});
        return ;
    }

    const product = {
        id : generateRandomId(),
        slug : createSlug(name),
        name,
        regularPrice,
        salePrice,
        stock,
        photo : req.file.filename,
    };

    productData.push(product)

     fs.writeFileSync("db/product.json", JSON.stringify(productData))

    res.redirect("/");
};



/**
 *  deletes Products
 */

export const deleteProduct = (req, res) =>{
    const {id} = req.params;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
   
    const updateData = productData.filter((data) => data.id !== id);

    fs.writeFileSync("db/product.json", JSON.stringify(updateData));
    
    res.redirect("/");
};


//show product page
export const showProductPage = (req, res) =>{
   
    //get all products
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

   
    res.render("product",{
        product : productData,
    })
}

//create product page
export const showcreateProductPage = (req, res) =>{
    res.render("create")
}


//shwot single product page
export const  showsingleProductPage = (req, res) =>{

    const {slug} = req.params;

    //get all products
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    const SingleProduct = productData.find((data) => data.slug === slug)

    res.render("show",{
        product : SingleProduct,
    })
}


//shwot edit product page
export const  showEditProductPage = (req, res) =>{

    const {id} = req.params;

    //get all products
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    const editProduct = productData.find((data) => data.id === id)

    res.render("edit",{
        product : editProduct,
    });
};


// update product
export const updateProductPage = (req, res) =>{
    const {id} = req.params;

    const {name, regularPrice, salePrice, stock} = req.body;

     //get all products
     const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

     //photo manage
     let photo_name = productData[productData.findIndex(data => data.id === id)].photo;

     if(req ?.file ?.filename){
     photo_name = req.file.filename;
     }

     productData[productData.findIndex(data => data.id === id)] ={
           id : id,
           name,
           slug : createSlug(name),
           regularPrice,
           salePrice,
           stock,
           photo : photo_name,
     }
    
     fs.writeFileSync("db/product.json", JSON.stringify(productData));
     res.redirect('/')

}

