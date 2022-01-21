const fs=require('fs');
const superheroes = require('superheroes');
const superhero =  require("superheroes");

// copy the file.txt to file1.txt with native modules
fs.copyFileSync("file.txt","file1.txt");

//randomly generating super hero names using external module that is npm 

var heronames = superheroes.random();
console.log(heronames)