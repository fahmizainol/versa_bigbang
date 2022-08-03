// for file writing
const fs = require('fs');

// initialize array from 1 to 100
var arr1 = Array.from(Array(100).keys(), x => x+1);

// replace
for(let i=0; i<arr1.length; i++){

    if(arr1[i] % 3 == 0 && arr1[i] % 5 == 0){
        arr1[i]= 'BIGBANG';}
    if(arr1[i] % 3 == 0){
        arr1[i]= 'BIG';}
    if(arr1[i] % 5 == 0){
        arr1[i]= 'BANG';}

}

// writefile to output.json
fs.writeFile('output.json', JSON.stringify(arr1), err => {
    if (err) console.log(err);
    else console.log("File output.json created...");
} )

console.log(arr1);
