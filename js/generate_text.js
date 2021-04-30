// // import * as pdf from 'html-pdf';
// // import * as fs from 'fs';
// let fs = require('fs');
// let pdf = require('html-pdf');

//This part is supposed to generate a pdf, but I couldn't get it to work :(

let button = document.getElementById("funPart");
function makeFile() {
    let html = fs.readFileSync('./index.html', 'utf-8');
    let options = { format: 'Letter' };

    pdf.create(html, options).toFile('./test.pdf', function(err, res) {
        if (err) return console.log(err);
    });
}
