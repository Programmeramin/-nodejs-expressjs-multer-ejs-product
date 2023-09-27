import multer from "multer";



//file upload system
 const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        if(file.fieldname === "customerPhoto"){
            cb(null, "public/customer")
        }else if(file.fieldname === "studentPhoto"){
            cb(null, "public/student")
        }else if(file.fieldname === "productPhoto"){
            cb(null, "public/product")
        }
    },

    filename : (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

export const customerPhoto = multer({
    storage,
    fileFilter : (req, file, cb) =>{

    if(file.mimetype === "image/jpeg" || 
        file.mimetype === "image/jpg" || file.mimetype === "image/png"){
            cb(null, true);
        }else{
            cb(new Error('Invalid filetype'))
        }


    },
}).single("customerPhoto");

export const studentPhoto = multer({storage}).array("studentPhoto", 10);


export const createProductMulter = multer({storage}).single("productPhoto");



