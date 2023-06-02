// const express = require('express');
// const fileUpload = require('express-fileupload');
// const pdfParse = require('pdf-parse');

// const app = express();

// app.use("/",express.static("public"));

// app.use(fileUpload());

// app.post("/extract-text",(req,res)=>{
//   pdfParse(req.files.pdfFile).then(result =>{
//     res.send(result.text)
//   })
// })

// app.listen(3000);

const express = require("express");
const fileUpload = require("express-fileupload");
 const pdfParse = require("pdf-parse");
// let fs = require('fs');
// const wordExtractor = require("word-extractor");
// const extractor = new wordExtractor();
// const extracted = extractor.extract("SMS_Content_1.docx");

// extracted.then(function(doc) {
//      console.log(doc.getBody()); 
//      fs.writeFileSync("output.txt",doc.getBody(),"utf-8")
//     });

const app = express();

app.use("/", express.static("public"));
app.use(fileUpload());

app.post("/extract-text", (req, res) => {
    if (!req.files && !req.files.wordFile) {
        res.status(400);
        res.end();
    }

    pdfParse(req.files.pdfFile).then(result => {
        res.send(result.text);
     })
    });


app.listen(3000);
