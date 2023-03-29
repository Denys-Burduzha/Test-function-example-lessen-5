// const express = require('express');
// const cors = require('cors');
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs/promises");
// const {v4} = require("uuid");


// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));

// const tempDir = path.join(__dirname, "temp");
// const ProductsDir = path.join(__dirname, "public", "products");

// const multerConfig = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, tempDir)
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
//     limits: {
//         fileSize: 2048
//     }
// });

// const upload = multer({
//     storage: multerConfig
// })

// const products = [];

// app.post("/api/products", upload.single("image"), async(req, res) => {
//     const {path: tempUpload, originalname} = req.file;
//     const resultUpload = path.join(ProductsDir, originalname);
//     try {
//         await fs.rename(tempUpload, resultUpload);
//         const image = path.join("products", originalname);
//         const newProduct = {
//             name: req.body.name,
//             id: v4(),
//             image
//         };
//         products.push(newProduct);
//         res.status(201).json(newProduct);
//     } catch (error) {
//         await fs.unlink(tempUpload);
//     }
// });

// app.get("/api/products", async(req, res) => {
//     res.json(products);
// })

// =============================================================
// =============================================================
// =============================================================



const express = require('express');

const app = express();

module.exports = app;

const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "tikij39166@cyclesat.com",
    from: "burduzhad@gmail.com",
    subject: "Нова заявка з сайту",
    html: "<p>З сайту прийшла заявка!</p>",
};

sgMail.send(email)
    .then(() => console.log("Email send success"))
    .catch(error => console.log(error.message))


