
const fs=require("fs");
const lunr=require("lunr");

let data=require("./data/wiki.json");

let idx=lunr(function(){

 this.ref("name");

 this.field("name");

 data.items.forEach(d=>this.add(d));

});

fs.writeFileSync("data/search.json",JSON.stringify(idx));

console.log("Search built");
